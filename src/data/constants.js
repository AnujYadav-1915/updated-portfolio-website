export const themeOptions = [
  { id: 'linear-minimalist', name: 'Linear Minimalist', tag: 'Slate & Indigo Modern' },
  { id: 'nordic-slate', name: 'Nordic Slate', tag: 'Charcoal & Amber Gold' },
  { id: 'terminal-clean', name: 'Terminal Clean', tag: 'Obsidian & Monospace Cyan' },
];

export const skillGroups = [
  { title: 'Programming Languages', key: 'languages' },
  { title: 'Frontend', key: 'frontend' },
  { title: 'Backend', key: 'backend' },
  { title: 'Databases', key: 'databases' },
  { title: 'Tools & Platforms', key: 'tools' },
  { title: 'Core CS', key: 'fundamentals' },
];

export const heroStats = [
  { value: '500+', label: 'DSA Problems Solved' },
  { value: '3+', label: 'Advanced Full-Stack Projects' },
  { value: 'Several', label: 'Certifications' },
];

export const featuredImpact = [
  {
    metric: 'Real-Time Systems',
    headline: 'Low-latency collaborative web apps',
    proof: 'Built WebSocket event pipelines with instant state sync and room-based session isolation.',
    icon: '⚡',
  },
  {
    metric: 'Full-Stack & APIs',
    headline: 'Clean backend architecture',
    proof: 'Designed RESTful APIs, JWT/RBAC auth systems, and database query optimizations across MERN/Next.js projects.',
    icon: '⚙️',
  },
  {
    metric: 'Cloud & Infrastructure',
    headline: 'Production-ready deployment',
    proof: 'Shipped containerized and cloud-hosted applications with custom Redis caching and high throughput.',
    icon: '☁️',
  },
];

export const sectionItems = [
  { id: 'home', label: 'Home', icon: '◆' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'projects', label: 'Projects', icon: '▦' },
  { id: 'impact', label: 'Highlights', icon: '◈' },
  { id: 'skills', label: 'Skills', icon: '◇' },
  { id: 'proof', label: 'Links', icon: '✦' },
  { id: 'education', label: 'Education', icon: '◎' },
  { id: 'achievements', label: 'Wins', icon: '★' },
  { id: 'contact', label: 'Contact', icon: '◉' },
];

export const mobileSectionItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'proof', label: 'Links' },
  { id: 'contact', label: 'Contact' },
];

export const skillTokenMap = {
  'React.js': '⚛', 'Next.js': 'NX', 'Node.js': '⬡', 'Express.js': 'EX',
  'Socket.IO': '⚡', 'Python': 'PY', 'TypeScript': 'TS', 'JavaScript': 'JS',
  'MongoDB': 'MG', 'PostgreSQL': 'PG', 'Docker': '🐳', 'AWS': '☁',
  'Redux': 'RX', 'Tailwind CSS': 'TW', 'MySQL': 'MY',
};

export const getSkillToken = (skill) => skillTokenMap[skill] || skill.slice(0, 2).toUpperCase();

export const proofOfWork = (links) => [
  { label: 'GitHub', href: links.github, blurb: 'Source code, commits, and project repositories.', icon: '⌨' },
  { label: 'LeetCode', href: links.leetcode, blurb: 'Data structures & algorithms problem-solving profile.', icon: '🧩' },
  { label: 'CodeChef', href: links.codechef, blurb: 'Competitive programming profile and rating history.', icon: '🏆' },
  { label: 'LinkedIn', href: links.linkedin, blurb: 'Professional timeline, background, and connection network.', icon: '🔗' },
  { label: 'Resume', href: links.resume, blurb: 'Technical resume for recruiter review.', icon: '📄' },
];

export const statusColors = {
  'In Progress': '#00ffa6',
  'R&D': '#00d4ff',
  'Planned': '#ff7b47',
};
