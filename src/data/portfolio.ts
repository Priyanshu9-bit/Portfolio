export const profile = {
  name: 'Priyanshu Panda',
  role: 'B.Tech CSE Student & Aspiring Software Developer',
  tagline: 'Web Developer | Python Developer | Tech Enthusiast',
  description:
    "I build modern web applications and practical software solutions while continuously exploring new technologies and solving real-world problems.",
  email: 'priyanshupanda142@gmail.com',
  github: 'https://github.com/Priyanshu9-bit',
  linkedin: '[LINKEDIN URL]',
  resumeUrl: '#',
  photo: '/images/profile.JPG',
};

export const heroRoles = [
  'B.Tech CSE Student',
  'Aspiring Software Developer',
  'Web Developer',
  'Python Developer',
  'Tech Enthusiast',
];

export type Service = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
};

export const services: Service[] = [
  {
    icon: 'Code2',
    title: 'Web Development',
    description: 'Building responsive, modern web apps with React, HTML & CSS — focused on clean UI and smooth UX.',
    gradient: 'from-accent-blue to-accent-cyan',
  },
  {
    icon: 'Terminal',
    title: 'Python Development',
    description: 'Writing practical Python scripts and applications for automation, logic, and problem solving.',
    gradient: 'from-accent-violet to-accent-blue',
  },
  {
    icon: 'Database',
    title: 'Backend & Data',
    description: 'Working with SQL and Firebase to design databases, manage data, and power real-time applications.',
    gradient: 'from-accent-pink to-accent-violet',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const aboutCards = [
  {
    icon: 'GraduationCap',
    title: 'Education',
    value: 'B.Tech — Computer Science & Engineering',
  },
  {
    icon: 'School',
    title: 'University',
    value: 'GIET University, Gunupur',
  },
  {
    icon: 'BookOpen',
    title: 'Current Status',
    value: '5th Semester',
  },
  {
    icon: 'Code2',
    title: 'Focus',
    value: 'Web Development & Software Development',
  },
];

export const aboutParagraph =
  "I'm a 5th-semester B.Tech Computer Science & Engineering student at GIET University, Gunupur, passionate about software development, web development, and Python. I enjoy solving real-world problems, building practical applications, and continuously exploring new technologies to grow as a developer.";

export type Skill = {
  name: string;
  description: string;
  gradient: string;
};

export const skills: Skill[] = [
  { name: 'HTML', description: 'Semantic markup & structure', gradient: 'from-orange-500 to-amber-500' },
  { name: 'CSS', description: 'Styling, layout & animations', gradient: 'from-blue-500 to-sky-500' },
  { name: 'Python', description: 'Scripting, automation & logic', gradient: 'from-yellow-400 to-emerald-500' },
  { name: 'React', description: 'Component-driven UIs', gradient: 'from-cyan-400 to-blue-500' },
  { name: 'SQL', description: 'Databases & queries', gradient: 'from-indigo-400 to-violet-500' },
  { name: 'Firebase', description: 'Backend & real-time data', gradient: 'from-amber-400 to-rose-500' },
];

export type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: '[Project Name]',
    description: '[Add project description here]',
    technologies: ['HTML', 'CSS', 'React'],
    image: '[PROJECT SCREENSHOT 1]',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    name: '[Project Name]',
    description: '[Add project description here]',
    technologies: ['Python', 'SQL', 'Firebase'],
    image: '[PROJECT SCREENSHOT 2]',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    name: '[Project Name]',
    description: '[Add project description here]',
    technologies: ['React', 'Firebase', 'CSS'],
    image: '[PROJECT SCREENSHOT 3]',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 4,
    name: '[Project Name]',
    description: '[Add project description here]',
    technologies: ['HTML', 'Python', 'SQL'],
    image: '[PROJECT SCREENSHOT 4]',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export type Internship = {
  title: string;
  description: string;
  image: string;
};

export const internships: Internship[] = [
  {
    title: 'EIS — Web Development Internship',
    description:
      'Web development internship focused on building and understanding modern web technologies and practical development workflows.',
    image: '[INTERNSHIP CERTIFICATE / PHOTO]',
  },
  {
    title: 'Python Development Internship',
    description:
      'Python development internship focused on programming, problem solving, and practical software development.',
    image: '[PYTHON INTERNSHIP CERTIFICATE / PHOTO]',
  },
];

export const achievement = {
  title: 'GDG Hackathon Winner — 2025',
  description:
    'Proud to be a winner of the GDG Hackathon 2025, where I participated in a competitive environment focused on innovation, teamwork, and building technology-driven solutions.',
  image: '[HACKATHON CERTIFICATE / PHOTO]',
};

export type Certificate = {
  title: string;
  organization: string;
  year: string;
  image: string;
};

export const certificates: Certificate[] = [
  { title: 'Certificate Title', organization: 'Issuing Organization', year: '2025', image: '[CERTIFICATE IMAGE]' },
  { title: 'Certificate Title', organization: 'Issuing Organization', year: '2025', image: '[CERTIFICATE IMAGE]' },
  { title: 'Certificate Title', organization: 'Issuing Organization', year: '2024', image: '[CERTIFICATE IMAGE]' },
  { title: 'Certificate Title', organization: 'Issuing Organization', year: '2024', image: '[CERTIFICATE IMAGE]' },
];
