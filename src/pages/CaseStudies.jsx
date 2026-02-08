import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { pageTransition, staggerContainer, fadeUp } from '../utils/animations';
import SectionHeading from '../components/ui/SectionHeading';
import CinematicHero from '../components/sections/CinematicHero';
import CTA from '../components/sections/CTA';
import SEO from '../components/common/SEO';

const caseStudies = [
          {
                    id: 'fintech-platform',
                    title: 'Trading Platform for Fintech Startup',
                    client: 'FinEdge (Series B Fintech)',
                    industry: 'Fintech',
                    services: ['Web Development', 'Cloud & DevOps', 'Mobile App'],
                    challenge: 'Build a real-time trading platform that can handle 10,000+ concurrent users with sub-second latency.',
                    solution: 'Microservices architecture on AWS with WebSocket for real-time updates, React frontend with optimistic UI.',
                    results: [
                              { metric: '100K+', label: 'Daily Active Users' },
                              { metric: '<200ms', label: 'Average Latency' },
                              { metric: '99.99%', label: 'Uptime' },
                    ],
                    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis', 'Kubernetes'],
                    image: null,
                    featured: true,
          },
          {
                    id: 'ecommerce-modernization',
                    title: 'E-Commerce Platform Modernization',
                    client: 'RetailMax (Enterprise Retail)',
                    industry: 'E-Commerce',
                    services: ['Software Development', 'Cloud Migration', 'AI Integration'],
                    challenge: 'Modernize legacy monolith to handle 10x traffic during seasonal peaks.',
                    solution: 'Migrated to microservices on GCP, implemented ML-based recommendation engine.',
                    results: [
                              { metric: '300%', label: 'Conversion Increase' },
                              { metric: '50%', label: 'Infra Cost Reduction' },
                              { metric: '10x', label: 'Traffic Handling' },
                    ],
                    technologies: ['Vue.js', 'Python', 'GCP', 'TensorFlow', 'MongoDB', 'Docker'],
                    image: null,
                    featured: true,
          },
          {
                    id: 'healthcare-app',
                    title: 'Telemedicine Mobile Application',
                    client: 'HealthFirst (Healthcare Startup)',
                    industry: 'Healthcare',
                    services: ['Mobile Development', 'Backend Development'],
                    challenge: 'Build a HIPAA-compliant telemedicine app with video consultations and e-prescriptions.',
                    solution: 'React Native cross-platform app with secure video via WebRTC, HL7 FHIR integration.',
                    results: [
                              { metric: '50K+', label: 'Monthly Consultations' },
                              { metric: '4.8★', label: 'App Store Rating' },
                              { metric: 'HIPAA', label: 'Compliant' },
                    ],
                    technologies: ['React Native', 'Node.js', 'AWS', 'WebRTC', 'PostgreSQL'],
                    image: null,
                    featured: false,
          },
          {
                    id: 'saas-platform',
                    title: 'B2B SaaS HR Platform',
                    client: 'PeopleHub (HR Tech)',
                    industry: 'HR Tech',
                    services: ['SaaS Development', 'Cloud Infrastructure'],
                    challenge: 'Build a multi-tenant HR platform supporting 500+ enterprise clients.',
                    solution: 'Multi-tenant architecture with tenant isolation, role-based access, and white-labeling.',
                    results: [
                              { metric: '500+', label: 'Enterprise Clients' },
                              { metric: '2M+', label: 'Employees Managed' },
                              { metric: '$10M', label: 'ARR' },
                    ],
                    technologies: ['React', 'Java', 'Azure', 'PostgreSQL', 'Elasticsearch'],
                    image: null,
                    featured: false,
          },
];

function CaseStudies() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              <SEO
                                        title="Case Studies - Software Development Success Stories"
                                        description="Explore how Kloudz Computing helped startups and enterprises build scalable products. Fintech, e-commerce, healthcare, and SaaS success stories with real metrics."
                                        keywords="software development case studies, IT services portfolio, fintech platform development, e-commerce modernization, healthcare app development, SaaS development"
                                        canonical="https://kloudz.com/case-studies"
                              />

                              {/* Cinematic Hero Section */}
                              <CinematicHero
                                        tag="Our Work"
                                        title={
                                                  <>
                                                            <span className="word inline-block">Case</span>{' '}
                                                            <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-cyan to-accent-purple">Studies</span>
                                                  </>
                                        }
                                        subtitle={
                                                  <>
                                                            <span className="text-primary font-medium">Real results</span> for real clients. Explore how we've helped companies{' '}
                                                            <span className="text-accent-cyan font-medium">build products</span> and{' '}
                                                            <span className="text-accent-purple font-medium">scale their teams</span>.
                                                  </>
                                        }
                                        variant="default"
                              />

                              {/* Featured Case Studies */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="space-y-12"
                                                  >
                                                            {caseStudies.filter(cs => cs.featured).map((study, index) => (
                                                                      <motion.div
                                                                                key={study.id}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className={`glass-card p-8 lg:p-10 grid lg:grid-cols-2 gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                                                      >
                                                                                {/* Content */}
                                                                                <div>
                                                                                          <div className="flex items-center gap-3 mb-4">
                                                                                                    <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                                                                                                              {study.industry}
                                                                                                    </span>
                                                                                                    <span className="text-sm text-gray-500">{study.client}</span>
                                                                                          </div>

                                                                                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                                                                                    {study.title}
                                                                                          </h2>

                                                                                          <div className="mb-6">
                                                                                                    <h4 className="text-sm font-medium text-gray-400 mb-2">Challenge</h4>
                                                                                                    <p className="text-gray-300">{study.challenge}</p>
                                                                                          </div>

                                                                                          <div className="mb-6">
                                                                                                    <h4 className="text-sm font-medium text-gray-400 mb-2">Solution</h4>
                                                                                                    <p className="text-gray-300">{study.solution}</p>
                                                                                          </div>

                                                                                          <div className="flex flex-wrap gap-2 mb-6">
                                                                                                    {study.services.map((service) => (
                                                                                                              <span key={service} className="px-3 py-1 text-xs text-gray-400 bg-dark-700 rounded-full">
                                                                                                                        {service}
                                                                                                              </span>
                                                                                                    ))}
                                                                                          </div>

                                                                                          <Link
                                                                                                    to={`/case-studies/${study.id}`}
                                                                                                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                                                                                          >
                                                                                                    Read Full Case Study
                                                                                                    <FiArrowRight />
                                                                                          </Link>
                                                                                </div>

                                                                                {/* Results & Tech */}
                                                                                <div className="flex flex-col justify-between">
                                                                                          {/* Results */}
                                                                                          <div className="grid grid-cols-3 gap-4 mb-8">
                                                                                                    {study.results.map((result) => (
                                                                                                              <div key={result.label} className="text-center p-4 rounded-xl bg-dark-700/50">
                                                                                                                        <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                                                                                                                        <div className="text-xs text-gray-500">{result.label}</div>
                                                                                                              </div>
                                                                                                    ))}
                                                                                          </div>

                                                                                          {/* Technologies */}
                                                                                          <div>
                                                                                                    <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies Used</h4>
                                                                                                    <div className="flex flex-wrap gap-2">
                                                                                                              {study.technologies.map((tech) => (
                                                                                                                        <span key={tech} className="px-3 py-1.5 text-sm text-gray-300 bg-dark-700/50 rounded-lg">
                                                                                                                                  {tech}
                                                                                                                        </span>
                                                                                                              ))}
                                                                                                    </div>
                                                                                          </div>
                                                                                </div>
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* More Case Studies */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="More Projects"
                                                            title="Other Success Stories"
                                                            className="mb-12"
                                                  />

                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-2 gap-6"
                                                  >
                                                            {caseStudies.filter(cs => !cs.featured).map((study, index) => (
                                                                      <motion.div
                                                                                key={study.id}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className="glass-card p-6 hover:border-primary/30 transition-colors group"
                                                                      >
                                                                                <div className="flex items-center gap-3 mb-4">
                                                                                          <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                                                                                                    {study.industry}
                                                                                          </span>
                                                                                          <span className="text-sm text-gray-500">{study.client}</span>
                                                                                </div>

                                                                                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                                                                                <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>

                                                                                <div className="grid grid-cols-3 gap-3 mb-4">
                                                                                          {study.results.map((result) => (
                                                                                                    <div key={result.label} className="text-center">
                                                                                                              <div className="text-lg font-bold text-primary">{result.metric}</div>
                                                                                                              <div className="text-xs text-gray-500">{result.label}</div>
                                                                                                    </div>
                                                                                          ))}
                                                                                </div>

                                                                                <Link
                                                                                          to={`/case-studies/${study.id}`}
                                                                                          className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                                                                                >
                                                                                          Read More <FiArrowRight />
                                                                                </Link>
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* CTA */}
                              <CTA
                                        headline="Want Results Like These?"
                                        description="Tell us about your project and we'll show you what's possible."
                                        primaryCTA={{ text: "Start a Conversation", href: "/contact" }}
                              />
                    </motion.div>
          );
}

export default CaseStudies;
