
import React, { useState } from 'react';
import { MaterialResult } from '../types';

// Using React.FC to handle the 'key' prop when the component is used in lists
const ResultCard: React.FC<{ item: MaterialResult }> = ({ item }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 transition-soft hover:shadow-md">
    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-[#FF6B35]">
      <i className={`fas ${item.icon} text-xl`}></i>
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{item.name}</p>
      <p className="text-2xl font-bold text-gray-900">
        <span className="text-[#FF6B35]">{item.quantity}</span> <span className="text-lg text-gray-400 font-medium">{item.unit}</span>
      </p>
    </div>
  </div>
);

const Calculadora = () => {
  const [formData, setFormData] = useState({
    tipoConstrucao: 'Residencial',
    area: '',
    materialParede: 'Tijolo Cerâmico',
    acabamento: 'Médio',
    pavimentos: 1,
    peDireito: 2.7
  });

  const [results, setResults] = useState<MaterialResult[] | null>(null);
  const [totalCost, setTotalCost] = useState(0);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const area = parseFloat(formData.area);
    if (isNaN(area)) return;

    // Simplified calculation logic for simulation
    const multiplier = formData.tipoConstrucao === 'Industrial' ? 1.4 : formData.tipoConstrucao === 'Comercial' ? 1.2 : 1;
    const finishMod = formData.acabamento === 'Alto Padrão' ? 1.5 : formData.acabamento === 'Básico' ? 0.8 : 1;

    const materials: MaterialResult[] = [
      { name: 'Tijolos/Blocos', quantity: Math.ceil(area * 45 * multiplier), unit: 'unid.', icon: 'fa-cubes' },
      { name: 'Cimento', quantity: Math.ceil(area * 0.45 * multiplier), unit: 'sacos (50kg)', icon: 'fa-mortar-pestle' },
      { name: 'Areia', quantity: parseFloat((area * 0.12 * multiplier).toFixed(2)), unit: 'm³', icon: 'fa-mountain' },
      { name: 'Aço CA-50', quantity: Math.ceil(area * 8 * multiplier), unit: 'kg', icon: 'fa-stream' },
      { name: 'Concreto', quantity: parseFloat((area * 0.2 * multiplier).toFixed(2)), unit: 'm³', icon: 'fa-truck-loading' },
      { name: 'Argamassa', quantity: Math.ceil(area * 15 * finishMod), unit: 'kg', icon: 'fa-brush' }
    ];

    setResults(materials);
    setTotalCost(area * 2500 * multiplier * finishMod);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Form Column */}
          <div className="w-full md:w-5/12">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Calculadora de Materiais</h2>
              <form onSubmit={calculate} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Construção</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                    value={formData.tipoConstrucao}
                    onChange={(e) => setFormData({...formData, tipoConstrucao: e.target.value})}
                  >
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Industrial</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Área Total (m²)</label>
                    <input 
                      type="number" 
                      placeholder="Ex: 120"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Pavimentos</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                      value={formData.pavimentos}
                      onChange={(e) => setFormData({...formData, pavimentos: parseInt(e.target.value)})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Material de Parede</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                    value={formData.materialParede}
                    onChange={(e) => setFormData({...formData, materialParede: e.target.value})}
                  >
                    <option>Tijolo Cerâmico</option>
                    <option>Bloco de Concreto</option>
                    <option>Tijolo Ecológico</option>
                    <option>Drywall</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Padrão de Acabamento</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                    value={formData.acabamento}
                    onChange={(e) => setFormData({...formData, acabamento: e.target.value})}
                  >
                    <option>Básico</option>
                    <option>Médio</option>
                    <option>Alto Padrão</option>
                  </select>
                </div>

                <button type="submit" className="w-full py-4 orange-gradient text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-soft uppercase tracking-wider">
                  Calcular Materiais
                </button>
              </form>
            </div>
          </div>

          {/* Results Column */}
          <div className="w-full md:w-7/12">
            {!results ? (
              <div className="h-full bg-gray-100 rounded-[32px] border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-6">
                  <i className="fas fa-calculator text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-600 mb-2">Aguardando Parâmetros</h3>
                <p className="text-gray-400">Preencha o formulário ao lado para gerar o cálculo de materiais da sua obra.</p>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in">
                <div className="orange-gradient p-8 rounded-[32px] text-white shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-orange-100 font-medium uppercase tracking-widest text-sm mb-1">Custo Total Estimado</p>
                    <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                      R$ {totalCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </h3>
                    <div className="flex gap-4">
                      <button onClick={() => window.print()} className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-xl text-sm font-bold transition-soft flex items-center gap-2">
                        <i className="fas fa-file-pdf"></i> Exportar PDF
                      </button>
                      <button className="px-6 py-2 bg-white text-[#FF6B35] rounded-xl text-sm font-bold transition-soft hover:shadow-lg">
                        Salvar Projeto
                      </button>
                    </div>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.map((item, idx) => (
                    <ResultCard key={idx} item={item} />
                  ))}
                </div>

                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="flex items-center gap-2 text-[#FF6B35] font-bold mb-2">
                    <i className="fas fa-lightbulb"></i> Dica BuildMaster
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Recomendamos adicionar uma margem de segurança de <strong>5-10%</strong> sobre estas quantidades para suprir possíveis quebras e desperdícios comuns durante o manuseio no canteiro de obras.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
