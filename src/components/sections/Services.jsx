import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiCloud, FiCpu, FiUsers, FiUserCheck, FiPackage, FiShield, FiTrendingUp } from 'react-icons/fi';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';

/**
 * Dual Offering Section - IT Services & Contract Hiring
 */
function Services() {
          const services = {
                    itServices: {
                              title: 'IT Services',
                              subtitle: 'Build Your Product',
                              description: 'From MVPs to enterprise systems, we build production-ready applications with clean code and scalable architecture.',
                              features: [
                                        { icon: FiCode, title: 'Custom Software Development', desc: 'Web, mobile, and enterprise applications built from scratch' },
                                        { icon: FiCloud, title: 'Cloud & DevOps', desc: 'Scalable infrastructure, CI/CD, containerization, monitoring' },
                                        { icon: FiCpu, title: 'AI & Automation', desc: 'Machine learning models, process automation, intelligent systems' },
                                        { icon: FiPackage, title: 'Product Strategy', desc: 'Technical consulting, architecture design, MVP planning' },
                              ],
                              deliverables: ['Full source code ownership', 'Production-ready applications', 'Technical documentation', 'Ongoing support & maintenance'],
                              cta: { text: 'Explore Services', href: '/services/software-development' },
                              gradient: 'from-primary/20 via-primary/5 to-transparent',
                    },
                    hiring: {
                              title: 'Contract Hiring',
                              subtitle: 'Scale Your Team',
                              description: 'Get pre-vetted engineers who integrate seamlessly with your team. Hire in 2 weeks at 50% less cost.',
                              features: [
                                        { icon: FiUserCheck, title: 'Dedicated Developers', desc: 'Full-time engineers who work exclusively for you' },
                                        { icon: FiUsers, title: 'Contract Staffing', desc: 'Flexible engagement for project-based needs' },
                                        { icon: FiTrendingUp, title: 'Team Extension', desc: 'Scale up or down based on your requirements' },
                                        { icon: FiShield, title: 'Vetted Talent', desc: 'Pre-screened engineers with proven expertise' },
                              ],
                              benefits: ['50% cost savings vs. US/EU hires', 'Hire in 2 weeks, not 2 months', 'Full transparency & control', 'Replace developers anytime'],
                              cta: { text: 'View Hiring Models', href: '/hiring/contract-hiring' },
                              gradient: 'from-accent-purple/20 via-accent-purple/5 to-transparent',
                    },
          };

          return (
                    <section className="section-padding relative overflow-hidden">
                              {/* Background */}
                              <div className="absolute inset-0 grid-pattern opacity-20" />
                              <div className="blur-circle-primary -top-40 -left-40 opacity-10" />
                              <div className="blur-circle-accent -bottom-40 -right-40 opacity-10" />

                              <div className="container-wide relative">
                                        <SectionHeading
                                                  tag="What We Do"
                                                  title="Two Ways to Work With Us"
                                                  description="Whether you need to build a product from scratch or scale your engineering team, we've got you covered."
                                                  className="mb-16"
                                        />

                                        <div className="grid lg:grid-cols-2 gap-8">
                                                  {/* IT Services Card */}
                                                  <motion.div
                                                            variants={slideInLeft}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true, margin: '-100px' }}
                                                            className="group"
                                                  >
                                                            <div className={`relative h-full glass-card p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-primary/30`}>
                                                                      {/* Gradient background */}
                                                                      <div className={`absolute inset-0 bg-gradient-to-br ${services.itServices.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                                                      <div className="relative">
                                                                                {/* Header */}
                                                                                <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                                                                                          {services.itServices.subtitle}
                                                                                </span>
                                                                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                                                                                          {services.itServices.title}
                                                                                </h3>
                                                                                <p className="text-gray-400 mb-8">
                                                                                          {services.itServices.description}
                                                                                </p>

                                                                                {/* Features grid */}
                                                                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                                                                          {services.itServices.features.map((feature, index) => {
                                                                                                    const Icon = feature.icon;
                                                                                                    return (
                                                                                                              <motion.div
                                                                                                                        key={feature.title}
                                                                                                                        initial={{ opacity: 0, y: 20 }}
                                                                                                                        whileInView={{ opacity: 1, y: 0 }}
                                                                                                                        viewport={{ once: true }}
                                                                                                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                                                                                                        className="flex items-start gap-3 p-3 rounded-lg bg-dark-700/30"
                                                                                                              >
                                                                                                                        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                                                                                                                  <Icon className="w-5 h-5" />
                                                                                                                        </div>
                                                                                                                        <div>
                                                                                                                                  <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                                                                                                                                  <p className="text-xs text-gray-500 mt-0.5">{feature.desc}</p>
                                                                                                                        </div>
                                                                                                              </motion.div>
                                                                                                    );
                                                                                          })}
                                                                                </div>

                                                                                {/* Deliverables */}
                                                                                <div className="mb-8">
                                                                                          <h4 className="text-sm font-medium text-gray-400 mb-3">Deliverables:</h4>
                                                                                          <div className="flex flex-wrap gap-2">
                                                                                                    {services.itServices.deliverables.map((item) => (
                                                                                                              <span key={item} className="px-3 py-1 text-xs text-gray-300 bg-dark-700/50 rounded-full">
                                                                                                                        ✓ {item}
                                                                                                              </span>
                                                                                                    ))}
                                                                                          </div>
                                                                                </div>

                                                                                {/* CTA */}
                                                                                <Link
                                                                                          to={services.itServices.cta.href}
                                                                                          className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                                                                                >
                                                                                          {services.itServices.cta.text}
                                                                                          <FiArrowRight className="w-4 h-4" />
                                                                                </Link>
                                                                      </div>
                                                            </div>
                                                  </motion.div>

                                                  {/* Contract Hiring Card */}
                                                  <motion.div
                                                            variants={slideInRight}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true, margin: '-100px' }}
                                                            className="group"
                                                  >
                                                            <div className={`relative h-full glass-card p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-accent-purple/30`}>
                                                                      {/* Gradient background */}
                                                                      <div className={`absolute inset-0 bg-gradient-to-br ${services.hiring.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                                                      <div className="relative">
                                                                                {/* Header */}
                                                                                <span className="inline-block px-3 py-1 text-xs font-medium text-accent-purple bg-accent-purple/10 rounded-full mb-4">
                                                                                          {services.hiring.subtitle}
                                                                                </span>
                                                                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                                                                                          {services.hiring.title}
                                                                                </h3>
                                                                                <p className="text-gray-400 mb-8">
                                                                                          {services.hiring.description}
                                                                                </p>

                                                                                {/* Features grid */}
                                                                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                                                                          {services.hiring.features.map((feature, index) => {
                                                                                                    const Icon = feature.icon;
                                                                                                    return (
                                                                                                              <motion.div
                                                                                                                        key={feature.title}
                                                                                                                        initial={{ opacity: 0, y: 20 }}
                                                                                                                        whileInView={{ opacity: 1, y: 0 }}
                                                                                                                        viewport={{ once: true }}
                                                                                                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                                                                                                        className="flex items-start gap-3 p-3 rounded-lg bg-dark-700/30"
                                                                                                              >
                                                                                                                        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple flex-shrink-0">
                                                                                                                                  <Icon className="w-5 h-5" />
                                                                                                                        </div>
                                                                                                                        <div>
                                                                                                                                  <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                                                                                                                                  <p className="text-xs text-gray-500 mt-0.5">{feature.desc}</p>
                                                                                                                        </div>
                                                                                                              </motion.div>
                                                                                                    );
                                                                                          })}
                                                                                </div>

                                                                                {/* Benefits */}
                                                                                <div className="mb-8">
                                                                                          <h4 className="text-sm font-medium text-gray-400 mb-3">Benefits:</h4>
                                                                                          <div className="flex flex-wrap gap-2">
                                                                                                    {services.hiring.benefits.map((item) => (
                                                                                                              <span key={item} className="px-3 py-1 text-xs text-gray-300 bg-dark-700/50 rounded-full">
                                                                                                                        ✓ {item}
                                                                                                              </span>
                                                                                                    ))}
                                                                                          </div>
                                                                                </div>

                                                                                {/* CTA */}
                                                                                <Link
                                                                                          to={services.hiring.cta.href}
                                                                                          className="inline-flex items-center gap-2 text-accent-purple font-semibold group-hover:gap-3 transition-all"
                                                                                >
                                                                                          {services.hiring.cta.text}
                                                                                          <FiArrowRight className="w-4 h-4" />
                                                                                </Link>
                                                                      </div>
                                                            </div>
                                                  </motion.div>
                                        </div>
                              </div>
                    </section>
          );
}

export default Services;
