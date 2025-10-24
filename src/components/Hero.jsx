import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 30; // Increased parallax effect
      const y = ((e.clientY - top) / height - 0.5) * 30;
      setMousePosition({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
  <section 
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-start overflow-x-hidden overflow-hidden bg-gray-900"
  id='home'
>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110" // Increased scale for bigger effect
          style={{
            backgroundImage: 'url("/building.jpg")',
            transform: `translateX(${mousePosition.x * 0.1}px) translateY(${mousePosition.y * 0.8}px) scale(1.1)`, // Enhanced parallax
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-transparent to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/25 via-transparent to-cyan-500/15" />
        
        {/* Enhanced Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl" // Larger elements
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 12, // Slower, more dramatic
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
            x: [40, -40, 40],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* New Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i * 7) % 50}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="inline-flex items-center space-x-3 bg-white/15 backdrop-blur-lg rounded-full px-6 py-3 border border-white/30 mb-10 shadow-2xl shadow-cyan-500/20"
          >
            <motion.div 
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: ['0 0 10px rgba(34, 211, 238, 0.5)', '0 0 20px rgba(34, 211, 238, 0.8)', '0 0 10px rgba(34, 211, 238, 0.5)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <span className="text-white/90 text-base font-semibold tracking-wide">Innovating Healthcare Since 2012</span>
          </motion.div>

          {/* Enhanced Main Headline with Smaller Text but Bigger Animations */}
{/* HEADLINE — replace only the Big Ideas span with this block */}
<motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="text-4xl md:text-4xl lg:text-5xl font-black text-white leading-[1.5] mb-10 tracking-tight overflow-visible"
  style={{ WebkitFontSmoothing: 'antialiased' }}
>
  Turning{' '}
  {/* Square outer line wrapper */}
  <span className="inline-block align-middle">
    <motion.span
      className="relative inline-block overflow-visible"
      animate={{
        scale: [1, 1.05, 1],
        textShadow: [
          '0 0 20px rgba(34, 211, 238, 0.3)',
          '0 0 40px rgba(34, 211, 238, 0.6)',
          '0 0 20px rgba(34, 211, 238, 0.3)'
        ]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ lineHeight: 1 }}
    >
      {/* The actual square box around the text */}
      <span className="relative inline-block">
        <span
          className="inline-block px-4 py-1.5 border-2 border-cyan-300 rounded-sm bg-transparent bg-clip-padding"
          style={{ paddingBottom: '0.35rem' }} // ensures descenders such as 'g' fit
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent font-black">
            Big Ideas
          </span>
        </span>

        {/* Optional: decorative outer square (slightly larger, absolute) */}
        <span className="pointer-events-none absolute inset-0 -translate-y-0.5 -translate-x-0.5" aria-hidden>
          <span className="block w-full h-full border-2 border-cyan-500/30 rounded-sm transform" />
        </span>
      </span>
    </motion.span>
  </span>{' '}
  Into
  <br />
  {/* rest of headline unchanged */}
  <motion.span className="relative inline-block" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
    Beautiful Products
    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }} />
  </motion.span>{' '}
  That Improve{' '}
  <motion.span className="text-white inline-block" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
    Patients'
  </motion.span>{' '}
  Quality Of Life
</motion.h1>


          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              ease: "easeOut"
            }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-3xl font-light tracking-wide"
          >
            Pioneering <motion.span 
              className="text-cyan-300 font-semibold inline-block"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >cutting-edge medical solutions</motion.span> that 
            transform patient care through innovation, precision, and uncompromising quality standards.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.8,
              type: "spring",
              stiffness: 80
            }}
            className="flex flex-col sm:flex-row gap-5 mb-14"
          >
            <motion.a
              href="#products"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.92 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl shadow-cyan-500/30 overflow-hidden text-lg"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative flex items-center space-x-4">
                <span>Explore Our Products</span>
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.08,
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                borderColor: 'rgba(255, 255, 255, 0.4)'
              }}
              whileTap={{ scale: 0.92 }}
              className="group px-10 py-5 bg-white/15 backdrop-blur-lg text-white font-semibold rounded-2xl border-2 border-white/25 hover:border-white/40 transition-all duration-300 text-lg"
            >
              <span className="flex items-center space-x-4">
                <span>Contact Us</span>
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </motion.svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1,
              staggerChildren: 0.2
            }}
            className="flex flex-wrap gap-10"
          >
            {[
              { number: '50K+', label: 'Patients Impacted' },
              { number: '25+', label: 'Products' },
              { number: '98%', label: 'Success Rate' },
        
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-black text-cyan-300 mb-2"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(34, 211, 238, 0.3)',
                      '0 0 40px rgba(34, 211, 238, 0.6)',
                      '0 0 20px rgba(34, 211, 238, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70 text-base font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
     

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-32 right-32 text-white/10"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity }
        }}
      >
        <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;