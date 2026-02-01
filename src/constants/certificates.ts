// export const certificates = [
//   {
//     id: 1,
//     name: "UI/UX Competition Award Certificates",
//     issuer: "Universitas AMIKOM Yogyakarta",
//     date: "July 2025",
//     link: "https://www.freecodecamp.org/certification/rendysulistyawan/frontend-development",
//     description:
//       "Completed the UI/UX Competition Award Certification, covering Figma.",
//     tags: ["HTML", "CSS", "JavaScript", "React"], 
//   },
//   {
//     id: 2,
//     name: "MikroTik Academy Certificated",
//     issuer: "MikroTik",
//     date: "Oktober 2025",
//     link: "https://mikrotik.com/training/certificate/c507217cc3/",
//     description:
//       "Earned the JavaScript Algorithms and Data Structures Certification from FreeCodeCamp, focusing on problem-solving and algorithmic thinking.",
//     tags: ["JavaScript", "Algorithms", "Data Structures"],
//   },
//   {
//     id: 3,
//     name: "Fundamental AI Course",
//     issuer: "Dicoding Indonesia",
//     date: "Oktober 2025",
//     link: "https://www.dicoding.com/certificates/2VX35RM0JPYQ/",
//     description:
//       "Completed the Fundamental AI Course on Dicoding, gaining in-depth knowledge of AI, Machine Learning, and state Deep Learning.",
//     tags: ["AI", "Python",],
//   },
//   {
//     id: 4,
//     name: "Minecraft Designer",
//     issuer: "Code.org",
//     date: "June 2025",
//     link: "https://studio.code.org/print_certificates/eyJuYW1lIjoiUmVuZHkgU3VsaXN0eWF3YW4iLCJjb3Vyc2UiOiJtaW5lY3JhZnQiLCJkb25vciI6Ik1pY3Jvc29mdCJ9",
//     description:
//       "Completing a course on creating new game concepts in Minecraft on the code.org platform",
//     tags: ["blockly", "Javascript", "Design"],
//   },
// ];

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string; 
  imageUrl?: string;
  verificationUrl?: string;
  description?: string; 
  skills?: string[];
  categories: ('general' | 'frontend' | 'backend' | 'devops' | 'cloud')[];
  featured: boolean;
  expiryDate?: string;
  status: 'active' | 'expired' | 'lifetime';
}

export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'Minecraft Designer',
    issuer: 'Code.org',
    issueDate: 'July 2025',
    imageUrl: '/assets/certificates/minecraft-designer-codeorg.jpg',
    description: 'Just FUN!!!',
    categories: ['frontend'],
    skills: ['Blockly', 'JavaScript'],
    featured: true,
    status: 'lifetime',
  },
  {
    id: '2',
    name: 'AMIKOM UI/UX Competition',
    issuer: 'Yogyakarta AMIKOM Univercity',
    issueDate: 'Okt 2025',
    credentialId: 'xx-xxx-xxx',
    imageUrl: '/assets/certificates/UIUX_competition_certificate.png',
    description: 'Award as a UI/UX Competition.',
    skills: ['Design', 'team work', 'Problem Solving'],
    categories: ['frontend'],
    featured: true,
    status: 'lifetime'
  },
  {
    id: '3',
    name: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    issueDate: 'Okt 2025',
    credentialId: 'xx-xxx-xxx',
    imageUrl: '/assets/certificates/AI_course_certificates.png',
    description: 'Graduation certificates for students who participated in the independent dicoding program',
    categories: ['general'],
    featured: true,
    status: 'lifetime'
  },
];

export const certificateCategories = [
  { id: 'all', name: 'All Certificates', icon: '', count: certificates.length },
  { id: 'general', name: 'General', icon: '', count: certificates.filter(c => c.categories.includes('general')).length },
  { id: 'frontend', name: 'Frontend', icon: '', count: certificates.filter(c => c.categories.includes('frontend')).length },
  { id: 'backend', name: 'Backend', icon: '', count: certificates.filter(c => c.categories.includes('backend')).length },
  { id: 'devops', name: 'DevOps', icon: '', count: certificates.filter(c => c.categories.includes('devops')).length },
  { id: 'cloud', name: 'Cloud', icon: '', count: certificates.filter(c => c.categories.includes('cloud')).length },
];

export const getCertificateStats = () => {
  const total = certificates.length;
  const featured = certificates.filter(c => c.featured).length;
  const active = certificates.filter(c => c.status === 'active').length;
  const lifetime = certificates.filter(c => c.status === 'lifetime').length;
  
  return { total, featured, active, lifetime };
};