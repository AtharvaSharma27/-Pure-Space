import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || whatsappNumber;

  const whatsappMessage = encodeURIComponent(
    "Hi! I'd like to enquire about your products."
  );

  return (
    <section
      id="contact"
      className="py-16 sm:py-24"
      style={{
        background: 'linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-[26px] sm:text-4xl font-semibold text-brand-blue mb-3">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-brand-gray">
            Reach us instantly on WhatsApp or give us a call — we're happy to help.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* WhatsApp Card */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex flex-col items-center gap-4 p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-[#25D366]/20 bg-white cursor-pointer group"
            style={{ textDecoration: 'none' }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
              <MessageCircle size={32} color="white" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-brand-dark mb-1">Chat on WhatsApp</h3>
              <p className="text-sm text-brand-gray">Send us a message anytime</p>
            </div>
            <span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 shadow-md group-hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={16} />
              Open WhatsApp →
            </span>
          </motion.a>

          {/* Call Card */}
          <motion.a
            href={`tel:+${phoneNumber}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex flex-col items-center gap-4 p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-brand-teal/20 bg-white cursor-pointer group"
            style={{ textDecoration: 'none' }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-brand-teal" style={{ background: 'linear-gradient(135deg, #0099A8, #006B75)' }}>
              <Phone size={32} color="white" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-brand-dark mb-1">Call Us Directly</h3>
              <p className="text-sm text-brand-gray">Talk to us right now</p>
            </div>
            <span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 shadow-md group-hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #0099A8, #006B75)' }}
            >
              <Phone size={16} />
              Call Now →
            </span>
          </motion.a>
        </div>

        {/* IndiaMART Banner */}
        <motion.a
          href="https://www.indiamart.com/purespacecleaners-mumbai/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-white shadow-lg border border-orange-200 cursor-pointer group"
          style={{ textDecoration: 'none' }}
        >
          <div className="flex items-center gap-4">
            {/* IndiaMART logo mark */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
              style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3 3h7v2H5v14h14v-5h2v7H3V3z"/>
                <path d="M13 3h8v8h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H13V3z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-brand-dark">Find us on IndiaMART</p>
              <p className="text-xs text-brand-gray">Browse & enquire about our products</p>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold transition-all duration-300 shadow-md group-hover:shadow-lg flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)' }}
          >
            Visit Store →
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
