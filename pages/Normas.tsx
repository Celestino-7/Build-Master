
import React, { useState } from 'react';
import { NORMS } from '../constants';
import { Norm } from '../types';

// Using React.FC to handle the 'key' prop when the component is used in lists
const NormCard: React.FC<{ norm: Norm; onOpen: (n: Norm) => void }> = ({ norm, onOpen }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col transition-soft hover:shadow-lg hover:border-[#FF6B35]">
    <div className="flex justify-between items-center mb-4">
      <span className="px-3 py-1 bg-orange-100 text-[#FF6B35] text-xs font-bold rounded-full">{norm.code}</span>
      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{norm.category}</span>
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{norm.title}</h3>
    <p className="text-sm text-gray-500 mb-6 flex-grow line-clamp-3">{norm.summary}</p>
    <button 
      onClick={() => onOpen(norm)}
      className="w-full py-2 border border-[#FF6B35] text-[#FF6B35] font-bold rounded-xl hover:bg-[#FF6B35] hover:text-white transition-soft"
    >
      Ver Detalhes
    </button>
  </div>
);

const Norms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNorm, setSelectedNorm] = useState<Norm | null>(null);

  const filteredNorms = NORMS.filter(n => 
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    n.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Guia de Normas ABNT</h2>
        <p className="text-gray-500 text-lg mb-8">Consulte as principais normas brasileiras para garantir a segurança e qualidade da sua obra.</p>
        
        <div className="relative max-w-2xl mx-auto">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input 
            type="text" 
            placeholder="Pesquisar por código, título ou categoria..."
            className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 focus:border-[#FF6B35] outline-none transition-soft"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNorms.map(norm => (
          <NormCard key={norm.id} norm={norm} onOpen={setSelectedNorm} />
        ))}
      </div>

      {/* Modal */}
      {selectedNorm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedNorm(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-zoom-in">
            <div className="orange-gradient p-8 text-white relative">
              <button onClick={() => setSelectedNorm(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-soft">
                <i className="fas fa-times"></i>
              </button>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-2 uppercase tracking-widest">{selectedNorm.code}</span>
              <h3 className="text-3xl font-bold">{selectedNorm.title}</h3>
            </div>
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Ano de Publicação</h4>
                <p className="text-gray-600">{selectedNorm.year}</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Objetivo</h4>
                <p className="text-gray-600">{selectedNorm.objective}</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Principais Requisitos</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {selectedNorm.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-gray-600">
                      <i className="fas fa-check-circle text-[#FF6B35] mt-1"></i> {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 flex gap-4">
                <a href={selectedNorm.link} target="_blank" rel="noopener noreferrer" className="flex-grow py-3 orange-gradient text-white text-center font-bold rounded-xl transition-soft hover:shadow-lg">
                  Ver Texto Completo (ABNT)
                </a>
                <button onClick={() => setSelectedNorm(null)} className="px-6 py-3 border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-soft">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Norms;
