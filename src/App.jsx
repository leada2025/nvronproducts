import { useState } from 'react';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import ProductGrid from './components/ProductGrid';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero/>
      <FilterSection 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ProductGrid 
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />
      
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;