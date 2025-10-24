// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        "HOME",
        "PRODUCTS", 
        "CONTACT",
      ]
    },
  ];

  const handleQuickLinkClick = (link) => {
    const sectionId = link.toLowerCase();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const offset = 80;
      const targetPosition = targetSection.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-black to-black text-white min-h-[80vh] flex flex-col">
      {/* Main Footer Content - Takes most space */}
      <div className="flex-1 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section with Larger Logo */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-start space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Larger Logo Image */}
              <div className="w-44 h-40 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/Nvron.webp" 
                  alt="NVRON Life Science Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo */}
                <div 
                  className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center hidden"
                  style={{ display: 'none' }}
                >
                  <span className="text-white font-bold text-xl">N</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-2 text-white">NVRON</h3>
                <p className="text-cyan-300 text-lg mb-4">Innovating Healthcare Excellence</p>
                
                {/* Company Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h5 className="font-semibold text-2xl mb-2 text-cyan-300">NVRON Life Science Ltd</h5>
                  <p className="text-blue-200 text-base">Transforming Patient Care Through Innovation</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-blue-200 mb-8 leading-relaxed max-w-md text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Committed to advancing healthcare through innovative medical solutions 
              and comprehensive patient support programs that improve quality of life.
            </motion.p>

            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-900/30 rounded-2xl p-6 backdrop-blur-sm border border-blue-700/30"
            >
              <h4 className="text-cyan-300 font-bold text-lg mb-3">Our Commitment</h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Dedicated to research, development, and delivery of high-quality healthcare solutions 
                that make a meaningful difference in patients' lives worldwide.
              </p>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-xl mb-6 text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link}>
                    <button 
                      onClick={() => handleQuickLinkClick(link)}
                      className="text-blue-200 hover:text-cyan-300 transition-all duration-300 hover:underline text-lg font-medium hover:translate-x-2 transform flex items-center space-x-2"
                    >
                      <span>{link}</span>
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-white">Contact Us</h4>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">✉️</span>
                </div>
                <div className="flex-1">
                  <p className="text-blue-200 font-semibold text-lg">Email</p>
                  <a 
                    href="mailto:info@nvron.in" 
                    className="text-cyan-300 hover:text-cyan-200 transition-colors break-all text-base"
                  >
                    info@nvron.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div className="flex-1">
                  <p className="text-blue-200 font-semibold text-lg">Phone</p>
                  <a 
                    href="tel:+917904389003" 
                    className="text-cyan-300 hover:text-cyan-200 transition-colors text-base"
                  >
                    +91 79043 89003
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div className="flex-1">
                  <p className="text-blue-200 font-semibold text-lg">Address</p>
                  <p className="text-blue-200 text-base leading-relaxed">
                    SF No 434, 29/2, Athipalayam Rd,<br />
                    Sri Lakshmi Nagar, Ganapathy,<br />
                    Coimbatore, Tamil Nadu - 641006
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 mt-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🕒</span>
                </div>
                <div className="flex-1">
                  <p className="text-blue-200 font-semibold text-lg">Business Hours</p>
                  <p className="text-blue-200 text-base">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar - Fixed at bottom */}
      <div className="border-t border-blue-700 bg-gradient-to-r from-black to-black mt-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            <motion.p 
              className="text-blue-200 text-base text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} NVRON Life Science Ltd. All Rights Reserved.
            </motion.p>
            
            <motion.div 
              className="text-blue-300 text-base text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Developed by Leada Digital Dynamics
            </motion.div>
          </div>

          {/* Medical Disclaimer */}
          <motion.div 
            className="text-center bg-blue-900/20 rounded-xl p-6 border border-blue-700/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-300 text-sm max-w-4xl mx-auto leading-relaxed">
              💊 Important Medical Information: NVRON Life Science products are prescription medications. 
              Always consult with your healthcare provider for medical advice. Do not change your dosage 
              without consulting your doctor. Read the full prescribing information and discuss any 
              questions with your healthcare provider.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 opacity-20"
      >
        <div className="w-20 h-10 bg-cyan-500 rounded-full blur-xl"></div>
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-20 right-10 opacity-20"
      >
        <div className="w-16 h-8 bg-blue-500 rounded-full blur-xl"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;