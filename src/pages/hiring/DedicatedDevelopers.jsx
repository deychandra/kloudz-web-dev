import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiX, FiDollarSign, FiUsers, FiClock, FiAward } from 'react-icons/fi';
import { pageTransition, staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeading from '../../components/ui/SectionHeading';
import CTA from '../../components/sections/CTA';

const teamRoles = [
          'Frontend Developers (React, Vue, Angular)',
          'Backend Developers (Node.js, Python, Java)',
          'Full Stack Developers',
          'Mobile Developers (iOS, Android, React Native)',
          'DevOps Engineers',
          'QA Engineers (Manual & Automation)',
          'UI/UX Designers',
          'Tech Leads / Architects',
          'Product Managers',
          'Scrum Masters',
];

const timeline = [
          {
                    month: 'Month 1',
                    title: 'Team Setup',
                    items: ['Requirements gathering', 'Role definitions & hiring', 'Team introductions', 'Onboarding & training', 'Tool setup & access'],
          },
          {
                    month: 'Month 2-3',
                    title: 'Ramp-up',
                    items: ['Knowledge transfer', 'Process alignment', 'Initial deliverables', 'Feedback & adjustments'],
          },
          {
                    month: 'Month 4+',
                    title: 'Full Productivity',
                    items: ['Seamless collaboration', 'Consistent delivery', 'Scale up/down as needed', 'Ongoing optimization'],
          },
];

const pricing = [
          { level: 'Junior', rate: '$3,500 - $4,500/month' },
          { level: 'Mid-Level', rate: '$5,000 - $6,500/month' },
          { level: 'Senior', rate: '$7,000 - $9,000/month' },
          { level: 'Lead/Architect', rate: '$9,500 - $12,000/month' },
];

const includes = [
          '160 hours/month (full-time)',
          'Project management',
          'HR & payroll handling',
          'Infrastructure & tools',
          'No hidden costs',
];

const benefits = {
          cost: ['50-60% lower than US/EU salaries', 'No recruitment fees', 'No benefits, insurance, or overhead', 'Predictable monthly costs'],
          speed: ['Hire in 2-3 weeks vs 2-3 months', 'Scale team up/down quickly', 'No long onboarding cycles'],
          quality: ['Pre-vetted senior engineers', 'Proven track records', 'Continuous training programs', 'Low attrition rates'],
          flexibility: ['No long-term contracts', 'Replace developers at no cost', 'Adjust team size monthly', 'Trial period available'],
};

const idealFor = [
          'Startups building MVPs',
          'Scale-ups expanding engineering teams',
          'Enterprises with ongoing development needs',
          'Companies with seasonal demands',
          'Businesses entering new markets',
];

const notIdealFor = [
          'One-time small projects (use contract hiring)',
          'Non-technical businesses with no product roadmap',
          'Companies expecting instant results (plan 2-3 months ramp-up)',
];

function DedicatedDevelopers() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              {/* Hero Section */}
                              <section className="pt-32 pb-20 relative overflow-hidden">
                                        <div className="absolute inset-0 hero-animated-bg" />
                                        <div className="absolute inset-0 grid-pattern opacity-20" />
                                        <div className="blur-circle-accent top-1/4 -left-40" />

                                        <div className="container-wide relative">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            animate="show"
                                                            className="max-w-3xl"
                                                  >
                                                            <motion.span variants={fadeUp} className="section-tag mb-6 inline-block">
                                                                      Hiring
                                                            </motion.span>
                                                            <motion.h1
                                                                      variants={fadeUp}
                                                                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                                                            >
                                                                      Dedicated Development Teams
                                                            </motion.h1>
                                                            <motion.p
                                                                      variants={fadeUp}
                                                                      className="text-xl text-gray-400 mb-8 leading-relaxed"
                                                            >
                                                                      Get full-time developers who work exclusively for you. Fully integrated
                                                                      with your team, processes, and tools — at 50% the cost.
                                                            </motion.p>
                                                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                                                      <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2 group">
                                                                                Schedule Consultation
                                                                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                                      </Link>
                                                                      <Link to="/hiring/contract-hiring" className="btn-secondary px-8 py-4">
                                                                                View Contract Hiring
                                                                      </Link>
                                                            </motion.div>
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* What is a Dedicated Team */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <div className="max-w-3xl mx-auto text-center">
                                                            <motion.h2
                                                                      initial={{ opacity: 0, y: 20 }}
                                                                      whileInView={{ opacity: 1, y: 0 }}
                                                                      viewport={{ once: true }}
                                                                      className="text-3xl font-bold text-white mb-6"
                                                            >
                                                                      What is a Dedicated Team?
                                                            </motion.h2>
                                                            <motion.p
                                                                      initial={{ opacity: 0, y: 20 }}
                                                                      whileInView={{ opacity: 1, y: 0 }}
                                                                      viewport={{ once: true }}
                                                                      transition={{ delay: 0.1 }}
                                                                      className="text-gray-400 mb-8"
                                                            >
                                                                      A dedicated team is a group of full-time engineers who work exclusively on your project,
                                                                      integrate with your in-house team, follow your processes & methodologies, use your tools
                                                                      & communication channels, and report directly to you.
                                                            </motion.p>
                                                            <motion.p
                                                                      initial={{ opacity: 0, y: 20 }}
                                                                      whileInView={{ opacity: 1, y: 0 }}
                                                                      viewport={{ once: true }}
                                                                      transition={{ delay: 0.2 }}
                                                                      className="text-gray-500 text-sm"
                                                            >
                                                                      Unlike freelancers or staff augmentation, a dedicated team becomes an extension of your organization.
                                                            </motion.p>
                                                  </div>
                                        </div>
                              </section>

                              {/* Team Composition & Timeline */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <div className="grid lg:grid-cols-2 gap-12">
                                                            {/* Team Composition */}
                                                            <div>
                                                                      <SectionHeading
                                                                                tag="Build Your Team"
                                                                                title="Team Composition"
                                                                                align="left"
                                                                                className="mb-8"
                                                                      />
                                                                      <motion.div
                                                                                variants={staggerContainer}
                                                                                initial="hidden"
                                                                                whileInView="show"
                                                                                viewport={{ once: true }}
                                                                                className="space-y-3 mb-8"
                                                                      >
                                                                                {teamRoles.map((role, index) => (
                                                                                          <motion.div
                                                                                                    key={role}
                                                                                                    variants={fadeUp}
                                                                                                    custom={index}
                                                                                                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-700/30"
                                                                                          >
                                                                                                    <FiCheck className="text-primary flex-shrink-0" />
                                                                                                    <span className="text-gray-300 text-sm">{role}</span>
                                                                                          </motion.div>
                                                                                ))}
                                                                      </motion.div>
                                                                      <div className="glass-card p-4 text-center">
                                                                                <div className="grid grid-cols-3 gap-4 text-sm">
                                                                                          <div>
                                                                                                    <div className="text-primary font-bold">Min: 2</div>
                                                                                                    <div className="text-gray-500">developers</div>
                                                                                          </div>
                                                                                          <div>
                                                                                                    <div className="text-primary font-bold">Typical: 4-8</div>
                                                                                                    <div className="text-gray-500">members</div>
                                                                                          </div>
                                                                                          <div>
                                                                                                    <div className="text-primary font-bold">Enterprise: 10-50+</div>
                                                                                                    <div className="text-gray-500">members</div>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>

                                                            {/* Timeline */}
                                                            <div>
                                                                      <SectionHeading
                                                                                tag="Timeline"
                                                                                title="How It Works"
                                                                                align="left"
                                                                                className="mb-8"
                                                                      />
                                                                      <motion.div
                                                                                variants={staggerContainer}
                                                                                initial="hidden"
                                                                                whileInView="show"
                                                                                viewport={{ once: true }}
                                                                                className="space-y-6"
                                                                      >
                                                                                {timeline.map((phase, index) => (
                                                                                          <motion.div
                                                                                                    key={phase.month}
                                                                                                    variants={fadeUp}
                                                                                                    custom={index}
                                                                                                    className="glass-card p-6"
                                                                                          >
                                                                                                    <span className="inline-block px-3 py-1 text-xs font-bold text-accent-cyan bg-accent-cyan/10 rounded-full mb-3">
                                                                                                              {phase.month}
                                                                                                    </span>
                                                                                                    <h3 className="text-lg font-semibold text-white mb-3">{phase.title}</h3>
                                                                                                    <ul className="space-y-2">
                                                                                                              {phase.items.map((item) => (
                                                                                                                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                                                                                                                                  <FiCheck className="text-accent-cyan flex-shrink-0 mt-0.5" />
                                                                                                                                  {item}
                                                                                                                        </li>
                                                                                                              ))}
                                                                                                    </ul>
                                                                                          </motion.div>
                                                                                ))}
                                                                      </motion.div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* Pricing */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Investment"
                                                            title="Monthly Rates"
                                                            description="Fixed monthly rate per developer, all-inclusive."
                                                            className="mb-12"
                                                  />

                                                  <div className="max-w-3xl mx-auto">
                                                            <div className="glass-card p-8">
                                                                      <div className="grid gap-4 mb-8">
                                                                                {pricing.map((item, index) => (
                                                                                          <div
                                                                                                    key={item.level}
                                                                                                    className={`flex justify-between items-center py-4 ${index < pricing.length - 1 ? 'border-b border-dark-600' : ''}`}
                                                                                          >
                                                                                                    <span className="text-gray-300 font-medium">{item.level}</span>
                                                                                                    <span className="text-primary font-bold text-lg">{item.rate}</span>
                                                                                          </div>
                                                                                ))}
                                                                      </div>

                                                                      <div className="border-t border-dark-600 pt-6">
                                                                                <h4 className="text-white font-semibold mb-4">Includes:</h4>
                                                                                <div className="flex flex-wrap gap-2">
                                                                                          {includes.map((item) => (
                                                                                                    <span key={item} className="px-3 py-1 text-xs text-gray-300 bg-dark-700 rounded-full flex items-center gap-1">
                                                                                                              <FiCheck className="text-green-500" />
                                                                                                              {item}
                                                                                                    </span>
                                                                                          ))}
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* Benefits */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Advantages"
                                                            title="Benefits Over In-House"
                                                            className="mb-12"
                                                  />

                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                                                  >
                                                            {Object.entries(benefits).map(([key, items], index) => {
                                                                      const icons = { cost: FiDollarSign, speed: FiClock, quality: FiAward, flexibility: FiUsers };
                                                                      const titles = { cost: 'Cost Savings', speed: 'Speed', quality: 'Quality', flexibility: 'Flexibility' };
                                                                      const Icon = icons[key];
                                                                      return (
                                                                                <motion.div
                                                                                          key={key}
                                                                                          variants={fadeUp}
                                                                                          custom={index}
                                                                                          className="glass-card p-6"
                                                                                >
                                                                                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                                                                                                    <Icon className="w-5 h-5" />
                                                                                          </div>
                                                                                          <h3 className="text-lg font-semibold text-white mb-4">{titles[key]}</h3>
                                                                                          <ul className="space-y-2">
                                                                                                    {items.map((item) => (
                                                                                                              <li key={item} className="text-sm text-gray-400">{item}</li>
                                                                                                    ))}
                                                                                          </ul>
                                                                                </motion.div>
                                                                      );
                                                            })}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Ideal For / Not Ideal For */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <div className="grid md:grid-cols-2 gap-8">
                                                            <div className="glass-card p-8 border-green-500/20">
                                                                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                                                                <FiCheck className="text-green-500" />
                                                                                Ideal For
                                                                      </h3>
                                                                      <ul className="space-y-3">
                                                                                {idealFor.map((item) => (
                                                                                          <li key={item} className="flex items-start gap-3 text-gray-300">
                                                                                                    <FiCheck className="text-green-500 flex-shrink-0 mt-1" />
                                                                                                    {item}
                                                                                          </li>
                                                                                ))}
                                                                      </ul>
                                                            </div>

                                                            <div className="glass-card p-8 border-red-500/20">
                                                                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                                                                <FiX className="text-red-500" />
                                                                                Not Ideal For
                                                                      </h3>
                                                                      <ul className="space-y-3">
                                                                                {notIdealFor.map((item) => (
                                                                                          <li key={item} className="flex items-start gap-3 text-gray-300">
                                                                                                    <FiX className="text-red-500 flex-shrink-0 mt-1" />
                                                                                                    {item}
                                                                                          </li>
                                                                                ))}
                                                                      </ul>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* CTA */}
                              <CTA
                                        headline="Build Your Dream Team Today"
                                        description="Schedule a call to discuss your requirements. We'll create a custom team proposal within 48 hours."
                                        primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
                              />
                    </motion.div>
          );
}

export default DedicatedDevelopers;
