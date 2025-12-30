
import { Norm, ComparisonItem } from './types';

export const NORMS: Norm[] = [
  {
    id: '1',
    code: 'NBR 6118',
    category: 'Estruturas',
    title: 'Projeto de Estruturas de Concreto',
    summary: 'Procedimentos para o projeto de estruturas de concreto simples, armado e protendido.',
    year: 2014,
    objective: 'Estabelecer os requisitos básicos de segurança e durabilidade para estruturas de concreto.',
    requirements: [
      'Análise estrutural rigorosa',
      'Dimensionamento de armaduras',
      'Verificação de estados limites',
      'Cobrimento mínimo das armaduras'
    ],
    link: 'https://www.abnt.org.br/'
  },
  {
    id: '2',
    code: 'NBR 5410',
    category: 'Elétrica',
    title: 'Instalações Elétricas de Baixa Tensão',
    summary: 'Regras para instalações elétricas de edificações em baixa tensão.',
    year: 2004,
    objective: 'Garantir a segurança de pessoas e animais, o funcionamento adequado e a conservação dos bens.',
    requirements: [
      'Proteção contra choques elétricos',
      'Dimensionamento de condutores',
      'Proteção contra sobrecorrentes',
      'Aterramento obrigatório'
    ],
    link: 'https://www.abnt.org.br/'
  },
  {
    id: '3',
    code: 'NBR 5626',
    category: 'Hidráulica',
    title: 'Instalação Predial de Água Fria',
    summary: 'Diretrizes para o projeto e execução de sistemas de água fria.',
    year: 2020,
    objective: 'Preservar a potabilidade da água e garantir o fornecimento contínuo.',
    requirements: [
      'Dimensionamento de reservatórios',
      'Pressão mínima nos pontos de consumo',
      'Prevenção de refluxo',
      'Isolamento térmico se necessário'
    ],
    link: 'https://www.abnt.org.br/'
  },
  {
    id: '4',
    code: 'NBR 8160',
    category: 'Hidráulica',
    title: 'Sistemas Prediais de Esgoto Sanitário',
    summary: 'Projeto e execução de sistemas de esgoto sanitário.',
    year: 1999,
    objective: 'Evacuar o esgoto sem contaminação e sem odores no ambiente interno.',
    requirements: [
      'Ventilação do sistema',
      'Caixas de gordura e inspeção',
      'Declividade mínima de tubulações',
      'Separação de águas pluviais'
    ],
    link: 'https://www.abnt.org.br/'
  },
  {
    id: '5',
    code: 'NBR 9050',
    category: 'Acessibilidade',
    title: 'Acessibilidade em Edificações',
    summary: 'Critérios para acessibilidade de pessoas com deficiência ou mobilidade reduzida.',
    year: 2020,
    objective: 'Proporcionar autonomia e segurança no uso do espaço construído.',
    requirements: [
      'Dimensões de rampas e escadas',
      'Sinalização tátil e visual',
      'Áreas de manobra para cadeiras de rodas',
      'Sanitários acessíveis'
    ],
    link: 'https://www.abnt.org.br/'
  },
  {
    id: '6',
    code: 'NBR 15575',
    category: 'Desempenho',
    title: 'Edificações Habitacionais - Desempenho',
    summary: 'Exigências de desempenho para os sistemas de uma edificação habitacional.',
    year: 2013,
    objective: 'Avaliar o desempenho térmico, acústico, lumínico e durabilidade.',
    requirements: [
      'Vida útil de projeto (VUP)',
      'Isolamento acústico entre unidades',
      'Segurança contra incêndio',
      'Estanqueidade de fachadas'
    ],
    link: 'https://www.abnt.org.br/'
  }
];

export const MATERIALS_COMPARISON: ComparisonItem[] = [
  {
    name: 'Tijolo Cerâmico',
    category: 'Alvenaria',
    cost: 45.00,
    durability: '50+ anos',
    thermalEfficiency: 7,
    sustainability: 6,
    installation: 'Moderada',
    rating: 4.2,
    image: 'https://picsum.photos/seed/brick/100/100'
  },
  {
    name: 'Bloco de Concreto',
    category: 'Alvenaria',
    cost: 38.00,
    durability: '60+ anos',
    thermalEfficiency: 5,
    sustainability: 4,
    installation: 'Rápida',
    rating: 3.8,
    image: 'https://picsum.photos/seed/block/100/100'
  },
  {
    name: 'Tijolo Ecológico',
    category: 'Alvenaria',
    cost: 55.00,
    durability: '80+ anos',
    thermalEfficiency: 9,
    sustainability: 10,
    installation: 'Especializada',
    rating: 4.8,
    image: 'https://picsum.photos/seed/eco/100/100'
  },
  {
    name: 'Drywall',
    category: 'Alvenaria',
    cost: 95.00,
    durability: '25+ anos',
    thermalEfficiency: 6,
    sustainability: 8,
    installation: 'Muito Rápida',
    rating: 4.5,
    image: 'https://picsum.photos/seed/drywall/100/100'
  }
];
