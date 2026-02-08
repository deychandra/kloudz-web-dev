import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { pageTransition, staggerContainer, fadeUp } from '../utils/animations';
import CinematicHero from '../components/sections/CinematicHero';
import CTA from '../components/sections/CTA';
import SEO from '../components/common/SEO';

const industries = [
          {
                    id: 'fintech',
                    name: 'FinTech',
                    projects: '40+',
                    description: 'Secure payment systems, banking apps, and financial analytics platforms',
                    color: 'from-emerald-500/20 to-emerald-500/5',
                    iconColor: 'text-emerald-500',
                    borderColor: 'hover:border-emerald-500/30',
          },
          {
                    id: 'healthtech',
                    name: 'HealthTech',
                    projects: '25+',
                    description: 'HIPAA-compliant healthcare solutions, telemedicine platforms, and health analytics',
                    color: 'from-red-500/20 to-red-500/5',
                    iconColor: 'text-red-500',
                    borderColor: 'hover:border-red-500/30',
          },
          {
                    id: 'ecommerce',
                    name: 'E-Commerce',
                    projects: '35+',
                    description: 'Scalable online stores, marketplaces, and omnichannel retail solutions',
                    color: 'from-purple-500/20 to-purple-500/5',
                    iconColor: 'text-purple-500',
                    borderColor: 'hover:border-purple-500/30',
          },
          {
                    id: 'edtech',
                    name: 'EdTech',
                    projects: '20+',
                    description: 'Learning management systems, online courses, and educational platforms',
                    color: 'from-blue-500/20 to-blue-500/5',
                    iconColor: 'text-blue-500',
                    borderColor: 'hover:border-blue-500/30',
          },
          {
                    id: 'saas',
                    name: 'SaaS',
                    projects: '50+',
                    description: 'B2B and B2C SaaS products with robust multi-tenant architectures',
                    color: 'from-primary/20 to-primary/5',
                    iconColor: 'text-primary',
                    borderColor: 'hover:border-primary/30',
          },
          {
                    id: 'logistics',
                    name: 'Logistics',
                    projects: '15+',
                    description: 'Fleet management, supply chain optimization, and tracking systems',
                    color: 'from-orange-500/20 to-orange-500/5',
                    iconColor: 'text-orange-500',
                    borderColor: 'hover:border-orange-500/30',
          },
];

function Industries() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              <SEO
                                        title="Industries We Serve - FinTech, HealthTech, E-Commerce, SaaS"
                                        description="Kloudz Computing serves diverse industries including FinTech, HealthTech, E-Commerce, EdTech, SaaS, and Logistics. 185+ successful projects delivered across sectors."
                                        keywords="fintech software development, healthtech solutions, ecommerce development, edtech platforms, saas development, logistics software, industry expertise"
                                        canonical="https://kloudz.com/industries"
                              />

                              {/* Cinematic Hero Section */}
                              <CinematicHero
                                        tag="Expertise"
                                        title={
                                                  <>
                                                            <span className="word inline-block">Industry</span>{' '}
                                                            <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-purple to-accent-cyan">Expertise</span>
                                                  </>
                                        }
                                        subtitle={
                                                  <>
                                                            We bring <span className="text-primary font-medium">deep domain knowledge</span> across multiple industries, helping businesses navigate{' '}
                                                            <span className="text-accent-purple font-medium">complex technical challenges</span> with proven solutions.
                                                  </>
                                        }
                                        variant="purple"
                              />

                              {/* Industries Grid */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                                  >
                                                            {industries.map((industry, index) => (
                                                                      <motion.div
                                                                                key={industry.id}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className={`glass-card overflow-hidden group transition-all duration-300 ${industry.borderColor}`}
                                                                      >
                                                                                {/* Gradient header */}
                                                                                <div className={`h-2 bg-gradient-to-r ${industry.color}`} />

                                                                                <div className="p-8">
                                                                                          {/* Project count */}
                                                                                          <div className="flex items-center gap-3 mb-4">
                                                                                                    <span className={`text-3xl font-display font-bold ${industry.iconColor}`}>
                                                                                                              {industry.projects}
                                                                                                    </span>
                                                                                                    <span className="text-sm text-gray-500">Projects</span>
                                                                                          </div>

                                                                                          {/* Title */}
                                                                                          <h3 className="text-2xl font-bold text-white mb-3">
                                                                                                    {industry.name}
                                                                                          </h3>

                                                                                          {/* Description */}
                                                                                          <p className="text-gray-400 text-sm leading-relaxed">
                                                                                                    {industry.description}
                                                                                          </p>
                                                                                </div>
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Don't See Your Industry */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <motion.div
                                                            variants={fadeUp}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto"
                                                  >
                                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                                                      Don't See Your Industry?
                                                            </h2>
                                                            <p className="text-gray-400 mb-8 text-lg">
                                                                      We love tackling new challenges. Let's discuss how we can help your specific business.
                                                            </p>
                                                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                                      <Link
                                                                                to="/contact"
                                                                                className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2 group"
                                                                      >
                                                                                Let's Talk
                                                                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                                      </Link>
                                                            </motion.div>
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* CTA */}
                              <CTA
                                        headline="Ready to Start Your Project?"
                                        description="Partner with industry experts who understand your domain."
                                        primaryCTA={{ text: "Schedule a Call", href: "/contact" }}
                              />
                    </motion.div>
          );
}

export default Industries;
