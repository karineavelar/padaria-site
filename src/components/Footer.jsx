import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-padaria-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🍞</div>
              <span className="text-xl font-bold font-display">Padaria Delícia</span>
            </div>
            <p className="text-gray-300">
              Tradição em cada pedaço. Nossa padaria artesanal oferece os melhores pães, doces e salgados desde 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-padaria-orange transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-padaria-orange transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-300 hover:text-padaria-orange transition-colors">Galeria</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-padaria-orange transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 Rua das Flores, 123 - Centro</p>
              <p>📞 (11) 1234-5678</p>
              <p>✉️ contato@padariadelicia.com.br</p>
              <p>🕐 Seg-Sex: 6h-20h | Sáb-Dom: 7h-19h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Padaria Delícia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
