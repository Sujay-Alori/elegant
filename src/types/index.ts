export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Hospitality' | 'Institutional';
  location: string;
  year: string;
  area: string;
  client: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  status: 'Completed' | 'In Progress' | 'Concept';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}
