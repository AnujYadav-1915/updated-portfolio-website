export const portfolioData = {
  name: 'Anuj Kumar',
  role: 'Software Engineer',
  tagline: 'Building AI-powered products, real-time systems, and robust full-stack applications.',
  summary:
    'Passionate and results-driven developer with strong foundations in computer science and hands-on experience building production-grade apps. Focused on scalable architecture, clean code, and impactful user experiences.',
  links: {
    email: 'mailto:anujyadav11112003@gmail.com',
    calendar: 'https://calendly.com/anujyadav11112003',
    linkedin: 'https://www.linkedin.com/in/anuj-kumar-918415295/',
    github: 'https://github.com/AnujYadav-1915',
    leetcode: 'https://leetcode.com/u/AnujxPhoenix/',
    codechef: 'https://www.codechef.com/users/clean_array_61',
    portfolio: 'https://anujyadav-1915.github.io/updated-portfolio-website/',
    resume: './AnujKumarResume.pdf',
  },
  skills: {
    languages: ['C', 'Python', 'C++', 'JavaScript'],
    frontend: ['React.js', 'Redux', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'TypeScript'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'WebSockets'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Docker', 'Postman', 'npm'],
    fundamentals: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  projects: [
    {
      title: 'Real-Time Collaborative Code Editor',
      stack: ['Node.js', 'Express', 'Socket.IO', 'Monaco Editor'],
      demoLink: 'https://realtime-collaborative-code-editor-master.onrender.com/',
      repoLink: 'https://github.com/AnujYadav-1915/Realtime-Collaborative-Code-Editor-master',
      caseStudy: {
        problem: 'Teams needed synchronized code editing with low-latency updates and conflict-safe collaboration.',
        architecture: 'Express + Socket.IO event pipeline with room-based sessions and Monaco in-browser editing.',
        result: 'Delivered real-time multi-user editing with instant propagation and production-ready share flow.',
      },
      architectureSnapshot: [
        'Room-based collaboration channels isolate each coding session securely.',
        'Socket events are throttled and broadcast for low-latency multi-user sync.',
        'Monaco editor state is mirrored across connected clients in real time.',
      ],
      points: [
        'Built collaborative editing where multiple users can edit code simultaneously with real-time synchronization.',
        'Implemented WebSocket broadcasting for instant shared updates across connected clients.',
        'Integrated Monaco Editor for syntax highlighting and an interactive coding experience.',
      ],
    },
    {
      title: 'LearnMate — AI Career Coach Agent',
      stack: ['Next.js', 'React', 'Clerk', 'Inngest', 'Neon PostgreSQL', 'Tailwind CSS'],
      demoLink: 'https://ai-career-coach-agent-five.vercel.app/',
      repoLink: 'https://github.com/AnujYadav-1915/Learnmate',
      caseStudy: {
        problem: 'Users needed guided career planning with actionable recommendations, not generic AI responses.',
        architecture: 'Next.js app with Clerk auth, Inngest async AI workflows, and Neon PostgreSQL persistence.',
        result: 'Shipped personalized roadmaps, resume feedback, and interview simulation in one integrated product.',
      },
      architectureSnapshot: [
        'Clerk authentication protects user data and scoped dashboard content.',
        'Inngest executes async AI pipelines for reliable resume and roadmap generation.',
        'Neon PostgreSQL stores user progress, interview history, and recommendation states.',
      ],
      points: [
        'Developed an AI-powered career guidance platform for resume analysis, skill-gap detection, and personalized roadmaps.',
        'Built mock technical and behavioral interview flows with an LLM-based interview agent.',
        'Implemented secure authentication with Clerk and asynchronous AI workflows with Inngest.',
      ],
    },
    {
      title: 'Real-Time Chat Application',
      stack: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB'],
      demoLink: 'https://github.com/AnujYadav-1915?tab=repositories',
      repoLink: 'https://github.com/AnujYadav-1915?tab=repositories',
      points: [
        'Built a real-time messaging app with private conversations, typing indicators, and presence states.',
        'Implemented JWT-based authentication and secure REST APIs for user, conversation, and message management.',
        'Designed scalable messaging with MongoDB indexing and Socket.IO event-driven delivery.',
      ],
    },
  ],
  education: [
    {
      institute: 'Dr. A.P.J. Abdul Kalam Technical University',
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science & Engineering',
      duration: 'Nov 2022 — Jul 2026',
      location: 'Uttar Pradesh, India',
    },
    {
      institute: 'Army Public School (APS)',
      degree: 'Senior Secondary Certificate',
      specialization: 'Engineering Science',
      duration: 'Apr 2020 — Jul 2021',
      location: 'India',
    },
  ],
  achievements: [
    'AWS Certifications: AI Practitioner, Cloud Practitioner, Data Engineer, Developer Associate, Machine Learning, SysOps Administrator, DevOps Engineer.',
    'JavaScript Data Structures & Algorithms certification completed.',
    'Solved 1000+ DSA problems across LeetCode, CodeChef, GeeksforGeeks, and Coding Ninjas.',
  ],
  nowBuilding: [
    {
      title: 'AI Interview Copilot Flows',
      status: 'In Progress',
      details: 'Improving adaptive follow-up questioning and feedback loops for mock interviews.',
      timeline: 'Current Focus',
    },
    {
      title: 'Scalable Realtime Backend Patterns',
      status: 'R&D',
      details: 'Experimenting with socket event partitioning and resilience patterns under high concurrency.',
      timeline: 'This Quarter',
    },
    {
      title: 'Portfolio Case Study Expansion',
      status: 'Planned',
      details: 'Publishing deeper architecture and decision notes for flagship projects.',
      timeline: 'Next Milestone',
    },
  ],
};

export const themeOptions = [
  {
    id: 'neo-glass',
    label: 'Neo Glass Dark',
    short: 'Luxury glassmorphism + neon accents',
  },
  {
    id: 'aurora-minimal',
    label: 'Aurora Minimal',
    short: 'Calm gradients + clean premium layout',
  },
  {
    id: 'cyber-motion',
    label: 'Cyber Motion',
    short: 'High-energy grid + bold animated contrast',
  },
];
