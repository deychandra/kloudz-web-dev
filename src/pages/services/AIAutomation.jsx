import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCpu, FiMessageSquare, FiZap, FiDatabase, FiBarChart2, FiCheck } from 'react-icons/fi';
import { pageTransition, staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeading from '../../components/ui/SectionHeading';
import CTA from '../../components/sections/CTA';

const services = [
          {
                    icon: FiCpu,
                    title: 'Custom AI Solutions',
                    features: ['Natural Language Processing (NLP)', 'Computer vision & image recognition', 'Predictive analytics & forecasting', 'Recommendation engines'],
          },
          {
                    icon: FiZap,
                    title: 'Process Automation',
                    features: ['Robotic Process Automation (RPA)', 'Workflow automation', 'Document processing & OCR', 'Email & data entry automation'],
          },
          {
                    icon: FiMessageSquare,
                    title: 'Chatbots & Virtual Assistants',
                    features: ['Customer support chatbots', 'Internal knowledge assistants', 'Voice-enabled interfaces', 'Multi-language support'],
          },
          {
                    icon: FiDatabase,
                    title: 'AI Integration',
                    features: ['OpenAI GPT integration', 'Custom model fine-tuning', 'Vector databases & embeddings', 'LangChain & agent frameworks'],
          },
          {
                    icon: FiBarChart2,
                    title: 'Data Analytics & ML',
                    features: ['Predictive modeling', 'Anomaly detection', 'Customer segmentation', 'A/B testing frameworks'],
          },
];

const useCases = [
          { impact: '70%', description: 'ticket reduction with AI chatbots', area: 'Customer Support' },
          { impact: '95%', description: 'automation of manual data entry', area: 'Document Processing' },
          { impact: '30%', description: 'improvement in prediction accuracy', area: 'Sales Forecasting' },
          { impact: '10x', description: 'faster content creation', area: 'Content Generation' },
];

const technologies = {
          aiml: ['OpenAI GPT-4', 'Claude', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Hugging Face Transformers'],
          automation: ['LangChain', 'LlamaIndex', 'Zapier', 'Make', 'n8n', 'Apache Airflow', 'Selenium', 'Puppeteer'],
          vector: ['Pinecone', 'Weaviate', 'Chroma', 'Redis', 'Elasticsearch'],
};

function AIAutomation() {
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
                                                                      Services
                                                            </motion.span>
                                                            <motion.h1
                                                                      variants={fadeUp}
                                                                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                                                            >
                                                                      AI-Powered Solutions & Automation
                                                            </motion.h1>
                                                            <motion.p
                                                                      variants={fadeUp}
                                                                      className="text-xl text-gray-400 mb-8 leading-relaxed"
                                                            >
                                                                      Leverage the latest in AI and machine learning to automate workflows,
                                                                      extract insights, and build intelligent products.
                                                            </motion.p>
                                                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                                                      <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2 group">
                                                                                Explore AI Solutions
                                                                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                                      </Link>
                                                                      <Link to="/case-studies" className="btn-secondary px-8 py-4">
                                                                                View Use Cases
                                                                      </Link>
                                                            </motion.div>
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Use Cases Stats */}
                              <section className="py-16 bg-gradient-to-r from-accent-purple/5 via-accent-purple/10 to-accent-purple/5">
                                        <div className="container-wide">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid grid-cols-2 md:grid-cols-4 gap-8"
                                                  >
                                                            {useCases.map((useCase, index) => (
                                                                      <motion.div
                                                                                key={useCase.area}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className="text-center"
                                                                      >
                                                                                <div className="text-3xl md:text-4xl font-display font-bold text-accent-purple mb-2">
                                                                                          {useCase.impact}
                                                                                </div>
                                                                                <div className="text-sm text-gray-400 mb-1">{useCase.description}</div>
                                                                                <div className="text-xs text-gray-500">{useCase.area}</div>
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Services Grid */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="AI Services"
                                                            title="What We Build"
                                                            description="From custom AI models to end-to-end automation solutions."
                                                            className="mb-16"
                                                  />

                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                                  >
                                                            {services.map((service, index) => {
                                                                      const Icon = service.icon;
                                                                      return (
                                                                                <motion.div
                                                                                          key={service.title}
                                                                                          variants={fadeUp}
                                                                                          custom={index}
                                                                                          className="glass-card p-6 group hover:border-accent-purple/30 transition-all duration-300"
                                                                                >
                                                                                          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple mb-5 group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                                                                                                    <Icon className="w-6 h-6" />
                                                                                          </div>
                                                                                          <h3 className="text-lg font-semibold text-white mb-4">{service.title}</h3>
                                                                                          <ul className="space-y-2">
                                                                                                    {service.features.map((feature) => (
                                                                                                              <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                                                                                                                        <FiCheck className="text-accent-purple flex-shrink-0 mt-0.5" />
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

                              {/* Technology Stack */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Technology"
                                                            title="AI & Automation Stack"
                                                            description="We work with cutting-edge AI frameworks and tools."
                                                            className="mb-12"
                                                  />

                                                  <div className="space-y-10">
                                                            <div>
                                                                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                                                                                <span className="w-8 h-px bg-accent-purple" />
                                                                                AI/ML Frameworks
                                                                      </h3>
                                                                      <div className="flex flex-wrap gap-3">
                                                                                {technologies.aiml.map((tech, index) => (
                                                                                          <motion.span
                                                                                                    key={tech}
                                                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                                                    viewport={{ once: true }}
                                                                                                    transition={{ delay: index * 0.05 }}
                                                                                                    className="px-4 py-2 text-sm text-gray-300 bg-dark-700/50 rounded-lg"
                                                                                          >
                                                                                                    {tech}
                                                                                          </motion.span>
                                                                                ))}
                                                                      </div>
                                                            </div>

                                                            <div>
                                                                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                                                                                <span className="w-8 h-px bg-accent-purple" />
                                                                                Automation Tools
                                                                      </h3>
                                                                      <div className="flex flex-wrap gap-3">
                                                                                {technologies.automation.map((tech, index) => (
                                                                                          <motion.span
                                                                                                    key={tech}
                                                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                                                    viewport={{ once: true }}
                                                                                                    transition={{ delay: index * 0.03 }}
                                                                                                    className="px-4 py-2 text-sm text-gray-300 bg-dark-700/50 rounded-lg"
                                                                                          >
                                                                                                    {tech}
                                                                                          </motion.span>
                                                                                ))}
                                                                      </div>
                                                            </div>

                                                            <div>
                                                                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                                                                                <span className="w-8 h-px bg-accent-purple" />
                                                                                Vector Databases
                                                                      </h3>
                                                                      <div className="flex flex-wrap gap-3">
                                                                                {technologies.vector.map((tech, index) => (
                                                                                          <motion.span
                                                                                                    key={tech}
                                                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                                                    viewport={{ once: true }}
                                                                                                    transition={{ delay: index * 0.05 }}
                                                                                                    className="px-4 py-2 text-sm text-gray-300 bg-dark-700/50 rounded-lg"
                                                                                          >
                                                                                                    {tech}
                                                                                          </motion.span>
                                                                                ))}
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* CTA */}
                              <CTA
                                        headline="Unlock AI for Your Business"
                                        description="Discover how AI can transform your operations. Free consultation and POC available."
                                        primaryCTA={{ text: "Explore AI Solutions", href: "/contact" }}
                              />
                    </motion.div>
          );
}

export default AIAutomation;
