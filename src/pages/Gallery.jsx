import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'paes', name: 'Pães' },
    { id: 'doces', name: 'Doces' },
    { id: 'salgados', name: 'Salgados' },
    { id: 'bolos', name: 'Bolos' }
  ];

  const products = [
    { id: 1, name: 'Pão Francês', category: 'paes', emoji: '🥖' },
    { id: 2, name: 'Croissant', category: 'paes', emoji: '🥐' },
    { id: 3, name: 'Baguete', category: 'paes', emoji: '🍞' },
    { id: 4, name: 'Pão de Queijo', category: 'salgados', emoji: '🧀' },
    { id: 5, name: 'Pretzel', category: 'salgados', emoji: '🥨' },
    { id: 6, name: 'Brigadeiro', category: 'doces', emoji: '🍫' },
    { id: 7, name: 'Beijinho', category: 'doces', emoji: '🥥' },
    { id: 8, name: 'Bolo de Cenoura', category: 'bolos', emoji: '🍰' },
    { id: 9, name: 'Torta de Morango', category: 'bolos', emoji: '🍓' },
    { id: 10, name: 'Sonho', category: 'doces', emoji: '🍩' },
    { id: 11, name: 'Éclair', category: 'doces', emoji: '🍮' },
    { id: 12, name: 'Pão Integral', category: 'paes', emoji: '🌾' },
    { id: 13, name: 'Quiche', category: 'salgados', emoji: '🥧' },
    { id: 14, name: 'Bolo de Chocolate', category: 'bolos', emoji: '🍫' },
    { id: 15, name: 'Pão de Forma', category: 'paes', emoji: '🍞' },
    { id: 16, name: 'Empada', category: 'salgados', emoji: '🥟' }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="animate-fade-in py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-padaria-brown mb-6">Galeria de Produtos</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore nossa variedade de produtos artesanais, todos feitos com ingredientes 
            selecionados e muito amor.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-padaria-orange text-white shadow-lg'
                  : 'bg-white text-padaria-blue hover:bg-padaria-cream shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-padaria-cream to-orange-100 flex items-center justify-center rounded-t-xl">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-padaria-brown mb-2">{product.name}</h3>
                <span className="inline-block bg-padaria-blue-light text-white text-xs px-3 py-1 rounded-full">
                  {categories.find(cat => cat.id === product.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-padaria-blue mb-12">Ofertas Especiais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-gradient-to-br from-padaria-orange to-padaria-red text-white p-6 text-center">
              <div className="text-5xl mb-4">🌅</div>
              <h3 className="text-xl font-bold mb-2">Café da Manhã</h3>
              <p className="mb-4">Pão francês + café + manteiga</p>
              <div className="text-2xl font-bold">R$ 8,90</div>
            </div>
            <div className="card bg-gradient-to-br from-padaria-blue to-padaria-blue-light text-white p-6 text-center">
              <div className="text-5xl mb-4">🥖</div>
              <h3 className="text-xl font-bold mb-2">Kit de Pães</h3>
              <p className="mb-4">5 pães franceses + 1 baguete</p>
              <div className="text-2xl font-bold">R$ 12,90</div>
            </div>
            <div className="card bg-gradient-to-br from-padaria-red to-padaria-red-light text-white p-6 text-center">
              <div className="text-5xl mb-4">🍰</div>
              <h3 className="text-xl font-bold mb-2">Torta de Domingo</h3>
              <p className="mb-4">Torta de morango grande</p>
              <div className="text-2xl font-bold">R$ 29,90</div>
            </div>
          </div>
        </section>

        {/* Custom Orders CTA */}
        <section className="text-center bg-gradient-to-r from-padaria-cream to-orange-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-padaria-brown mb-4">Encomendas Especiais</h2>
          <p className="text-lg text-gray-700 mb-6">
            Faça encomendas personalizadas para festas, eventos corporativos ou ocasiões especiais.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Solicitar Encomenda
          </button>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
