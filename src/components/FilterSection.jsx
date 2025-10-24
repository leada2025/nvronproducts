import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon, XIcon, FilterIcon, SparklesIcon, TrendingUpIcon } from './icons';
import { useState, useEffect } from 'react';

const FilterSection = ({ searchQuery, onSearchChange, onClear, onFilter }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeSuggestions, setActiveSuggestions] = useState([]);

  // Popular search terms with categories
  const popularSearches = {
    trending: ["Mexcroin ",  "Flecroin "],
  
  };

  useEffect(() => {
    if (searchQuery.length > 1) {
      const allSuggestions = Object.values(popularSearches).flat();
      const filtered = allSuggestions.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4);
      setActiveSuggestions(filtered);
    } else {
      setActiveSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
  };

  const handleQuickFilter = (filter) => {
    onSearchChange(filter);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50 border-b border-gray-200/60 backdrop-blur-sm"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-cyan-200/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md rounded-2xl px-4 py-2 border border-gray-200/60 shadow-lg shadow-blue-500/5 mb-4"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <SparklesIcon className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold text-gray-700">Smart Search</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Discover <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find exactly what you need with our intelligent search and filtering system
          </p>
        </motion.div>

        {/* Enhanced Search Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Main Search Bar */}
            <motion.div
              className={`relative transition-all duration-500 ${
                isFocused ? 'scale-105' : 'scale-100'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-2xl blur-xl"
                animate={{
                  opacity: isFocused ? [0.3, 0.6, 0.3] : 0.1,
                  scale: isFocused ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: isFocused ? Infinity : 0,
                }}
              />

              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl shadow-blue-500/10 border border-white/20 overflow-hidden">
                <div className="flex items-center">
                  {/* Search Icon */}
                  <div className="pl-6 pr-4">
                    <motion.div
                      animate={{
                        rotate: isFocused ? [0, 10, -10, 0] : 0,
                        scale: isFocused ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <SearchIcon className={`w-6 h-6 ${
                        isFocused ? 'text-blue-500' : 'text-gray-400'
                      } transition-colors duration-300`} />
                    </motion.div>
                  </div>

                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Search products, features, or categories..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className="flex-1 py-5 pr-4 bg-transparent border-none focus:ring-0 focus:border-none text-lg placeholder-gray-400 font-medium text-gray-700"
                  />

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 pr-4">
                    {/* Clear Button */}
                    <AnimatePresence>
                      {searchQuery && (
                        <motion.button
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          onClick={onClear}
                          className="p-2 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-all duration-200 group"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <XIcon className="w-5 h-5" />
                        </motion.button>
                      )}
                    </AnimatePresence>

                    {/* Filter Button */}
                    <motion.button
                      onClick={() => {
                        onFilter();
                        setIsFilterOpen(!isFilterOpen);
                      }}
                      className={`p-2 rounded-xl transition-all duration-200 flex items-center space-x-2 ${
                        isFilterOpen 
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                          : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FilterIcon className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Search Suggestions */}
                <AnimatePresence>
                  {isFocused && activeSuggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-100 bg-white/95 backdrop-blur-md"
                    >
                      <div className="p-4">
                        <div className="text-sm font-semibold text-gray-500 mb-3 flex items-center space-x-2">
                          <TrendingUpIcon className="w-4 h-4" />
                          <span>Quick Suggestions</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {activeSuggestions.map((suggestion, index) => (
                            <motion.button
                              key={suggestion}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-left p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm font-medium"
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              {suggestion}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Quick Filter Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {Object.entries(popularSearches).map(([category, items]) => (
                <div key={category} className="flex items-center space-x-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {category}:
                  </span>
                  {items.slice(0, 2).map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuickFilter(item)}
                      className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg shadow-blue-500/10"
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Active Search Indicator */}
        <AnimatePresence>
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center mt-6"
            >
              <motion.div
                className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-gray-200/60 shadow-lg"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">
                  Searching for: <span className="text-blue-600">"{searchQuery}"</span>
                </span>
                <motion.button
                  onClick={onClear}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-full transition"
                >
                  <XIcon className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated Bottom Border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
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
    </motion.section>
  );
};

export default FilterSection;