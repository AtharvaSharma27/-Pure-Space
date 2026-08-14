import { useEffect, useState, useRef } from 'react';
import { Palette, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('blue');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load saved theme on mount
    const savedTheme = localStorage.getItem('app-theme') || 'blue';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('app-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <motion.div
      ref={containerRef}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      className="fixed bottom-24 right-6 z-50 flex flex-col items-center gap-2 cursor-move"
      style={{ touchAction: 'none' }}
    >
      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-100 flex flex-col items-center gap-2">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Toggle theme switcher"
          title="Drag to move, click to open"
        >
          {isOpen ? (
            <X size={20} className="text-gray-600" />
          ) : (
            <Palette size={20} className="text-gray-600" />
          )}
        </button>

        {/* Color Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.8 }}
              animate={{ height: 'auto', opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2 overflow-hidden items-center py-1"
            >
              {/* Blue Theme Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  changeTheme('blue');
                }}
                className={`w-8 h-8 rounded-full bg-[#1A4B8C] border-2 transition-transform hover:scale-110 shadow-sm ${
                  theme === 'blue' ? 'border-gray-800 scale-110' : 'border-transparent'
                }`}
                aria-label="Blue theme"
                title="Blue Theme"
              />

              {/* Yellow Theme Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  changeTheme('yellow');
                }}
                className={`w-8 h-8 rounded-full bg-[#CD950C] border-2 transition-transform hover:scale-110 shadow-sm ${
                  theme === 'yellow' ? 'border-gray-800 scale-110' : 'border-transparent'
                }`}
                aria-label="Yellow theme"
                title="Yellow Theme"
              />

              {/* White/Minimal Theme Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  changeTheme('white');
                }}
                className={`w-8 h-8 rounded-full bg-white border-2 transition-transform hover:scale-110 shadow-inner ${
                  theme === 'white' ? 'border-gray-800 scale-110' : 'border-gray-300'
                }`}
                aria-label="White theme"
                title="White Theme"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ThemeSwitcher;
