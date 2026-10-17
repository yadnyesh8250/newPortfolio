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
    title: 'ChillLang (Compiler Studio & Interactive Workbench)',
    description:
      'A multi-phase educational programming language and interactive compiler workbench designed for CS-421 (Compiler Design). Exposes internal compilation phases from source code to JavaScript ES2024 / WASM-MVP target code, featuring live token inspection, AST visualization, semantic analysis, symbol tables, Three-Address Code (TAC), and -O2 optimization folding.',
    features: [
      'Multi-Phase Compiler Pipeline: Implements complete lexical analysis, LALR(1) parsing, AST generation, semantic checks, intermediate code generation (TAC), and code optimization passes.',
      'Interactive Compiler Studio: Web-based IDE with multi-file buffer support (main.chill, math_lib.chill), real-time compilation daemon, and Monaco-style code editor.',
      'Lexical & Syntax Analyzer: Flex-compatible DFA tokenizer with token stream inspection (lexeme, type, source position, byte size) and structural AST generation.',
      'Type System & Semantic Analysis: Static type checking for primitives and user tasks, scope resolution, identifier validation, and comprehensive error diagnostics.',
      'Intermediate Representation (TAC): Generates clean Three-Address Code with symbol table inspection for scopes, memory offsets, and identifier metadata.',
      'Optimization Engine (-O2 TAC): Advanced optimization passes including constant folding, constant propagation, algebraic simplification, and dead-code elimination.',
      'Target Code Generator: Transpiles validated AST/TAC to modern JavaScript (ES2024) and target architecture specifications (WASM-MVP).',
      'Diagnostic Test Bench: Integrated test suite, sample code library (recursion, factorial, loops), performance metrics, and compilation logs with zero-latency visual feedback.',
    ],
    tags: ['Compiler Design', 'LALR(1) Parser', 'Three-Address Code (TAC)', 'AST & Lexer', 'JavaScript ES2024', 'Optimization (-O2)'],
    tone: 'cyan',
    image: '/project/chilllang.png',
    code: 'https://github.com/yadnyesh8250/ChillLang',
    live: 'https://yadnyesh8250.github.io/ChillLang/ChillLang/web/index.html',
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

