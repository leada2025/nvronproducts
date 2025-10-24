import { motion } from 'framer-motion';
import { ArrowRightIcon } from './icons';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>
      
      <div className="p-6">
        {/* Product Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="w-6 h-6 bg-white rounded-lg opacity-20"></div>
          </motion.div>
          
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            {product.status === 'available' ? 'Available' : 'Coming Soon'}
          </span>
        </div>

        {/* Product Info */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((feature, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href={product.link}
          whileHover={{ x: 5 }}
          className="inline-flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform group-hover:scale-105 shadow-lg group-hover:shadow-xl"
        >
          <span>View Product</span>
          <ArrowRightIcon className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProductCard;