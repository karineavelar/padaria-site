import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula envio do formulário
    setTimeout(() => {
      setSubmitMessage('Obrigado pelo contato! Responderemos em breve.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="animate-fade-in py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-padaria-brown mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou quer fazer um pedido? Entre em contato conosco, 
            teremos prazer em atendê-lo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-padaria-blue mb-6">Envie uma Mensagem</h2>
            
            {submitMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-padaria-orange focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-padaria-orange focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-padaria-orange focus:border-transparent"
                    placeholder="(11) 12345-6789"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-padaria-orange focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="pedido">Fazer um Pedido</option>
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-padaria-orange focus:border-transparent"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-padaria-orange hover:bg-padaria-orange-light text-white'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-padaria-blue mb-4 flex items-center">
                <span className="mr-3">📍</span> Endereço
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Rua das Flores, 123</p>
                <p>Centro - São Paulo/SP</p>
                <p>CEP: 01234-567</p>
              </div>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0980324881234!2d-46.654441385022166!3d-23.564616384681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5994f1e2e3c5%3A0x1e5f6b8e5c5c5c5c!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Details */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-padaria-blue mb-4 flex items-center">
                <span className="mr-3">📞</span> Contato
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-padaria-orange mr-3">📱</span>
                  <span>(11) 1234-5678</span>
                </div>
                <div className="flex items-center">
                  <span className="text-padaria-orange mr-3">📧</span>
                  <span>contato@padariadelicia.com.br</span>
                </div>
                <div className="flex items-center">
                  <span className="text-padaria-orange mr-3">🕐</span>
                  <div>
                    <p>Segunda a Sexta: 6h - 20h</p>
                    <p>Sábado e Domingo: 7h - 19h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-padaria-blue mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-padaria-blue hover:bg-padaria-blue-light text-white p-3 rounded-full transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="bg-padaria-orange hover:bg-padaria-orange-light text-white p-3 rounded-full transition-colors">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="bg-padaria-red hover:bg-padaria-red-light text-white p-3 rounded-full transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-padaria-cream to-orange-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-padaria-brown mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full bg-padaria-blue hover:bg-padaria-blue-light text-white py-3 px-4 rounded-lg transition-colors">
                  Fazer Pedido pelo WhatsApp
                </button>
                <button className="w-full bg-padaria-orange hover:bg-padaria-orange-light text-white py-3 px-4 rounded-lg transition-colors">
                  Ver Cardápio Online
                </button>
                <button className="w-full bg-padaria-red hover:bg-padaria-red-light text-white py-3 px-4 rounded-lg transition-colors">
                  Agendar Retirada
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
