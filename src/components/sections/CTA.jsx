import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { fadeUp } from '../../utils/animations';

/**
 * CTA Section - Call to Action
 */
function CTA({
          headline = "Ready to Build Something Great?",
          description = "Whether you need to build a product or scale your team, we're here to help you succeed.",
          primaryCTA = { text: "Let's Talk", href: "/contact" },
          secondaryCTA = null,
          variant = 'default',
}) {
          return (
                    <section className="section-padding relative overflow-hidden">
                              {/* Background */}
                              <div className="absolute inset-0">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark-900 to-accent-purple/10" />
                                        <div className="absolute inset-0 grid-pattern opacity-20" />
                              </div>

                              {/* Glow effects */}
                              <div className="blur-circle-primary -left-40 top-1/2 -translate-y-1/2" />
                              <div className="blur-circle-accent -right-40 top-1/2 -translate-y-1/2" />

                              <div className="container-custom relative">
                                        <motion.div
                                                  variants={fadeUp}
                                                  initial="hidden"
                                                  whileInView="show"
                                                  viewport={{ once: true, margin: '-100px' }}
                                                  className="max-w-3xl mx-auto text-center"
                                        >
                                                  {/* Headline */}
                                                  <motion.h2
                                                            initial={{ opacity: 0, y: 30 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.6 }}
                                                            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight"
                                                  >
                                                            {headline}
                                                  </motion.h2>

                                                  {/* Description */}
                                                  <motion.p
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.6, delay: 0.1 }}
                                                            className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
                                                  >
                                                            {description}
                                                  </motion.p>

                                                  {/* CTA Buttons */}
                                                  <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.6, delay: 0.2 }}
                                                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                                                  >
                                                            <motion.div
                                                                      whileHover={{ scale: 1.02 }}
                                                                      whileTap={{ scale: 0.98 }}
                                                            >
                                                                      <Link
                                                                                to={primaryCTA.href}
                                                                                className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2 group"
                                                                      >
                                                                                {primaryCTA.text}
                                                                                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                                      </Link>
                                                            </motion.div>

                                                            {secondaryCTA && (
                                                                      <motion.div
                                                                                whileHover={{ scale: 1.02 }}
                                                                                whileTap={{ scale: 0.98 }}
                                                                      >
                                                                                <Link
                                                                                          to={secondaryCTA.href}
                                                                                          className="btn-secondary px-8 py-4 text-base"
                                                                                >
                                                                                          {secondaryCTA.text}
                                                                                </Link>
                                                                      </motion.div>
                                                            )}
                                                  </motion.div>
                                        </motion.div>
                              </div>
                    </section>
          );
}

export default CTA;
