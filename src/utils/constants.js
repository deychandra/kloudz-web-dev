// Site-wide constants

export const SITE_CONFIG = {
          name: 'Kloudz Computing',
          tagline: 'We Build Products & Scale Teams',
          description: 'Transform your ideas into reality with world-class engineering talent and cutting-edge technology solutions.',
          email: 's.roy@kloudzcomputing.tech',
          phone: {
                    us: '+91 90466 84235',
                    uk: '+91 90466 84235',
                    india: '+91 90466 84235',
          },
          address: [
                    'O-Block, Flat No.-3, 1st Floor, C/17/9, Baishnabghata Patuli Township, Kolkata, West Bengal, 700094, India',
                    'VICI 102, SJR VERITY, Hosa Rd, KSDB Quarters Kaveri Layout, KASAVANAHALLI, Bengaluru, Karnataka 560035',
          ],
          founded: 2014,
          social: {
                    linkedin: 'https://linkedin.com/company/kloudzcomputing',
                    twitter: 'https://twitter.com/kloudzcomputing',
                    github: 'https://github.com/kloudzcomputing',
                    facebook: 'https://facebook.com/kloudzcomputing',
          },
};

export const NAV_LINKS = [
          {
                    name: 'Services',
                    href: '#',
                    hasDropdown: true,
                    items: [
                              {
                                        name: 'Software Development',
                                        href: '/services/software-development',
                                        description: 'Custom software solutions tailored to your business needs',
                                        icon: 'code',
                              },
                              {
                                        name: 'Cloud & DevOps',
                                        href: '/services/cloud-devops',
                                        description: 'Scalable cloud infrastructure and automation',
                                        icon: 'cloud',
                              },
                              {
                                        name: 'AI & Automation',
                                        href: '/services/ai-automation',
                                        description: 'Intelligent solutions powered by machine learning',
                                        icon: 'cpu',
                              },
                    ],
          },
          {
                    name: 'Hiring',
                    href: '#',
                    hasDropdown: true,
                    items: [
                              {
                                        name: 'Contract Hiring',
                                        href: '/hiring/contract-hiring',
                                        description: 'Flexible IT staff augmentation for your projects',
                                        icon: 'users',
                              },
                              {
                                        name: 'Dedicated Developers',
                                        href: '/hiring/dedicated-developers',
                                        description: 'Full-time developers integrated with your team',
                                        icon: 'user-check',
                              },
                    ],
          },
          { name: 'Industries', href: '/industries' },
          { name: 'Case Studies', href: '/case-studies' },
          { name: 'About', href: '/about' },
          { name: 'Blog', href: '/blog' },
];

export const FOOTER_LINKS = {
          services: [
                    { name: 'Software Development', href: '/services/software-development' },
                    { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
                    { name: 'AI & Automation', href: '/services/ai-automation' },
                    { name: 'Contract Hiring', href: '/hiring/contract-hiring' },
                    { name: 'Dedicated Developers', href: '/hiring/dedicated-developers' },
          ],
          company: [
                    { name: 'About Us', href: '/about' },
                    { name: 'Case Studies', href: '/case-studies' },
                    { name: 'Industries', href: '/industries' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Careers', href: '/careers' },
          ],
          resources: [
                    { name: 'Documentation', href: '#' },
                    { name: 'API Reference', href: '#' },
                    { name: 'FAQs', href: '#' },
                    { name: 'Support', href: '/contact' },
                    { name: 'Privacy Policy', href: '/privacy' },
                    { name: 'Terms of Service', href: '/terms' },
          ],
};

export const STATS = [
          { value: '15+', label: 'Countries Served', description: 'Global delivery with local expertise' },
          { value: '50+', label: 'Enterprise Clients', description: 'Trusted by industry leaders' },
          { value: '10+', label: 'Years Experience', description: 'Proven track record of success' },
          { value: '100%', label: 'NDA Compliance', description: 'Your IP is always protected' },
];

export const TECHNOLOGIES = {
          frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
          backend: ['Node.js', 'Python', 'Java', 'Go', '.NET', 'Ruby on Rails'],
          cloud: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
          database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB', 'Elasticsearch'],
          ai: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face', 'Computer Vision'],
};

export const INDUSTRIES = [
          { name: 'Fintech & Banking', icon: 'landmark', color: 'emerald' },
          { name: 'Healthcare', icon: 'heart-pulse', color: 'red' },
          { name: 'E-Commerce', icon: 'shopping-cart', color: 'purple' },
          { name: 'Logistics', icon: 'truck', color: 'orange' },
          { name: 'Education', icon: 'graduation-cap', color: 'blue' },
          { name: 'Real Estate', icon: 'building', color: 'teal' },
          { name: 'Travel', icon: 'plane', color: 'cyan' },
          { name: 'Media', icon: 'play-circle', color: 'pink' },
];

export const PROCESS_STEPS = [
          {
                    number: '01',
                    title: 'Share Your Needs',
                    description: 'Tell us about your project or hiring requirements. 15-minute discovery call.',
          },
          {
                    number: '02',
                    title: 'Get Matched',
                    description: 'We find the perfect engineers or solution approach. Review profiles or technical proposal.',
          },
          {
                    number: '03',
                    title: 'Start Fast',
                    description: 'Onboard in days, not weeks. Integrated development process.',
          },
          {
                    number: '04',
                    title: 'Scale & Succeed',
                    description: 'Continuous delivery and support. Grow team as needed.',
          },
];

export const WHY_KLOUDZ = [
          {
                    title: 'Speed of Delivery',
                    description: 'Rapid development cycles with agile methodologies. From concept to production in weeks, not months.',
                    icon: 'zap',
          },
          {
                    title: 'Engineering Quality',
                    description: 'Senior engineers with 8+ years average experience. Clean code, best practices, and thorough testing.',
                    icon: 'shield-check',
          },
          {
                    title: 'Built to Scale',
                    description: 'Architecture designed for growth. Handle millions of users without breaking a sweat.',
                    icon: 'trending-up',
          },
          {
                    title: 'Security & Compliance',
                    description: 'SOC 2 ready processes. GDPR, HIPAA compliant. Enterprise-grade security from day one.',
                    icon: 'lock',
          },
          {
                    title: 'Timezone Overlap',
                    description: 'Flexible working hours with 4-6 hours overlap with US/EU timezones. Seamless collaboration.',
                    icon: 'clock',
          },
          {
                    title: 'Long-term Partnership',
                    description: 'Not just vendors — technology partners invested in your success.',
                    icon: 'handshake',
          },
];
