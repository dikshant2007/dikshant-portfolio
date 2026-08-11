// Edit this file to personalize the portfolio. Everything the site renders
// is sourced from here, so you can swap in your own details in one place.

export const profile = {
  name: 'Dikshant Shahare',
  firstName: 'Dikshant',
  lastName: 'Shahare',
  role: 'Software Developer',
  location: 'Gondia, Maharashtra, India',
  available: true,
  tagline:
    'Software Developer | AI & Full-Stack Development | React.js | Java | Spring Boot | Flutter | REST APIs | MySQL | Building Real-World Applications',
  email: 'dikshantshahare656@gmail.com',
  phone: '+91 9699635797',
  resumeUrl: '',
  socials: [
    { label: 'GitHub', handle: '@dikshant2007', url: 'https://github.com/dikshant2007' },
    { label: 'LinkedIn', handle: 'dikshant-shahare', url: 'https://www.linkedin.com/in/dikshant-shahare-7b668a2a6/' },
  ],
}

export const stats = [
  { value: 'React.js', label: 'Frontend' },
  { value: 'Java', label: 'Backend' },
  { value: 'AI', label: 'Applications' },
]

export const about = {
  heading: 'A software developer building practical solutions.',
  paragraphs: [
    "I'm a Computer Engineering student and Software Developer passionate about building real-world web, mobile, and AI-powered applications.",
    "Currently, I'm working as a Software Developer Intern at MBiG IT SERVICES PVT. LTD., where I work with modern frontend and backend technologies including React.js, JavaScript, TypeScript, Java, Spring Boot, Spring MVC, Jakarta EE, JSP, MySQL, Tailwind CSS, MVC architecture, and REST APIs.",
    "I enjoy turning ideas into functional products and solving real-world problems through software. One of my key projects is a Social Media Management & Scheduling Platform, and I have also developed Spidex AI, an intelligent assistant.",
    "I hold a Diploma in Computer Engineering from Maharashtra State Board of Technical Education (MSBTE), with coursework in Data Structures, OOP, DBMS, Web/Mobile Development, and AI."
  ],
  focus: [
    'React.js & TypeScript',
    'Java & Spring Boot',
    'REST API Development & Integration',
    'MySQL & Database Development',
    'Flutter & Mobile Application Development',
    'HTML, CSS & Tailwind CSS',
    'MVC Architecture',
    'AI Application Development',
    'Git, GitHub & CI/CD'
  ],
}

export type Project = {
  title: string
  year: string
  category: string
  description: string
  tags: string[]
  href: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Social Media Management Platform',
    year: 'May 2026 — Present',
    category: 'Professional · Web Platform',
    description:
      'A centralized dashboard for managing, scheduling, automating, and analyzing content across LinkedIn, Instagram, Facebook, X, Threads, TikTok, and Pinterest. Includes AI-powered content management and team collaboration.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'AI'],
    href: '#',
    featured: true,
  },
  {
    title: 'Spidex AI',
    year: 'Personal project',
    category: 'AI · Application',
    description:
      'An intelligent AI assistant designed to help users with learning, programming guidance, productivity, and general-purpose tasks using advanced API integrations.',
    tags: ['Artificial Intelligence', 'API Integration', 'Problem Solving'],
    href: '#',
    featured: true,
  },
  {
    title: 'Library Automation & Tracking',
    year: 'Academic project',
    category: 'Application · Database',
    description:
      'A library management and tracking application designed to simplify library operations, improve the management of books, users, issue-return workflows, and search functionality.',
    tags: ['Java', 'Database Management', 'Software Engineering'],
    href: '#',
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  description: string
}

export const experience: Experience[] = [
  {
    company: 'MBiG IT SERVICES PVT. LTD.',
    role: 'Software Developer Intern',
    period: 'May 2026 — Present · On-site · India',
    description:
      'Develop responsive, database-driven web applications and REST APIs using React.js, Java, Spring Boot, Spring MVC, JSP, Tailwind CSS, and MySQL. Implemented MVC architecture for structured and scalable components. Explored CI/CD workflows and contributed to real-world software projects, debugging, and API integration.',
  }
]
