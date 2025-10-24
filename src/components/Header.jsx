import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          return scrollPosition >= elementTop && scrollPosition <= elementBottom;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveTab(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Products', href: '#products', section: 'products' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  const handleNavClick = (item, event) => {
    event.preventDefault();
    setActiveTab(item.name);
    setIsMenuOpen(false);
    
    const targetSection = document.getElementById(item.section);
    if (targetSection) {
      const offset = 80;
      const targetPosition = targetSection.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab('Home');
  };

  // Mobile navigation handler with delay to ensure smooth scroll
  const handleMobileNavClick = (item, event) => {
    event.preventDefault();
    setActiveTab(item.name);
    
    // Close menu first, then scroll after a small delay
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const targetSection = document.getElementById(item.section);
      if (targetSection) {
        const offset = 80;
        const targetPosition = targetSection.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Wait for menu close animation
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white/95 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-2xl shadow-blue-500/10' : 'shadow-lg shadow-blue-500/5'
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side - Animated Logo */}
          <motion.div 
            className="flex items-center space-x-4 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToTop}
          >
            {/* Animated Logo Container */}
            <motion.div 
              className="relative"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden">
                <motion.div 
                  className="w-30 h-30 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src="/Nvron.webp" 
                    alt="NVRON Life Science" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement;
                      fallback.innerHTML = '<span class="text-white font-bold text-lg">N</span>';
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Animated Orbital Dots */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>

            {/* Brand Text with Animation */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h1 
                className="text-2xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent"
                whileHover={{ backgroundPosition: '100%' }}
                style={{
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 0%',
                  transition: 'background-position 0.5s ease'
                }}
              >
                NVRON
              </motion.h1>
              <motion.p 
                className="text-xs font-semibold text-gray-500 tracking-widest uppercase"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Life Science Ltd
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Side - Dynamic Navigation */}
          <nav className="flex items-center space-x-2">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 bg-gradient-to-r from-gray-50/80 to-blue-50/50 rounded-2xl px-1 py-1 border border-gray-200/60 shadow-inner">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeTab === item.name
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-700 hover:bg-white/80'
                  }`}
                >
                  {activeTab === item.name && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{item.name}</span>
                    {activeTab === item.name && (
                      <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                      />
                    )}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-3 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 hover:text-blue-600 rounded-xl shadow-inner border border-gray-200/60"
            >
              <motion.div
                animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </motion.div>
            </motion.button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="border-t border-gray-200/60 pt-4 pb-2 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={(e) => handleMobileNavClick(item, e)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full text-left flex items-center space-x-3 px-4 py-4 rounded-xl text-lg font-semibold transition-all duration-200 ${
                  activeTab === item.name
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span>{item.name}</span>
                {activeTab === item.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
    </motion.header>
  );
};

export default Header;