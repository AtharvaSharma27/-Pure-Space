import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <p className="text-sm text-brand-teal font-medium mb-4">
              Clean Spaces. Pure Living.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              India's premium cleaning solutions brand — trusted by homes, hospitals, and businesses.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '91XXXXXXXXXX'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L.057 23.882l6.197-1.624A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.632-.5-5.146-1.377l-.369-.219-3.822 1.002 1.02-3.726-.24-.382A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/purespacecleaner?igsh=MTQxZGhmMzBpanl0NQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Floor Cleaner (Phenyl)', href: '#products' },
                { label: 'Liquid Floor Cleaner', href: '#products' },
                { label: 'Glass Cleaner', href: '#products' },
                { label: 'New Items', href: '#products' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-brand-teal transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  {import.meta.env.VITE_BRAND_PHONE || '+91-XXXXXXXXXX'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <a href="mailto:purespacecleaner@gmail.com" className="text-sm text-gray-400 hover:text-brand-teal transition-colors">
                  purespacecleaner@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            © {currentYear} Pure Space Cleaners. All rights reserved. Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
