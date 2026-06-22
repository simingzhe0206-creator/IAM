import {
  Buildings,
  CompassTool,
  Crane,
  FileMagnifyingGlass,
  FileText,
  HouseLine,
  MapPinArea,
  PenNibStraight,
  Polygon,
  Scan,
  TreeStructure
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

export const assets = {
  logo: '/images/iam-logo.png',
  logoFooter: '/images/iam-logo.png',
  hero: '/images/hero-blue-survey.png',
  field: '/images/field.jpg',
  equipment: '/images/equipment.jpg',
  construction: '/images/construction.jpg'
};

export const contact = {
  address: '47/8 Avenue of the Americas, Newington NSW 2127',
  hours: 'Monday to Friday, 9AM to 5PM',
  phone: '(+61) 426 668 800',
  email: 'email placeholder',
  whatsapp: 'WhatsApp placeholder',
  wechat: 'WeChat placeholder',
  xiaohongshu: 'Xiaohongshu placeholder'
};

export const stats = [
  ['5,000+', 'Detail Surveys'],
  ['1,400+', 'Work As Executed Surveys'],
  ['1,000+', 'Deposited Plans'],
  ['600+', 'Construction Support Projects'],
  ['400+', 'Strata Plans'],
  ['300+', 'Boundary Marking Surveys']
] as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  intro: string;
  when: string;
  includes: string[];
  deliverables: string[];
  clients: string[];
  faq: Array<{ question: string; answer: string }>;
  icon: Icon;
  image: string;
};

export const services: Service[] = [
  {
    slug: 'detail-and-level-survey',
    title: 'Detail and Level Survey',
    shortTitle: 'Detail Survey',
    intro:
      'A detail and level survey records the existing physical features and levels of a site to support design, approval and construction related work.',
    when:
      'Before preparing architectural plans, DA or CDC documentation, stormwater design or development feasibility studies.',
    includes: [
      'Site levels and contours',
      'Existing buildings, structures, driveways, fences and retaining walls',
      'Visible services and utility information where available',
      'Trees, major vegetation, roof, gutter, eave and window levels where visible',
      'Easement and title information where required'
    ],
    deliverables: ['PDF survey plan', 'CAD survey file', 'Optional additional survey information'],
    clients: ['Architects', 'Designers', 'Engineers', 'Builders', 'Developers', 'Homeowners'],
    faq: [
      {
        question: 'Is this the same as a boundary survey?',
        answer:
          'No. A detail survey captures site features and levels, while a boundary survey is used to define legal boundaries.'
      },
      {
        question: 'Can this survey be used for DA or CDC?',
        answer: 'Yes, it is commonly used to support both DA and CDC related design work.'
      }
    ],
    icon: CompassTool,
    image: assets.field
  },
  {
    slug: 'boundary-survey-and-boundary-marking',
    title: 'Boundary Survey and Boundary Marking',
    shortTitle: 'Boundary Survey',
    intro:
      'A boundary survey determines the legal boundaries of a property and may include marking or re-marking boundary corners on site by a Registered Surveyor.',
    when:
      'When building close to a boundary, replacing fencing, resolving a boundary issue, or confirming the legal location of property limits.',
    includes: [
      'Investigation of title and plan information',
      'Boundary definition by a Registered Surveyor',
      'Boundary corner marking where required',
      'Boundary relationship to existing improvements where relevant'
    ],
    deliverables: ['Boundary survey plan', 'Boundary marking on site', 'Survey notes where applicable'],
    clients: ['Homeowners', 'Builders', 'Developers', 'Solicitors', 'Property owners'],
    faq: [
      {
        question: 'Do I need a boundary survey before building a new fence?',
        answer: 'In many cases yes, especially if the exact position of the boundary is important.'
      },
      {
        question: 'Is boundary marking included automatically?',
        answer: 'It can be included where requested and where site conditions allow.'
      }
    ],
    icon: MapPinArea,
    image: assets.equipment
  },
  {
    slug: 'identification-survey',
    title: 'Identification Survey',
    shortTitle: 'Identification',
    intro:
      'An identification survey shows the relationship between existing buildings and improvements and the title boundaries of a property.',
    when:
      'When buying or selling property, during conveyancing, or when checking whether structures encroach over boundaries or easements.',
    includes: [
      'Existing building positions',
      'Title boundaries',
      'Visible encroachments where applicable',
      'Relevant easements shown on title where required'
    ],
    deliverables: ['Identification survey plan in PDF format', 'Supporting title related information'],
    clients: ['Solicitors', 'Purchasers', 'Vendors', 'Property owners', 'Conveyancing professionals'],
    faq: [
      {
        question: 'Is an identification survey the same as a detail survey?',
        answer: 'No. It focuses on the relationship between improvements and title boundaries.'
      },
      {
        question: 'Can it help identify encroachments?',
        answer: 'Yes, that is one of its primary purposes.'
      }
    ],
    icon: FileMagnifyingGlass,
    image: assets.field
  },
  {
    slug: 'construction-setout-survey',
    title: 'Construction Setout Survey',
    shortTitle: 'Construction Setout',
    intro:
      'A construction setout survey transfers design information from approved plans onto the site so building and civil works can be constructed accurately.',
    when: 'Before construction begins and during construction stages where location control is required.',
    includes: [
      'Building grid setout',
      'Footing and slab setout',
      'Boundary offset setout',
      'Retaining wall or structure setout',
      'Site control establishment where required'
    ],
    deliverables: ['Setout marks on site', 'Setout sketches or field information', 'Digital coordinates where required'],
    clients: ['Builders', 'Project managers', 'Developers', 'Civil contractors'],
    faq: [
      {
        question: 'Do you need approved plans before setout?',
        answer: 'Yes, setout is generally based on approved and confirmed design information.'
      },
      {
        question: 'Can multiple site visits be arranged?',
        answer: 'Yes, staged setout visits can be arranged as required.'
      }
    ],
    icon: Crane,
    image: assets.hero
  },
  {
    slug: 'work-as-executed-and-as-built-survey',
    title: 'Work As Executed and As-Built Survey',
    shortTitle: 'WAE and As-Built',
    intro:
      'A Work As Executed or As-Built survey records completed construction works to confirm they have been built in the correct location and level.',
    when:
      'After construction of drainage, OSD, rainwater tanks, services, retaining walls or other works where council or certifier compliance documentation is required.',
    includes: [
      'Location and level of completed works',
      'Stormwater lines and pits where required',
      'OSD and rainwater tank survey information',
      'Built form or service infrastructure survey data'
    ],
    deliverables: ['WAE or As-Built survey plan', 'PDF and CAD outputs', 'Supporting certifier or council information'],
    clients: ['Builders', 'Engineers', 'Developers', 'Certifiers', 'Property owners'],
    faq: [
      {
        question: 'Is this commonly required for stormwater compliance?',
        answer: 'Yes, this is one of the most common reasons for a WAE survey.'
      },
      {
        question: 'Can the plan be used for final certificate submissions?',
        answer: 'Yes, it is often used as part of final compliance documentation.'
      }
    ],
    icon: FileText,
    image: assets.equipment
  },
  {
    slug: 'land-subdivision-survey',
    title: 'Land Subdivision Survey',
    shortTitle: 'Subdivision',
    intro:
      'A land subdivision survey supports the division of land into separate lots and assists with plans and documentation for approval and registration.',
    when: 'When subdividing land for Torrens Title development, land sale, redevelopment or other land division purposes.',
    includes: [
      'Initial subdivision review',
      'Draft subdivision plan preparation',
      'Final plan preparation',
      'Administration sheet preparation where required',
      'Survey support for subdivision certificate and registration processes'
    ],
    deliverables: ['Draft subdivision plan', 'Final plan for registration', 'Administration sheets', 'Supporting documentation'],
    clients: ['Developers', 'Property owners', 'Architects', 'Town planners', 'Solicitors'],
    faq: [
      {
        question: 'Can you assist beyond drafting the plan?',
        answer: 'Yes, IAM can assist with survey related documentation and practical process support.'
      },
      {
        question: 'Is this suitable for Torrens Title subdivision?',
        answer: 'Yes, this service is specifically suitable for Torrens Title subdivision projects.'
      }
    ],
    icon: Polygon,
    image: assets.hero
  },
  {
    slug: 'strata-and-community-title-subdivision',
    title: 'Strata and Community Title Subdivision',
    shortTitle: 'Strata Title',
    intro:
      'This service supports strata or community title subdivision plans for residential, mixed-use and development projects.',
    when:
      'When creating separate ownership within a building or development, including duplexes, townhouses, apartments or mixed-use developments.',
    includes: [
      'Strata plan preparation',
      'Lot and common property definition',
      'Community title survey support where applicable',
      'Coordination with certifier and solicitor where required'
    ],
    deliverables: ['Strata or community title plans', 'Supporting survey plans', 'Registration related survey support'],
    clients: ['Developers', 'Property owners', 'Solicitors', 'Certifiers', 'Project consultants'],
    faq: [
      {
        question: 'Is this suitable for a duplex project?',
        answer: 'Yes, depending on the ownership structure and approval pathway.'
      },
      {
        question: 'Can IAM assist with registration related documents?',
        answer: 'Yes, IAM can assist with the survey related components of that process.'
      }
    ],
    icon: Buildings,
    image: assets.hero
  },
  {
    slug: 'easement-creation-and-88e-instrument-preparation',
    title: 'Easement Creation and 88E Instrument Preparation',
    shortTitle: 'Easement and 88E',
    intro:
      'This service supports easement creation and 88E related survey and documentation requirements for registration purposes.',
    when:
      'When a development requires new easements, Positive Covenants, Restrictions on the Use of Land, OSD restrictions or rainwater tank related restrictions.',
    includes: [
      'Creation of easement related survey information',
      '88E plan and document support',
      'Positive Covenant and Restriction on the Use of Land support',
      'Guidance for council endorsement, execution and registration steps'
    ],
    deliverables: ['Survey plans supporting easement creation', '88E related plan information', 'Supporting coordination documents'],
    clients: ['Developers', 'Property owners', 'Solicitors', 'Engineers', 'Certifiers'],
    faq: [
      {
        question: 'Can IAM assist with council endorsement stages?',
        answer: 'Yes, IAM can assist with survey related components and document flow guidance.'
      },
      {
        question: 'Is this commonly required for OSD and rainwater tank conditions?',
        answer: 'Yes, those are common reasons for 88E related documentation.'
      }
    ],
    icon: PenNibStraight,
    image: assets.hero
  },
  {
    slug: '3d-scanning-modelling-and-bim',
    title: '3D Scanning, Modelling and BIM',
    shortTitle: '3D Scanning',
    intro:
      'This service uses 3D laser scanning and digital modelling workflows to capture existing conditions and convert them into CAD and BIM outputs.',
    when:
      'When accurate existing building data is required for renovation, refurbishment, heritage, design coordination or digital modelling workflows.',
    includes: [
      '3D laser scanning',
      'Point cloud capture',
      'Scan to CAD outputs',
      'Scan to BIM or Revit modelling support',
      'Existing building modelling where required'
    ],
    deliverables: ['Point cloud data', '2D CAD drawings', '3D digital models', 'BIM related outputs where requested'],
    clients: ['Architects', 'Designers', 'Builders', 'Developers', 'Project consultants'],
    faq: [
      {
        question: 'Can the data be used in Revit or BIM workflows?',
        answer: 'Yes, that is one of the key purposes of this service.'
      },
      {
        question: 'Is this suitable for renovation projects?',
        answer: 'Yes, it is highly suitable where accurate existing conditions are required.'
      }
    ],
    icon: Scan,
    image: assets.equipment
  },
  {
    slug: 'title-council-and-development-consultation',
    title: 'Title, Council and Development Consultation',
    shortTitle: 'Title Consultation',
    intro:
      'This service provides practical support and guidance on survey related title, council and development documentation matters.',
    when:
      'When you need help understanding title information, easements, restrictions, subdivision requirements, council conditions or survey related development workflows.',
    includes: [
      'Title and deposited plan review',
      'Guidance on easements, restrictions and covenants',
      'Subdivision document checklist support',
      'Survey related communication with project consultants where required'
    ],
    deliverables: ['Written advice or review comments', 'Checklist support', 'Survey related process guidance'],
    clients: ['Property owners', 'Developers', 'Architects', 'Engineers', 'Solicitors', 'Certifiers'],
    faq: [
      {
        question: 'Does this replace legal advice?',
        answer: 'No, legal matters should still be reviewed by a solicitor where required.'
      },
      {
        question: 'Can this help before DA, CDC or subdivision lodgement?',
        answer: 'Yes, it is helpful during early planning and document preparation stages.'
      }
    ],
    icon: TreeStructure,
    image: assets.field
  }
];

export const projectTypes = [
  {
    title: 'Residential Renovation and New Builds',
    description: 'Survey information for architects, designers, builders and homeowners.',
    image: assets.field
  },
  {
    title: 'Duplex and Dual Occupancy Development',
    description: 'Detail surveys, subdivision support, WAE documentation and 88E coordination.',
    image: assets.hero
  },
  {
    title: 'Torrens Title Subdivision',
    description: 'Subdivision plans, administration sheets, council support and registration documentation.',
    image: assets.field
  },
  {
    title: 'Strata Subdivision',
    description: 'Strata plans for residential, mixed-use and development projects.',
    image: assets.equipment
  },
  {
    title: 'Commercial and Industrial Projects',
    description: 'Construction setout, 3D scanning, as-built surveys and compliance support.',
    image: assets.hero
  }
];

export const formOptions = {
  services: services.map((service) => service.title),
  projectTypes: [
    'Residential renovation',
    'New build',
    'Duplex or dual occupancy',
    'Torrens Title subdivision',
    'Strata subdivision',
    'Commercial or industrial',
    'Other'
  ],
  projectStages: ['Planning', 'Design', 'DA or CDC', 'Construction', 'Post-construction', 'Registration', 'Other']
};
