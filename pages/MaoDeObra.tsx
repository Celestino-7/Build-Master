
import React, { useState } from 'react';
import { WorkforceResult } from '../types';

// Using React.FC to handle the 'key' prop when the component is used in lists
const WorkerCard: React.FC<{ worker: WorkforceResult }> = ({ worker }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-soft hover:shadow-md">
    <div className="flex justify-between items-start mb-4">
      <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-[#FF6B35]">
        <i className="fas fa-user-cog text-xl"></i>
      </div>
      <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-bold">
        {worker.quantity} Profissionais
      </span>
    </div>
    <h4 className="text-lg font-bold text-gray-800 mb-2">{worker.role}</h4>
    <p className="text-sm text-gray-500 mb-4">{worker.description}</p>
    <div className="space-y-1">
      {worker.tasks.map((task, i) => (
        <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
          <i className="fas fa-check text-[#FF6B35]"></i> {task}
        </div>
      ))}
    </div>
  </div>
);

const MaoDeObra = () => {
  const [formData, setFormData] = useState({
    tipoObra: 'Construção Nova',
    area: '',
    prazo: 6,
    complexidade: 'Média',
    turno: '1 turno (8h/dia)'
  });

  const [crew, setCrew] = useState<WorkforceResult[] | null>(null);
  const [costs, setCosts] = useState({ monthly: 0, total: 0 });

  const generatePlan = (e: React.FormEvent) => {
    e.preventDefault();
    const area = parseFloat(formData.area);
    if (isNaN(area)) return;

    const mod = formData.complexidade === 'Alta' ? 1.5 : formData.complexidade === 'Baixa' ? 0.7 : 1;
    
    const results: WorkforceResult[] = [
      { role: 'Pedreiros', quantity: Math.ceil(area / 40 * mod), description: 'Execução de alvenaria e acabamentos.', tasks: ['Assentamento', 'Reboco', 'Pisos'] },
      { role: 'Serventes', quantity: Math.ceil(area / 30 * mod), description: 'Auxílio geral e transporte de materiais.', tasks: ['Mistura', 'Limpeza', 'Apoio'] },
      { role: 'Eletricistas', quantity: Math.ceil(area / 150 * mod), description: 'Instalações elétricas e redes.', tasks: ['Fiação', 'Quadros', 'Iluminação'] },
      { role: 'Encanadores', quantity: Math.ceil(area / 150 * mod), description: 'Sistemas hidráulicos e sanitários.', tasks: ['Tubulações', 'Metais', 'Esgoto'] },
      { role: 'Mestre de Obras', quantity: 1, description: 'Supervisão técnica da equipe.', tasks: ['Leitura de planta', 'Controle', 'Gestão'] }
    ];

    const monthlyCost = results.reduce((acc, w) => acc + (w.quantity * 2800), 0);
    setCrew(results);
    setCosts({ monthly: monthlyCost, total: monthlyCost * formData.prazo });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <div className="w-full lg:w-4/12">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Plano de Equipe</h2>
              <form onSubmit={generatePlan} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Obra</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                    value={formData.tipoObra}
                    onChange={(e) => setFormData({...formData, tipoObra: e.target.value})}
                  >
                    <option>Construção Nova</option>
                    <option>Reforma</option>
                    <option>Ampliação</option>
                    <option>Acabamento</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Área do Projeto (m²)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                    placeholder="Ex: 120"
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Prazo (meses)</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                      value={formData.prazo}
                      onChange={(e) => setFormData({...formData, prazo: parseInt(e.target.value)})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Complexidade</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-soft"
                      value={formData.complexidade}
                      onChange={(e) => setFormData({...formData, complexidade: e.target.value})}
                    >
                      <option>Baixa</option>
                      <option>Média</option>
                      <option>Alta</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full py-4 orange-gradient text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-soft uppercase tracking-wider">
                  Gerar Plano de Equipe
                </button>
              </form>
            </div>
          </div>

          {/* Results */}
          <div className="w-full lg:w-8/12">
            {!crew ? (
              <div className="h-full bg-white rounded-[32px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-12 text-center">
                <i className="fas fa-users-cog text-5xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-500">Planejamento Estratégico</h3>
                <p className="text-gray-400">Insira os detalhes do projeto para visualizar a equipe ideal e custos de mão de obra.</p>
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                    <p className="text-gray-400 font-bold text-xs uppercase mb-1">Custo Mensal Estimado</p>
                    <p className="text-3xl font-bold text-gray-900">R$ {costs.monthly.toLocaleString('pt-BR')}</p>
                  </div>
                  <div className="orange-gradient p-8 rounded-[32px] text-white shadow-lg">
                    <p className="text-orange-100 font-bold text-xs uppercase mb-1">Investimento Total em Equipe</p>
                    <p className="text-3xl font-bold">R$ {costs.total.toLocaleString('pt-BR')}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {crew.map((w, i) => (
                    <WorkerCard key={i} worker={w} />
                  ))}
                </div>

                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-6">Cronograma Sugerido</h3>
                  <div className="relative border-l-2 border-orange-100 ml-3 space-y-8">
                    <div className="relative pl-8">
                      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[#FF6B35]"></div>
                      <p className="font-bold text-gray-800">Mês 1-2: Estrutura & Alvenaria</p>
                      <p className="text-sm text-gray-500">Foco em fundação, pilares e levantamento de paredes.</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-orange-300"></div>
                      <p className="font-bold text-gray-800">Mês 3-4: Telhado & Instalações</p>
                      <p className="text-sm text-gray-500">Cobertura e passagens de tubulações elétricas e hidráulicas.</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-orange-200"></div>
                      <p className="font-bold text-gray-800">Mês 5-6: Revestimentos & Pintura</p>
                      <p className="text-sm text-gray-500">Fase de acabamentos finais, pisos e pintura.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaoDeObra;
