import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    { name: 'Pão Francês', description: 'Crocante por fora, macio por dentro', icon: '🥖' },
    { name: 'Croissant', description: 'Folhado e amanteigado', icon: '🥐' },
    { name: 'Baguete', description: 'Tradicional francesa', icon: '🍞' },
    { name: 'Bolo de Cenoura', description: 'Com cobertura de chocolate', icon: '🍰' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-padaria-blue via-padaria-orange to-padaria-red flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">
            Bem-vindo à Padaria Delícia
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Onde o tradição encontra o sabor
          </p>
          <div className="space-x-4">
            <Link to="/galeria" className="btn-primary inline-block">
              Ver Produtos
            </Link>
            <Link to="/contato" className="btn-secondary inline-block">
              Fazer Pedido
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-padaria-brown">
            Nossos Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="card text-center p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-padaria-blue">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-padaria-brown">
              Tradição Desde 1985
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Há mais de 35 anos, a Padaria Delícia leva aos nossos clientes produtos 
              artesanais de alta qualidade. Nossa missão é manter viva a tradição da 
              panificação artesanal, usando apenas os melhores ingredientes.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Cada pão, bolo e doce é preparado com carinho e dedicação, seguindo receitas 
              tradicionais que passam de geração em geração.
            </p>
            <Link to="/sobre" className="btn-primary">
              Conheça Nossa História
            </Link>
          </div>
          <div className="bg-gradient-to-br from-padaria-orange to-padaria-red rounded-2xl h-96 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-8xl mb-4">👨‍🍳</div>
              <p className="text-xl">Artesanal de Verdade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-padaria-blue to-padaria-orange text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Faça Seu Pedido Agora</h2>
          <p className="text-xl mb-8">
            Entre em contato conosco para fazer seu pedido ou marcar uma visita
          </p>
          <Link to="/contato" className="btn-secondary text-lg px-8 py-4">
            Entrar em Contato
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
