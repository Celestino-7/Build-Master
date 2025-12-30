
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow-md h-20 transition-soft">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 orange-gradient rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-soft">
            <i className="fas fa-hard-hat text-xl"></i>
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight">Build<span className="text-[#FF6B35]">Master</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-[#FF6B35] transition-soft">Início</Link>
          <Link to="/calculadora" className="hover:text-[#FF6B35] transition-soft">Materiais</Link>
          <Link to="/mao-de-obra" className="hover:text-[#FF6B35] transition-soft">Mão de Obra</Link>
          <Link to="/normas" className="hover:text-[#FF6B35] transition-soft">Normas</Link>
          <Link to="/comparacao" className="hover:text-[#FF6B35] transition-soft">Comparação</Link>
        </nav>

        <button className="hidden sm:block px-6 py-2 orange-gradient text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-soft">
          Começar Agora
        </button>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#2C2C2C] text-white pt-16 pb-8">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <i className="fas fa-hard-hat text-2xl text-[#FF8C42]"></i>
          <span className="text-2xl font-bold tracking-tight">BuildMaster</span>
        </div>
        <p className="text-gray-400 max-w-sm mb-6">
          A plataforma definitiva para gestores de obras que buscam precisão, economia e total conformidade técnica em seus projetos.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-soft">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-soft">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Ferramentas</h4>
        <ul className="space-y-4 text-gray-400">
          <li><Link to="/calculadora" className="hover:text-[#FF8C42]">Cálculo de Materiais</Link></li>
          <li><Link to="/mao-de-obra" className="hover:text-[#FF8C42]">Mão de Obra</Link></li>
          <li><Link to="/normas" className="hover:text-[#FF8C42]">Guia de Normas</Link></li>
          <li><Link to="/comparacao" className="hover:text-[#FF8C42]">Comparador</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Suporte</h4>
        <ul className="space-y-4 text-gray-400">
          <li><a href="#" className="hover:text-[#FF8C42]">FAQ</a></li>
          <li><a href="#" className="hover:text-[#FF8C42]">Privacidade</a></li>
          <li><a href="#" className="hover:text-[#FF8C42]">Contatos</a></li>
          <li><a href="#" className="hover:text-[#FF8C42]">Blog</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
      <p>Desenvolvido por Rafaell & Vanilson &copy; 2024. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
