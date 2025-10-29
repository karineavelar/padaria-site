import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Qualidade',
      description: 'Usamos apenas os melhores ingredientes em todos os nossos produtos.',
      icon: '⭐'
    },
    {
      title: 'Tradição',
      description: 'Receitas artesanais passadas de geração em geração.',
      icon: '📜'
    },
    {
      title: 'Paixão',
      description: 'Fazemos tudo com amor e dedicação.',
      icon: '❤️'
    },
    {
      title: 'Inovação',
      description: 'Sempre buscando novos sabores e técnicas.',
      icon: '💡'
    }
  ];

  const team = [
    { name: 'João Silva', role: 'Mestre Padeiro', experience: '35 anos' },
    { name: 'Maria Santos', role: 'Confeiteira', experience: '28 anos' },
    { name: 'Pedro Oliveira', role: 'Padeiro', experience: '15 anos' },
    { name: 'Ana Costa', role: 'Atendente', experience: '10 anos' }
  ];

  return (
    <div className="animate-fade-in py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-padaria-brown mb-6">Sobre Nós</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça a história por trás da Padaria Delícia e nossa paixão por criar 
            produtos artesanais de excelência.
          </p>
        </div>

        {/* History Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-padaria-blue mb-6">Nossa História</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Fundada em 1985 pelo Sr. João Silva, a Padaria Delícia começou como 
                  um pequeno forno comunitário na garagem de sua casa. Com dedicação, 
                  qualidade e aquele toque especial de quem ama o que faz, o negócio 
                  cresceu e se tornou referência na cidade.
                </p>
                <p>
                  Hoje, quase 40 anos depois, continuamos com o mesmo compromisso: 
                  oferecer produtos artesanais de alta qualidade, feitos com ingredientes 
                  selecionados e muito carinho.
                </p>
                <p>
                  Nossa missão é manter viva a tradição da panificação artesanal, 
                  adaptando-nos aos tempos modernos sem perder a essência do que nos tornou 
                  quem somos.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-padaria-cream to-orange-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-9xl mb-4">🍞</div>
                <h3 className="text-2xl font-bold text-padaria-brown mb-2">Desde 1985</h3>
                <p className="text-padaria-blue">Mais de 35 anos de tradição</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-padaria-brown mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-padaria-blue mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-padaria-blue mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-padaria-orange to-padaria-red rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-white">👨‍🍳</span>
                </div>
                <h3 className="text-lg font-semibold text-padaria-brown">{member.name}</h3>
                <p className="text-padaria-blue font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience} de experiência</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-padaria-blue to-padaria-orange rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Nossa Estrutura</h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center">
                    <span className="text-padaria-cream mr-3">✓</span>
                    Forno industrial moderno
                  </li>
                  <li className="flex items-center">
                    <span className="text-padaria-cream mr-3">✓</span>
                    Sala de fermentação climatizada
                  </li>
                  <li className="flex items-center">
                    <span className="text-padaria-cream mr-3">✓</span>
                    Laboratório de confeitaria
                  </li>
                  <li className="flex items-center">
                    <span className="text-padaria-cream mr-3">✓</span>
                    Depósito de matéria-prima selecionada
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-9xl mb-4">🏭</div>
                <p className="text-xl">Instalações modernas com tecnologia de ponta</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-padaria-brown mb-4">Venha Nos Conhecer!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Estamos ansiosos para receber você e compartilhar nossa paixão por produtos artesanais.
          </p>
          <Link to="/contato" className="btn-primary text-lg px-8 py-4">
            Agende uma Visita
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
