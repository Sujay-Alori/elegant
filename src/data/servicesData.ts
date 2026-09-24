import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'architectural-design',
    number: '01',
    title: 'Architectural Design',
    tagline: 'Master Planning, Residential & Commercial Architecture',
    description: 'Comprehensive architectural solutions from master planning and spatial zoning to facade articulation and construction documentation. Balancing aesthetic grandeur with climate resilience.',
    deliverables: [
      'Conceptual Design & 3D Spatial Visualization',
      'Municipal Sanction & Approval Drawings',
      'Comprehensive Working & Construction Details',
      'Sustainable & Bioclimatic Architecture'
    ],
    iconName: 'Compass'
  },
  {
    id: 'interior-design',
    number: '02',
    title: 'Interior Design',
    tagline: 'Bespoke Luxury Interiors & Custom Millwork',
    description: 'Crafting atmospheric, human-centric interiors with curated material palettes, bespoke furniture design, custom acoustic paneling, and intelligent architectural lighting schemes.',
    deliverables: [
      'Space Optimization & Circulation Layouts',
      'Custom Joinery, Millwork & Furniture Design',
      'Lighting Architecture & Fixture Schedules',
      'Turnkey Material & Finish Specifications'
    ],
    iconName: 'Layout'
  },
  {
    id: 'project-consultant',
    number: '03',
    title: 'Project Consultant',
    tagline: 'End-to-End Advisory, Site Supervision & Quality Audit',
    description: 'Acting as your trusted advisory partner. We oversee contract management, vendor coordination, construction timeline adherence, and uncompromising quality assurance on site.',
    deliverables: [
      'Site Coordination & Quality Control Audits',
      'Contractor Evaluation & Tender Documentation',
      'Timeline & Milestone Management',
      'Statutory & Authority Compliance Guidance'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'structural-design',
    number: '04',
    title: 'Structural Design',
    tagline: 'Robust Engineering, Seismic Safety & Long-Span Systems',
    description: 'Precision structural analysis ensuring durability, earthquake-resistant safety, and optimal structural member sizing. Engineered in close synergy with architectural aesthetics.',
    deliverables: [
      'RCC & Steel Structural Detailing',
      'Seismic Zone Analysis & Foundation Design',
      'Cantilever & Long-Span Structural Calculations',
      'Vetting & Structural Stability Certifications'
    ],
    iconName: 'Layers'
  },
  {
    id: 'landscape-design',
    number: '05',
    title: 'Landscape Design',
    tagline: 'Biophilic Environments, Hardscapes & Water Features',
    description: 'Harmonizing architecture with natural topography through native flora selection, outdoor pavilions, reflecting pools, micro-climate cooling, and ambient night illumination.',
    deliverables: [
      'Master Landscape & Grading Plans',
      'Hardscape, Paving & Retaining Wall Detailing',
      'Water Feature & Infinity Pool Integration',
      'Native Planting & Irrigation Schematics'
    ],
    iconName: 'Trees'
  },
  {
    id: 'estimation-valuation',
    number: '06',
    title: 'Estimation & Valuation',
    tagline: 'Accurate BOQs, Cost Forecasting & Asset Appraisals',
    description: 'Rigorous quantity surveying, detailed Bill of Quantities (BOQ), market rate analyses, and bank valuation reports to safeguard budget predictability without quality compromise.',
    deliverables: [
      'Detailed Bill of Quantities (BOQ)',
      'Material Consumption & Rate Analysis',
      'Bank Valuation & Asset Appraisals',
      'Value Engineering & Cost Optimization'
    ],
    iconName: 'Calculator'
  },
  {
    id: 'surveyor',
    number: '07',
    title: 'Surveyor',
    tagline: 'Topographical Mapping, Boundary & Contour Surveys',
    description: 'High-precision site surveying using Total Station and digital contour mapping to capture ground elevations, property boundaries, and existing site conditions with pinpoint accuracy.',
    deliverables: [
      'Total Station Topographical Surveying',
      'Contour Mapping & Digital Terrain Modeling',
      'Boundary Demarcation & Area Verification',
      'Site Elevation & As-Built Verification'
    ],
    iconName: 'MapPin'
  }
];
