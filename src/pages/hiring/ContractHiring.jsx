import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiCalendar, FiUsers, FiFileText, FiShield, FiDollarSign } from 'react-icons/fi';
import { pageTransition, staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeading from '../../components/ui/SectionHeading';
import CTA from '../../components/sections/CTA';

const processSteps = [
          {
                    day: 'Day 1',
                    title: 'Tell Us Your Needs',
                    items: ['Required skills & experience', 'Project duration', 'Budget range', 'Start date'],
          },
          {
                    day: 'Day 3-5',
                    title: 'Review Candidates',
                    items: ['Receive 3-5 pre-screened profiles', 'Review resumes & portfolios', 'Technical assessment results', 'English proficiency scores'],
          },
          {
                    day: 'Day 7-10',
                    title: 'Interview & Select',
                    items: ['Schedule video interviews', 'Technical interviews (we can help)', 'Reference checks', 'Make your selection'],
          },
          {
                    day: 'Day 14',
                    title: 'Onboard & Start',
                    items: ['Contract signing', 'NDA & IP agreements', 'Tool & access setup', 'Project kickoff'],
          },
];

const hiringModels = [
          {
                    title: 'Staff Augmentation',
                    duration: '1-6 months',
                    commitment: 'Flexible, extendable',
                    bestFor: 'Short-term project needs, skill gaps',
                    billing: 'Monthly, weekly, or hourly',
          },
          {
                    title: 'Dedicated Developers',
                    duration: '6+ months',
                    commitment: 'Full-time allocation',
                    bestFor: 'Long-term product development',
                    billing: 'Monthly retainer',
          },
          {
                    title: 'Build-Operate-Transfer',
                    duration: '12-24 months',
                    commitment: 'Team building → handover',
                    bestFor: 'Setting up offshore center',
                    billing: 'Monthly + transition fee',
          },
];

const roles = [
          'Full Stack Developers (React, Node.js, Python)',
          'Frontend Engineers (React, Vue, Angular)',
          'Backend Engineers (Node, Python, Java, Go)',
          'Mobile Developers (React Native, Flutter, iOS, Android)',
          'DevOps Engineers (AWS, Kubernetes, Terraform)',
          'QA Engineers (Manual & Automation)',
          'UI/UX Designers',
          'Product Managers',
          'Data Engineers & Scientists',
];

const pricing = [
          { level: 'Junior (1-3 years)', rate: '$20-30/hour' },
          { level: 'Mid-Level (3-6 years)', rate: '$30-45/hour' },
          { level: 'Senior (6-10 years)', rate: '$45-65/hour' },
          { level: 'Lead/Architect (10+ years)', rate: '$65-85/hour' },
];

const benefits = [
          '2-week hiring timeline (vs 2-3 months in-house)',
          'Pre-vetted talent (top 5% of applicants)',
          'Replace developers at no cost',
          'Flexible contracts (no long-term commitment)',
          '4-6 hour timezone overlap with US/EU',
          'English-proficient professionals',
          'Full transparency & regular reporting',
];

function ContractHiring() {
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
                                        <div className="blur-circle-primary top-1/4 -right-40" />

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
                                                                      Contract Hiring - Flexible IT Staffing
                                                            </motion.h1>
                                                            <motion.p
                                                                      variants={fadeUp}
                                                                      className="text-xl text-gray-400 mb-8 leading-relaxed"
                                                            >
                                                                      Scale your team with pre-vetted engineers on flexible contracts.
                                                                      Hire in 2 weeks, pay 50% less than US/EU rates, replace anytime.
                                                            </motion.p>
                                                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                                                      <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2 group">
                                                                                Request Candidates
                                                                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                                      </Link>
                                                                      <Link to="/hiring/dedicated-developers" className="btn-secondary px-8 py-4">
                                                                                View Dedicated Teams
                                                                      </Link>
                                                            </motion.div>
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Process Timeline */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Process"
                                                            title="How It Works"
                                                            description="From first contact to onboarding in just 2 weeks."
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
                                                                                key={step.title}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className="glass-card p-6 relative"
                                                                      >
                                                                                <span className="inline-block px-3 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full mb-4">
                                                                                          {step.day}
                                                                                </span>
                                                                                <h3 className="text-lg font-semibold text-white mb-4">{step.title}</h3>
                                                                                <ul className="space-y-2">
                                                                                          {step.items.map((item) => (
                                                                                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                                                                                                              <FiCheck className="text-primary flex-shrink-0 mt-0.5" />
                                                                                                              {item}
                                                                                                    </li>
                                                                                          ))}
                                                                                </ul>
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Hiring Models */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Flexibility"
                                                            title="Hiring Models"
                                                            description="Choose the engagement model that fits your needs."
                                                            className="mb-16"
                                                  />

                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-3 gap-6"
                                                  >
                                                            {hiringModels.map((model, index) => (
                                                                      <motion.div
                                                                                key={model.title}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className="glass-card p-8 hover:border-primary/30 transition-colors"
                                                                      >
                                                                                <h3 className="text-xl font-semibold text-white mb-6">{model.title}</h3>
                                                                                <div className="space-y-4 text-sm">
                                                                                          <div className="flex justify-between border-b border-dark-600 pb-3">
                                                                                                    <span className="text-gray-500">Duration:</span>
                                                                                                    <span className="text-gray-300">{model.duration}</span>
                                                                                          </div>
                                                                                          <div className="flex justify-between border-b border-dark-600 pb-3">
                                                                                                    <span className="text-gray-500">Commitment:</span>
                                                                                                    <span className="text-gray-300">{model.commitment}</span>
                                                                                          </div>
                                                                                          <div className="flex justify-between border-b border-dark-600 pb-3">
                                                                                                    <span className="text-gray-500">Best for:</span>
                                                                                                    <span className="text-gray-300 text-right max-w-[150px]">{model.bestFor}</span>
                                                                                          </div>
                                                                                          <div className="flex justify-between">
                                                                                                    <span className="text-gray-500">Billing:</span>
                                                                                                    <span className="text-gray-300">{model.billing}</span>
                                                                                          </div>
                                                                                </div>
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Available Roles & Pricing */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <div className="grid lg:grid-cols-2 gap-12">
                                                            {/* Roles */}
                                                            <div>
                                                                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                                                <FiUsers className="text-primary" />
                                                                                Available Roles
                                                                      </h3>
                                                                      <motion.div
                                                                                variants={staggerContainer}
                                                                                initial="hidden"
                                                                                whileInView="show"
                                                                                viewport={{ once: true }}
                                                                                className="space-y-3"
                                                                      >
                                                                                {roles.map((role, index) => (
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
                                                            </div>

                                                            {/* Pricing */}
                                                            <div>
                                                                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                                                                <FiDollarSign className="text-primary" />
                                                                                Hourly Rates
                                                                      </h3>
                                                                      <div className="glass-card p-6 mb-6">
                                                                                {pricing.map((item, index) => (
                                                                                          <div
                                                                                                    key={item.level}
                                                                                                    className={`flex justify-between py-4 ${index < pricing.length - 1 ? 'border-b border-dark-600' : ''}`}
                                                                                          >
                                                                                                    <span className="text-gray-300">{item.level}</span>
                                                                                                    <span className="text-primary font-semibold">{item.rate}</span>
                                                                                          </div>
                                                                                ))}
                                                                      </div>
                                                                      <p className="text-sm text-gray-500 flex items-center gap-2">
                                                                                <FiShield className="text-green-500" />
                                                                                40-60% savings vs US/EU equivalent
                                                                      </p>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* Benefits */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Why Us"
                                                            title="Benefits"
                                                            description="Why companies choose Kloudz for contract hiring."
                                                            className="mb-12"
                                                  />

                                                  <motion.div
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            viewport={{ once: true }}
                                                            className="flex flex-wrap justify-center gap-3"
                                                  >
                                                            {benefits.map((benefit, index) => (
                                                                      <motion.span
                                                                                key={benefit}
                                                                                initial={{ opacity: 0, y: 10 }}
                                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                                viewport={{ once: true }}
                                                                                transition={{ delay: index * 0.05 }}
                                                                                className="px-4 py-2 text-sm text-gray-300 bg-dark-700/50 rounded-lg flex items-center gap-2"
                                                                      >
                                                                                <FiCheck className="text-green-500 flex-shrink-0" />
                                                                                {benefit}
                                                                      </motion.span>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* CTA */}
                              <CTA
                                        headline="Hire Top Developers in 2 Weeks"
                                        description="Tell us your requirements and get matched with pre-vetted candidates."
                                        primaryCTA={{ text: "Request Candidates", href: "/contact" }}
                              />
                    </motion.div>
          );
}

export default ContractHiring;
