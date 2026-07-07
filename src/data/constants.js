export const skillGroups = [
  { title: 'Programming Languages', key: 'languages' },
  { title: 'Frontend', key: 'frontend' },
  { title: 'Backend', key: 'backend' },
  { title: 'Databases', key: 'databases' },
  { title: 'Tools & Platforms', key: 'tools' },
  { title: 'Core CS', key: 'fundamentals' },
];

export const heroStats = [
  { value: '1000+', label: 'DSA Problems Solved' },
  { value: '3+', label: 'Advanced Full-Stack Projects' },
  { value: '7+', label: 'AWS Certifications' },
];

export const featuredImpact = [
  {
    metric: 'Real-time Systems',
    headline: 'Low-latency collaborative apps',
    proof: 'Built socket-driven products with instant state sync and production-ready event flows.',
    icon: '⚡',
  },
  {
    metric: 'AI Product Engineering',
    headline: 'From model to user value',
    proof: 'Designed practical AI workflows for resume scoring, interview simulation, and skill-gap guidance.',
    icon: '🧠',
  },
  {
    metric: 'Cloud & Delivery',
    headline: 'Deployment-first mindset',
    proof: 'Shipped projects to live environments with clean APIs, auth, and scalable architecture patterns.',
    icon: '☁️',
  },
];

export const sectionItems = [
  { id: 'home', label: 'Home', icon: '◆' },
  { id: 'impact', label: 'Impact', icon: '◈' },
  { id: 'now-building', label: 'Now', icon: '▸' },
  { id: 'skills', label: 'Skills', icon: '◇' },
  { id: 'projects', label: 'Projects', icon: '▦' },
  { id: 'proof', label: 'Proof', icon: '✦' },
  { id: 'education', label: 'Education', icon: '◎' },
  { id: 'achievements', label: 'Wins', icon: '★' },
  { id: 'contact', label: 'Contact', icon: '◉' },
];

export const mobileSectionItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'proof', label: 'Proof' },
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
  { label: 'GitHub', href: links.github, blurb: 'Source code, commits, and repository activity.', icon: '⌨' },
  { label: 'LeetCode', href: links.leetcode, blurb: 'Algorithm practice consistency and problem-solving depth.', icon: '🧩' },
  { label: 'CodeChef', href: links.codechef, blurb: 'Competitive coding performance and ranking history.', icon: '🏆' },
  { label: 'LinkedIn', href: links.linkedin, blurb: 'Professional timeline, certifications, and network.', icon: '🔗' },
  { label: 'Resume', href: links.resume, blurb: 'One-page technical snapshot for quick recruiter review.', icon: '📄' },
];

export const statusColors = {
  'In Progress': '#00ffa6',
  'R&D': '#00d4ff',
  'Planned': '#ff7b47',
};
