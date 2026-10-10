import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'architectural-design',
    number: '01',
    title: 'Architectural Design',
    tagline: 'Master Planning, Residential & Commercial Architecture',
    description:
      'We provide to you, we will take into consideration, of your individual tastes and designs. If you can express clearly about the type of Architecture & Interiors you would like to have for your house.',
    deliverables: [
      'Master Planning & Spatial Circulation Layouts',
      'Photorealistic 3D Facade & Elevation Visualizations',
      'Comprehensive Working & Construction Details',
      'Climate-Responsive & Bioclimatic Design Integration'
    ],
    iconName: 'Compass',
    image: '/Architectural-Design.jpeg'
  },
  {
    id: 'interior-design-execution',
    number: '02',
    title: 'Interior Design & Execution (Turnkey)',
    tagline: 'Bespoke Luxury Interiors & End-to-End Execution',
    description:
      'We understand that your space is more than just a place of —it\'s an extension of your brand and your promise to those you do business /live with us.',
    deliverables: [
      'Bespoke Space Planning & 3D Walkthrough Renders',
      'Custom Millwork, Joinery & Furniture Manufacturing',
      'Architectural Lighting, Ceiling & Acoustic Schemes',
      'Complete On-Site Turnkey Execution & Project Handover'
    ],
    iconName: 'Paintbrush',
    image: '/Interior-Design.jpg'
  },
  {
    id: 'construction-turnkey',
    number: '03',
    title: 'Construction (Turnkey)',
    tagline: 'Precision Civil Engineering & Full-Cycle Build',
    description:
      'Turnkey civil construction with uncompromised engineering and material quality.',
    deliverables: [
      'Foundation, Earthwork & RCC Structural Framework',
      'Certified Material Testing & Lab Concrete Audits',
      'Full-Time Site Engineers & Safety Compliance',
      'Guaranteed Milestone Timelines & Turnkey Handover'
    ],
    iconName: 'HardHat',
    image: '/Construction.jpg'
  },
  {
    id: 'project-management-consultant',
    number: '04',
    title: 'Project Management Consultant',
    tagline: 'Client Advisory, Quality Audits & Site Governance',
    description:
      'End-to-end site supervision, vendor coordination, and quality audits.',
    deliverables: [
      'Multi-Vendor Coordination & Contract Administration',
      'Quality Assurance & Rigorous On-Site Audits',
      'Critical-Path Project Scheduling & Tracking',
      'Budget Optimization, Bill Verification & Cash Flow'
    ],
    iconName: 'ClipboardCheck',
    image: '/Construction-Management.jpg'
  },
  {
    id: 'structural-design',
    number: '05',
    title: 'Structural Design',
    tagline: 'Earthquake-Resistant Analysis & RCC Engineering',
    description:
      'Advanced earthquake-resistant structural analysis and RCC detailing.',
    deliverables: [
      'RCC & Structural Steel Frame Finite-Element Modeling',
      'Seismic Zone Analysis & High-Precision Foundation Design',
      'Column-Beam Layouts & Bar Bending Schedules (BBS)',
      'Structural Stability Vetting & Safety Certifications'
    ],
    iconName: 'Ruler',
    image: '/Structural-Design-1.jpg'
  },
  {
    id: 'landscape-design',
    number: '06',
    title: 'Landscape Design',
    tagline: 'Outdoor Living, Native Ecology & Vastu Harmony',
    subheading: 'VASTU SERVICES',
    description:
      'Vastu Shastra services are an effective & versatile way to make a radical difference in your life. It plays an important role in health, happiness & harmony. A correct vastu gives you positive energy so that environment works in your favor.',
    deliverables: [
      'Microclimate Planting & Native Flora Layouts',
      'Hardscape Paving, Decks & Retaining Wall Detailing',
      'Water Features, Reflection Pools & Outdoor Illumination',
      'Vastu Shastra Principles for Harmonious Energy Flow'
    ],
    iconName: 'Trees',
    image: '/Landscape-1.jpg'
  },
  {
    id: 'estimation-valuation',
    number: '07',
    title: 'Estimation & Valuation',
    tagline: 'Detailed BOQs, Material Rate Analysis & Appraisals',
    description:
      'Accurate Bill of Quantities (BOQ) and certified asset valuations.',
    deliverables: [
      'Comprehensive Itemized Bill of Quantities (BOQ)',
      'Material Rate Analysis & Specification Scheduling',
      'Certified Property & Asset Valuation Reports',
      'Value Engineering & Financial Risk Forecasting'
    ],
    iconName: 'Calculator',
    image: '/Cost-Estimation.jpg'
  },
  {
    id: 'surveyor',
    number: '08',
    title: 'Surveyor',
    tagline: 'Total Station Topography, Contours & Boundary Demarcation',
    description:
      'Digital Total Station land demarcation and contour mapping.',
    deliverables: [
      'Digital Total Station & GNSS Topographical Surveys',
      'Contour Mapping & 3D Digital Elevation Modeling',
      'Boundary Demarcation & Encroachment Verification',
      'On-Site Column Grid & Baseline Setting-Out'
    ],
    iconName: 'Crosshair',
    image: '/Survey.jpg'
  },
  {
    id: 'building-approval',
    number: '09',
    title: 'Building Approval',
    tagline: 'Municipal Sanctions, FAR Compliance & Statutory NOCs',
    description:
      'Statutory municipal sanction drawings and statutory NOC clearances.',
    deliverables: [
      'Municipal Sanction Drawing Preparation',
      'Zoning, FAR, Setback & Coverage Verification',
      'Liaison for Fire, Environmental & Structural NOCs',
      'BDA, BMC & Local Authority Approval Documentation'
    ],
    iconName: 'FileCheck2',
    image: '/rev-1.jpg'
  }
];
