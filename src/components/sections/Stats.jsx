import { motion } from 'framer-motion';
import { staggerContainer, scaleIn } from '../../utils/animations';
import { STATS } from '../../utils/constants';

/**
 * Stats Section - Trust Indicators
 */
function Stats() {
          return (
                    <section className="py-16 relative overflow-hidden">
                              {/* Background */}
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />

                              <div className="container-wide relative">
                                        <motion.div
                                                  variants={staggerContainer}
                                                  initial="hidden"
                                                  whileInView="show"
                                                  viewport={{ once: true, margin: '-50px' }}
                                                  className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                                        >
                                                  {STATS.map((stat, index) => (
                                                            <motion.div
                                                                      key={stat.label}
                                                                      variants={scaleIn}
                                                                      custom={index}
                                                                      className="text-center group"
                                                            >
                                                                      <motion.div
                                                                                whileInView={{ scale: [0.5, 1] }}
                                                                                viewport={{ once: true }}
                                                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                                                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                                                                      >
                                                                                {stat.value}
                                                                      </motion.div>
                                                                      <div className="text-lg font-semibold text-white mb-1">
                                                                                {stat.label}
                                                                      </div>
                                                                      <div className="text-sm text-gray-500 hidden sm:block">
                                                                                {stat.description}
                                                                      </div>
                                                            </motion.div>
                                                  ))}
                                        </motion.div>
                              </div>
                    </section>
          );
}

export default Stats;
