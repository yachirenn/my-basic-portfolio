export interface project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  categories: ('web' | 'api' | 'mobile' | 'tool' | 'other')[];
  status: 'completed' | 'in-progress' | 'planning';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrls?: string[];
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export const projects: project[] = [
  // {
  //   title: "Projects",
  //   terminal: `
  // > Portfolio Website
  //   ↳ <a href="https://github.com/yachirenn/portfolio" target="_blank">github.com/yachirenn/portfolio</a>

  // > Crypto Simulator
  //   ↳ <a href="https://github.com/yachirenn/crypto-sim" target="_blank">github.com/yachirenn/crypto-sim</a>
  // `
  // },
  {
    id: '1',
    title: 'TKIP-Salsabila 1',
    description: 'Official institutional website for a kindergarten school to provide information and digital presence.',
    longDescription:
      'TKIP-Salsabila 1 is an institutional website developed for a kindergarten school as a digital information platform. The website is designed to present the school profile, vision and mission, academic activities, announcements, and contact information in a structured and accessible way. Built using Next.js, Node.js, and MongoDB, this project focuses on performance, scalability, and ease of content management. The project is currently under development and continuously improved to meet institutional needs.',
    technologies: ['Node.js', 'Nextjs', 'Mongodb'],
    categories: ['web'],
    status: 'in-progress',
    featured: true,
    startDate: 'Jun 2025',
    highlights: [
      'School profile, vision, and mission information pages',
      'Activity, news, and announcement management',
      'Responsive design for desktop and mobile devices',
      'Backend integration for dynamic content management'
    ]
  },
  {
    id: '2',
    title: 'To-Do List',
    description: 'Web-based to-do list application developed as a lecture assignment to manage daily tasks.',
    longDescription:
      'This To-Do List application was created as part of a Software Engineering Component course assignment. The project focuses on implementing basic web development concepts using HTML, CSS, and JavaScript. It allows users to manage daily tasks through a simple and interactive interface while emphasizing clean code structure and usability.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    categories: ['web'],
    status: 'completed',
    featured: false,
    githubUrl: 'https://github.com/yachirenn/To-do-List-App',
    startDate: 'Nov 2025',
    endDate: 'Nov 2025',
    highlights: [
      'Add, edit, and delete task functionality',
      'Dynamic DOM manipulation using JavaScript',
      'Simple and responsive user interface',
      'Focus on usability and basic software engineering principles'
    ]
  },
  {
    id: '3',
    title: 'Educafy (UXcel)',
    imageUrls: [
      '/assets/projects/1737340417551_Page_01.png',
      '/assets/projects/1737340417551_Page_02.png',
      '/assets/projects/1737340417551_Page_03.png',
      '/assets/projects/1737340417551_Page_04.png',
      '/assets/projects/1737340417551_Page_05.png',
      '/assets/projects/1737340417551_Page_06.png',
      '/assets/projects/1737340417551_Page_07.png',
      '/assets/projects/1737340417551_Page_08.png',
      '/assets/projects/1737340417551_Page_09.png',
      '/assets/projects/1737340417551_Page_10.png'
    ],
    description: 'UI/UX mobile application design for an educational learning platform.',
    longDescription:
      'Educafy is a UI/UX mobile application design project created using Figma. This project focuses on designing an intuitive and user-friendly educational platform that helps users access learning materials efficiently. The design process includes user flow planning, wireframing, high-fidelity UI design, and interactive prototyping to simulate real user interactions.',
    technologies: ['Figma'],
    categories: ['other'],
    status: 'completed',
    featured: false,
    githubUrl: 'https://github.com/',
    startDate: 'Oct 2025',
    endDate: 'Oct 2025',
    highlights: [
      'User flow and information architecture design',
      'High-fidelity mobile UI design using Figma',
      'Interactive prototype for user interaction simulation',
      'Consistent design system and visual components'
    ]
  },
];

export const projectCategories = [
  { id: 'all', name: 'All Projects', icon: '' },
  { id: 'web', name: 'Web Apps', icon: '' },
  { id: 'api', name: 'APIs', icon: '' },
  { id: 'mobile', name: 'Mobile', icon: '' },
  { id: 'tool', name: 'Tools', icon: '' },
  { id: 'other', name: 'Others', icon: '' }
];