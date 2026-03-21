export const profile = {
  name: "Namish Sharma",
  role: "Software Developer",
  summary:
    "Software developer focused on building elegant, high-performing digital experiences.",
  intro:
    "I design and build modern web products with a strong balance of aesthetics, usability, and engineering quality.",
  email: "namish907@gmail.com",
  phone: "+91 9928410800",
  linkedin: "https://www.linkedin.com/in/namish-sharma",
  github: "https://github.com/NamishSharma44",
  resumePath: "/resume-namish-sharma.pdf",
};

export const skills = {
  languages: ["Java", "C++", "Python", "JavaScript", "SQL"],
  frameworks: [
    "HTML",
    "CSS",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-Learn",
    "LangChain",
    "NodeJS",
    "React",
    "ExpressJS",
  ],
  toolsPlatforms: ["Docker", "Google Cloud Platform", "Linux", "MongoDB"],
  others: ["Data Structures and Algorithms", "System Design"],
  softSkills: [
    "Leadership",
    "Problem-Solving",
    "Teamwork and Collaboration",
    "Consistency",
    "Time Management",
  ],
};

export const projects = [
  {
    title: "Prescripto - Full Stack Role-Based Healthcare Scheduling and Appointment System",
    period: "Oct 2025 - Nov 2025",
    summary:
      "Built a production-style healthcare scheduling platform for patients, doctors, and admins with secure auth, payments, and operational workflow automation.",
    highlights: [
      "Owned the full appointment lifecycle, from slot discovery and conflict-aware booking to payment verification and status tracking.",
      "Implemented security-critical flows using bcrypt password hashing, JWT sessions, and RBAC middleware for strict route-level authorization.",
      "Shipped a responsive React + Node.js system with Cloudinary-backed media delivery, Multer upload pipelines, and role-aware state management via Context API.",
    ],
    stack: [
      "React 19",
      "Context API",
      "Axios",
      "TailwindCSS",
      "React Toastify",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay SDK",
      "Cloudinary API",
      "Multer",
    ],
    impact:
      "Replaced manual scheduling with an automated, secure workflow that improved booking reliability and admin throughput.",
  },
  {
    title: "RAG Document QA System - Intelligent Document Retrieval and Q-A Engine",
    period: "Sept 2025 - Oct 2025",
    summary:
      "Engineered a retrieval-augmented document intelligence system that answers user queries with source-grounded responses over large, unstructured corpora.",
    highlights: [
      "Built an ingestion and embedding pipeline for 200MB+ documents using ChromaDB, HuggingFace sentence-transformers, and LangChain LCEL chains.",
      "Implemented semantic chunking with RecursiveCharacterTextSplitter and top-k retrieval, then orchestrated grounded answer generation using Gemini 2.5.",
      "Delivered a Streamlit chat application with session memory, batch processing, and multi-format support (PDF and DOCX) for practical end-user workflows.",
    ],
    stack: [
      "LangChain",
      "ChromaDB",
      "HuggingFace Embeddings (sentence-transformers)",
      "Google Gemini API",
      "Streamlit",
      "PyPDF2",
      "python-docx",
      "LCEL",
      "RecursiveCharacterTextSplitter",
      "TikToken",
      "MemoryManager",
    ],
    impact:
      "Enabled faster research and decision-making by providing explainable, citation-aware answers from enterprise-scale documents.",
  },
  {
    title: "GlobalStockPulse - AI Powered Stock Market Analyzer",
    period: "Jun 2025 - Jul 2025",
    summary:
      "Built a full-stack market intelligence platform combining real-time financial data, technical analysis, and AI-assisted advisory signals.",
    highlights: [
      "Developed a Gemini-powered advisor that scores opportunities across 11 technical indicators to improve risk-reward assessment quality.",
      "Engineered fallback analysis paths to preserve advisory continuity and maintain approximately 99% availability under API variance.",
      "Integrated real-time news from 7 providers with TextBlob sentiment scoring, deduplication logic, and Plotly visual analytics for comparative decisions.",
    ],
    stack: [
      "Python",
      "Streamlit",
      "Plotly",
      "NumPy",
      "Pandas",
      "TextBlob",
      "yFinance",
      "Gemini 2.0 Flash",
      "Requests",
      "BeautifulSoup",
      "Alpha Vantage",
      "Finnhub",
      "MarketAux",
      "NewsAPI",
    ],
    impact:
      "Delivered actionable portfolio insights by unifying technical signals, sentiment trends, and AI guidance in one decision-friendly dashboard.",
  },
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    providers: ["Oracle"],
    note: "Foundational certification in AI concepts and Oracle Cloud Infrastructure ecosystem.",
  },
  {
    title: "Microsoft Azure AI Essentials Professional Certificate",
    providers: ["Microsoft", "LinkedIn"],
    note: "Professional track focused on Azure AI services and practical AI workflows.",
  },
  {
    title: "Introducing SAP Business Data Cloud - Course Completion",
    providers: ["SAP"],
    note: "Course completion in SAP Business Data Cloud concepts and enterprise data workflows.",
  },
  {
    title: "Data Structures and Algorithms Complete Course - CPP & JAVA",
    providers: ["C++", "Java"],
    note: "Comprehensive problem-solving and algorithmic foundations using C++ and Java.",
  },
];

export const experiences = [
  {
    role: "Head of Marketing",
    period: "Society for Management Learning (SML) | Sep 2025 - Present",
    points: [
      "Leading end-to-end marketing strategy and execution for events and initiatives, driving visibility and engagement across campus.",
      "Spearheaded campaigns that increased event participation by 30-35%, leveraging digital outreach, branding, and audience targeting.",
      "Managing cross-functional teams to ensure consistent messaging, timely execution, and high-impact promotions.",
      "Optimizing content and communication strategies to enhance brand presence and audience engagement.",
    ],
  },
  {
    role: "Chief of Delegate Affairs",
    period: "International Global Conference (IGCMUN 2025) | Dec 2024 - Apr 2025",
    points: [
      "Managed delegate operations for a large-scale international conference, ensuring seamless coordination and communication.",
      "Acted as the primary point of contact for delegates, maintaining high engagement and satisfaction throughout the event lifecycle.",
      "Led planning and execution of delegate-related logistics, ensuring smooth onboarding, coordination, and real-time issue resolution.",
      "Strengthened leadership through team management, conflict resolution, and high-pressure decision-making.",
      "Contributed to creating an environment that enabled impactful discussions, diplomacy, and meaningful global dialogue.",
    ],
  },
];

export const education = [
  {
    institution: "Lovely Professional University, Punjab, India",
    qualification: "Bachelor of Technology - Computer Science and Engineering",
    scoreLabel: "CGPA",
    score: "8.39",
    period: "Since August 2023",
  },
  {
    institution: "Lady Anusuiya Singhania Education Centre, Jhalawar, Rajasthan",
    qualification: "Intermediate",
    scoreLabel: "Percentage",
    score: "89.6%",
    period: "April 2022 - March 2023",
  },
  {
    institution: "Lady Anusuiya Singhania Education Centre, Jhalawar, Rajasthan",
    qualification: "Matriculation",
    scoreLabel: "Percentage",
    score: "90.2%",
    period: "April 2020 - March 2021",
  },
];