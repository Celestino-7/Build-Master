
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ icon, title, desc, link }: { icon: string, title: string, desc: string, link: string }) => (
  <Link to={link} className="group p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#FF6B35] hover:-translate-y-2 transition-soft">
    <div className="w-16 h-16 orange-light-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-soft">
      <i className={`${icon} text-3xl text-[#FF6B35]`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-500 mb-6 leading-relaxed">{desc}</p>
    <span className="text-[#FF6B35] font-semibold flex items-center gap-2">
      Acessar ferramenta <i className="fas fa-arrow-right text-sm"></i>
    </span>
  </Link>
);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] orange-light-gradient flex items-center pt-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <span className="inline-block px-4 py-1 bg-white/60 text-[#FF6B35] font-bold rounded-full text-sm mb-6 border border-[#FF6B35]/20">
              #1 Plataforma de Gestão de Obras
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
              Construa com <span className="text-[#FF6B35]">Precisão</span>,<br />
              Economize com <span className="text-[#FF8C42]">Inteligência</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              O BuildMaster ajuda você a calcular materiais, planejar equipes e garantir que sua obra esteja dentro de todas as normas técnicas brasileiras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/calculadora" className="px-8 py-4 orange-gradient text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-soft text-center">
                Começar Agora
              </Link>
              <a href="#beneficios" className="px-8 py-4 bg-white text-gray-800 text-lg font-bold rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-soft text-center">
                Saiba Mais
              </a>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <img 
              src="https://picsum.photos/seed/construction/800/600" 
              alt="Canteiro de obras moderno" 
              className="rounded-[40px] shadow-2xl z-10 relative"
            />
            {/* Floating Cards */}
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden lg:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Cálculo Preciso</p>
                  <p className="text-sm text-gray-500">100% Norma ABNT</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden lg:block animate-pulse-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <i className="fas fa-coins text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Economia Real</p>
                  <p className="text-sm text-gray-500">Até 25% de redução</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Ferramentas</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Tudo o que você precisa para gerenciar sua obra de ponta a ponta em um único lugar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ToolCard 
              icon="fas fa-calculator" 
              title="Calculadora de Materiais" 
              desc="Calcule tijolos, cimento, areia e ferragem com precisão matemática."
              link="/calculadora"
            />
            <ToolCard 
              icon="fas fa-users" 
              title="Mão de Obra" 
              desc="Planeje sua equipe e estime custos de pedreiros, serventes e engenheiros."
              link="/mao-de-obra"
            />
            <ToolCard 
              icon="fas fa-book" 
              title="Guia de Normas" 
              desc="Consulte rapidamente as principais NBRs para manter sua obra legalizada."
              link="/normas"
            />
            <ToolCard 
              icon="fas fa-exchange-alt" 
              title="Comparador" 
              desc="Descubra o melhor custo-benefício entre diferentes materiais de construção."
              link="/comparacao"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 orange-light-gradient">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Por que escolher o BuildMaster?</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-soft">
                    <i className="fas fa-bolt text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Rapidez e Praticidade</h4>
                    <p className="text-gray-600">Gere orçamentos e cronogramas em minutos, não dias. Automatize cálculos complexos.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-soft">
                    <i className="fas fa-piggy-bank text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Economia Garantida</h4>
                    <p className="text-gray-600">Evite o desperdício de material com cálculos baseados em sua área real de construção.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-soft">
                    <i className="fas fa-shield-alt text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Conformidade Total</h4>
                    <p className="text-gray-600">Todos os nossos módulos seguem as normas ABNT vigentes, reduzindo riscos jurídicos.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="https://picsum.photos/seed/blueprint/700/500" className="rounded-[40px] shadow-2xl" alt="Planta baixa" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
