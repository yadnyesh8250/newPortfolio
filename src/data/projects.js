export const projects = [
  {
    title: 'DHARA (Digital Twin Analyst Mode)',
    description:
      'A real-time spatial digital twin and environmental policy simulator. Designed for urban planners, policy analysts, and municipal authorities to simulate urban air quality, carbon emissions (CO₂e), atmospheric rain washouts, and public health impact across spatial territories.',
    features: [
      '3D Spatial Digital Twin: Interactive vector map powered by MapLibre GL JS with 3D building extrusions, pitch/bearing camera controls, and dynamic GeoJSON heatmaps.',
      'Real-Time Telemetry & Failover: Fetches live atmospheric data from Open-Meteo Air Quality API with automated failover to OpenWeatherMap and offline telemetry fallbacks.',
      'Spatial Intervention Deployment: Drag-and-drop or tap-to-deploy intervention markers (Urban Greening, EV Adoption, Industrial CCS, Parali Stubble Burning) with real-time 500m spatial decay modeling.',
      'US EPA AQI Physics Engine: Calculates real-time Air Quality Index using piecewise linear concentration breakpoint interpolation for PM2.5, PM10, CO, and NO2.',
      'Diurnal & Weather Simulation: Timeline playback slider (-12h to +48h) with diurnal sine wave adjustments and an animated particle-based Rain Washout engine (35% PM reduction).',
      'Health & Economic Impact Modeling: Estimates avoided monthly hospitalizations and projected annual healthcare savings in INR ₹ Lakhs.',
      'AI Policy Copilot: Real-time automated policy advice based on net AQI shifts and target thresholds.',
      'Cryptographic Audit Trail: Immutable security log tracking all telemetry transitions, failovers, and user interventions with SHA/MD-style payload hashes.',
    ],
    tags: ['MapLibre GL JS', 'Digital Twin', 'Open-Meteo API', 'AQI Physics Engine', 'GeoJSON', 'AI Copilot'],
    tone: 'emerald',
    image: '/project/dhara.png',
    code: 'https://github.com/yadnyesh8250/DHARA',
    live: 'https://dhara-blush.vercel.app/',
  },
  {
    title: 'RSFA - Rising Sun Football Academy',
    description:
      'Developed a full-stack football academy platform with responsive UI, optimized performance, and scalable backend architecture. Implemented authentication, dynamic content management, and modern user experience across devices.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    tone: 'cyan',
    image: '/project/rising-sun.png',
    code: 'https://github.com/yadnyesh8250/RisingSun-FA',
    live: 'https://rising-sun-fa.vercel.app/',
  },
  {
    title: 'Blogging Platform',
    description:
      'Built a MERN-based blogging application with secure authentication and CRUD operations for posts. Designed REST APIs and integrated responsive frontend components for seamless user interaction.',
    tags: ['MERN Stack', 'REST APIs', 'JWT Auth', 'MongoDB'],
    tone: 'amber',
    image: '/project/blogify.png',
    code: 'https://github.com/yadnyesh8250/blogginplatform',
    live: 'https://blogginplatform-aqkw.vercel.app/',
  },
  {
    title: 'CampusSync - Lost & Found System',
    description:
      'Created a centralized lost-and-found management system for students to report, search, and track lost items efficiently. Added responsive dashboards and structured item management functionalities.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    tone: 'violet',
    image: '/project/lost-and-found.png',
    code: 'https://github.com/yadnyesh8250/Lost_And_Found',
    live: 'https://lost-and-found-jet-eight.vercel.app/',
  },
];

