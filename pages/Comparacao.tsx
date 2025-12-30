
import React, { useState } from 'react';
import { MATERIALS_COMPARISON } from '../constants';
import { ComparisonItem } from '../types';

const ComparisonTable = ({ items }: { items: ComparisonItem[] }) => (
  <div className="overflow-x-auto bg-white rounded-[32px] shadow-sm border border-gray-100">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-100">
          <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Material</th>
          <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Custo/m²</th>
          <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Durabilidade</th>
          <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest text-center">Eficiência Térmica</th>
          <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest text-center">Sustentabilidade</th>
          <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Avaliação</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {items.map((item, idx) => (
          <tr key={idx} className="hover:bg-gray-50 transition-soft group">
            <td className="px-6 py-6">
              <div className="flex items-center gap-4">
                <img src={item.image} className="w-12 h-12 rounded-xl object-cover" alt={item.name} />
                <span className="font-bold text-gray-800">{item.name}</span>
              </div>
            </td>
            <td className="px-6 py-6">
              <span className="text-[#FF6B35] font-bold">R$ {item.cost.toFixed(2)}</span>
            </td>
            <td className="px-6 py-6 text-gray-600">{item.durability}</td>
            <td className="px-6 py-6">
              <div className="w-24 h-2 bg-gray-100 rounded-full mx-auto overflow-hidden">
                <div className="h-full orange-gradient" style={{ width: `${item.thermalEfficiency * 10}%` }}></div>
              </div>
            </td>
            <td className="px-6 py-6">
              <div className="w-24 h-2 bg-gray-100 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: `${item.sustainability * 10}%` }}></div>
              </div>
            </td>
            <td className="px-6 py-6">
              <div className="flex items-center gap-1 text-yellow-400">
                <i className="fas fa-star"></i>
                <span className="font-bold text-gray-800">{item.rating}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Comparacao = () => {
  const [category, setCategory] = useState('Alvenaria');
  
  const bestValue = [...MATERIALS_COMPARISON].sort((a, b) => (a.cost / a.rating) - (b.cost / b.rating))[0];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comparação de Materiais</h2>
          <p className="text-gray-500 text-lg">Compare desempenho, sustentabilidade e custos para tomar a melhor decisão para seu projeto.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900">Categorias</h4>
              <div className="space-y-2">
                {['Alvenaria', 'Revestimentos', 'Coberturas', 'Pisos', 'Estruturas'].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-soft ${category === cat ? 'bg-orange-50 text-[#FF6B35]' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4 space-y-8">
            <div className="orange-light-gradient p-8 rounded-[32px] border border-[#FF6B35]/20 flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#FF6B35] text-4xl shadow-xl flex-shrink-0">
                <i className="fas fa-award"></i>
              </div>
              <div>
                <span className="px-3 py-1 bg-[#FF6B35] text-white text-[10px] font-bold rounded-full uppercase tracking-widest mb-2 inline-block">Melhor Custo-Benefício</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Recomendação: {bestValue.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Baseado em nossos algoritmos de análise que cruzam preço, durabilidade e avaliações de profissionais, o <strong className="text-gray-800">{bestValue.name}</strong> se destaca nesta categoria com uma pontuação geral de {bestValue.rating}.
                </p>
              </div>
            </div>

            <ComparisonTable items={MATERIALS_COMPARISON} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparacao;
