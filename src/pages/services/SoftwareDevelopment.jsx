import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMonitor, FiSmartphone, FiLayers, FiServer, FiCheck, FiClock, FiDollarSign, FiUsers } from 'react-icons/fi';
import { pageTransition, staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations';
import SectionHeading from '../../components/ui/SectionHeading';
import CTA from '../../components/sections/CTA';
import SEO from '../../components/common/SEO';

const services = [
          {
                    icon: FiMonitor,
                    title: 'Web Development',
                    description: 'Modern web applications with React, Next.js, Vue',
                    features: ['Progressive Web Apps (PWAs)', 'Single Page Applications (SPAs)', 'Server-side rendering for performance'],
          },
          {
                    icon: FiSmartphone,
                    title: 'Mobile Development',
                    description: 'Native iOS & Android apps',
                    features: ['Cross-platform with React Native, Flutter', 'Mobile-first responsive design', 'App store deployment'],
          },
          {
                    icon: FiLayers,
                    title: 'SaaS Products',
                    description: 'Multi-tenant architecture',
                    features: ['Subscription & billing integration', 'Admin dashboards', 'API-first design'],
          },
          {
                    icon: FiServer,
                    title: 'Enterprise Software',
                    description: 'Custom business applications',
                    features: ['Legacy system modernization', 'Integration with existing tools', 'Scalable microservices architecture'],
          },
];

const processSteps = [
          {
                    number: '01',
                    title: 'Discovery & Planning',
                    items: ['Requirements gathering', 'Technical feasibility study', 'Architecture design', 'Project roadmap'],
          },
          {
                    number: '02',
                    title: 'Design & Prototyping',
                    items: ['UX/UI design', 'Interactive prototypes', 'Design system creation', 'User testing'],
          },
          {
                    number: '03',
                    title: 'Development',
                    items: ['Agile sprints (2-week cycles)', 'Code reviews & testing', 'Continuous integration', 'Weekly demos'],
          },
          {
                    number: '04',
                    title: 'Launch & Support',
                    items: ['Production deployment', 'Performance optimization', 'Bug fixes & updates', 'Ongoing maintenance'],
          },
];

const engagementModels = [
          {
                    title: 'Fixed Price Projects',
                    icon: FiDollarSign,
                    bestFor: 'Well-defined scope',
                    timeline: '2-6 months typically',
                    deliverable: 'Complete working product',
                    payment: 'Milestone-based',
          },
          {
                    title: 'Time & Materials',
                    icon: FiClock,
                    bestFor: 'Evolving requirements',
                    timeline: 'Ongoing collaboration',
                    deliverable: 'Continuous development',
                    payment: 'Monthly based on hours',
          },
          {
                    title: 'Dedicated Team',
                    icon: FiUsers,
                    bestFor: 'Long-term product development',
                    timeline: '6+ months',
                    deliverable: 'Extended team integration',
                    payment: 'Monthly retainer',
          },
];

const technologies = [
          'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript',
          'Node.js', 'Python', 'Java', 'Go', '.NET',
          'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
          'AWS', 'Azure', 'Google Cloud',
          'React Native', 'Flutter', 'Swift', 'Kotlin',
];

function SoftwareDevelopment() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              <SEO
                                        title="Custom Software Development Services - Web, Mobile & SaaS"
                                        description="Hire expert software developers for custom web applications, mobile apps, SaaS platforms, and enterprise software. React, Node.js, Python, cloud-native solutions."
                                        keywords="custom software development, web application development, mobile app development, SaaS development, enterprise software, React development, Node.js development"
                                        canonical="https://kloudz.com/services/software-development"
                              />

                              {/* Hero Section */}
                              <section className="pt-32 pb-20 relative overflow-hidden">
                                        <div className="absolute inset-0 hero-animated-bg" />
                                        <div className="absolute inset-0 grid-pattern opacity-20" />
                                        <div className="blur-circle-primary top-1/4 -left-40" />

                                        <div className="container-wide relative">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            animate="show"
                                                            className="max-w-3xl"
                                                  >
                                                            <motion.span variants={fadeUp} className="section-tag mb-6 inline-block">
                                                                      Services
                                                            </motion.span>
                                                            <motion.h1
                                                                      variants={fadeUp}
                                                                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                                                            >
                                                                      Custom Software Development
                                                            </motion.h1>
                                                            <motion.p
                                                                      variants={fadeUp}
                                                                      className="text-xl text-gray-400 mb-8 leading-relaxed"
                                                            >
                                                                      We build production-ready applications from scratch — web, mobile, SaaS,
                                                                      enterprise systems, and more. Your vision, our engineering expertise.
                                                            </motion.p>
                                                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                                                      <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2 group">
                                                                                Start Your Project
                                                                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                                      </Link>
                                                                      <Link to="/case-studies" className="btn-secondary px-8 py-4">
                                                                                View Our Work
                                                                      </Link>
                                                            </motion.div>
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Services Grid */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="What We Build"
                                                            title="Key Services"
                                                            description="From simple websites to complex enterprise systems, we have the expertise to deliver."
                                                            className="mb-16"
                                                  />

                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-2 gap-6"
                                                  >
                                                            {services.map((service, index) => {
                                                                      const Icon = service.icon;
                                                                      return (
                                                                                <motion.div
                                                                                          key={service.title}
                                                                                          variants={fadeUp}
                                                                                          custom={index}
                                                                                          className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
                                                                                >
                                                                                          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                                                                    <Icon className="w-7 h-7" />
                                                                                          </div>
                                                                                          <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                                                                                          <p className="text-gray-400 mb-4">{service.description}</p>
                                                                                          <ul className="space-y-2">
                                                                                                    {service.features.map((feature) => (
                                                                                                              <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                                                                                                                        <FiCheck className="text-primary flex-shrink-0" />
                                                                                                                        {feature}
                                                                                                              </li>
                                                                                                    ))}
                                                                                          </ul>
                                                                                </motion.div>
                                                                      );
                                                            })}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Development Process */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="How We Work"
                                                            title="Development Process"
                                                            description="Our proven methodology ensures on-time delivery with exceptional quality."
                                                            className="mb-16"
                                                  />

                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                                                  >
                                                            {processSteps.map((step, index) => (
                                                                      <motion.div
                                                                                key={step.number}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className="glass-card p-6 relative"
                                                                      >
                                                                                <span className="text-5xl font-display font-bold text-primary/20 absolute top-4 right-4">
                                                                                          {step.number}
                                                                                </span>
                                                                                <h3 className="text-lg font-semibold text-white mb-4">{step.title}</h3>
                                                                                <ul className="space-y-2">
                                                                                          {step.items.map((item) => (
                                                                                                    <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                                                                                                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                                                              {item}
                                                                                                    </li>
                                                                                          ))}
                                                                                </ul>
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Technologies */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Technology"
                                                            title="Our Tech Expertise"
                                                            description="We work with the best tools and frameworks in the industry."
                                                            className="mb-12"
                                                  />

                                                  <motion.div
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            viewport={{ once: true }}
                                                            className="flex flex-wrap justify-center gap-3"
                                                  >
                                                            {technologies.map((tech, index) => (
                                                                      <motion.span
                                                                                key={tech}
                                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                                viewport={{ once: true }}
                                                                                transition={{ delay: index * 0.03 }}
                                                                                whileHover={{ scale: 1.05, y: -2 }}
                                                                                className="px-4 py-2 text-sm text-gray-300 bg-dark-700/50 rounded-lg hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                                                                      >
                                                                                {tech}
                                                                      </motion.span>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Engagement Models */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Flexibility"
                                                            title="Engagement Models"
                                                            description="Choose the model that works best for your project and budget."
                                                            className="mb-16"
                                                  />

                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-3 gap-6"
                                                  >
                                                            {engagementModels.map((model, index) => {
                                                                      const Icon = model.icon;
                                                                      return (
                                                                                <motion.div
                                                                                          key={model.title}
                                                                                          variants={fadeUp}
                                                                                          custom={index}
                                                                                          className="glass-card p-8 text-center hover:border-primary/30 transition-all duration-300"
                                                                                >
                                                                                          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-6">
                                                                                                    <Icon className="w-7 h-7" />
                                                                                          </div>
                                                                                          <h3 className="text-xl font-semibold text-white mb-6">{model.title}</h3>
                                                                                          <div className="space-y-3 text-sm">
                                                                                                    <div className="flex justify-between">
                                                                                                              <span className="text-gray-500">Best for:</span>
                                                                                                              <span className="text-gray-300">{model.bestFor}</span>
                                                                                                    </div>
                                                                                                    <div className="flex justify-between">
                                                                                                              <span className="text-gray-500">Timeline:</span>
                                                                                                              <span className="text-gray-300">{model.timeline}</span>
                                                                                                    </div>
                                                                                                    <div className="flex justify-between">
                                                                                                              <span className="text-gray-500">Deliverable:</span>
                                                                                                              <span className="text-gray-300">{model.deliverable}</span>
                                                                                                    </div>
                                                                                                    <div className="flex justify-between">
                                                                                                              <span className="text-gray-500">Payment:</span>
                                                                                                              <span className="text-gray-300">{model.payment}</span>
                                                                                                    </div>
                                                                                          </div>
                                                                                </motion.div>
                                                                      );
                                                            })}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* CTA */}
                              <CTA
                                        headline="Let's Build Your Product"
                                        description="Start with a free consultation. We'll discuss your requirements and create a custom proposal."
                                        primaryCTA={{ text: "Schedule a Call", href: "/contact" }}
                              />
                    </motion.div>
          );
}

export default SoftwareDevelopment;
