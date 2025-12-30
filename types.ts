
export interface MaterialResult {
  name: string;
  quantity: number;
  unit: string;
  icon: string;
}

export interface WorkforceResult {
  role: string;
  quantity: number;
  description: string;
  tasks: string[];
}

export interface Norm {
  id: string;
  code: string;
  category: string;
  title: string;
  summary: string;
  year: number;
  objective: string;
  requirements: string[];
  link: string;
}

export interface ComparisonItem {
  name: string;
  category: string;
  cost: number;
  durability: string;
  thermalEfficiency: number;
  sustainability: number;
  installation: string;
  rating: number;
  image: string;
}
