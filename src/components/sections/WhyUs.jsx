import { motion } from 'framer-motion';
import { FiZap, FiShield, FiTrendingUp, FiLock, FiClock, FiHeart } from 'react-icons/fi';
import { staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import { WHY_KLOUDZ } from '../../utils/constants';

// Icon mapping
const iconMap = {
          zap: FiZap,
          'shield-check': FiShield,
          'trending-up': FiTrendingUp,
          lock: FiLock,
          clock: FiClock,
          handshake: FiHeart,
};

/**
 * Why Kloudz Section - Key Differentiators
 */
function WhyUs() {
          return (
                    <section className="section-padding relative overflow-hidden bg-dark-800/30">
                              {/* Background decorations */}
                              <div className="absolute inset-0">
                                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
                              </div>
                              <div className="blur-circle-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />

                              <div className="container-wide relative">
                                        <SectionHeading
                                                  tag="Why Kloudz"
                                                  title="Built Different"
                                                  description="What sets us apart from the rest? Here's why leading companies choose to work with us."
                                                  className="mb-16"
                                        />

                                        <motion.div
                                                  variants={staggerContainer}
                                                  initial="hidden"
                                                  whileInView="show"
                                                  viewport={{ once: true, margin: '-100px' }}
                                                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                        >
                                                  {WHY_KLOUDZ.map((item, index) => {
                                                            const Icon = iconMap[item.icon] || FiZap;
                                                            return (
                                                                      <motion.div
                                                                                key={item.title}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className="group"
                                                                      >
                                                                                <div className="h-full glass-card p-6 lg:p-8 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                                                                                          {/* Icon */}
                                                                                          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                                                                    <Icon className="w-7 h-7" />
                                                                                          </div>

                                                                                          {/* Title */}
                                                                                          <h3 className="text-xl font-semibold text-white mb-3">
                                                                                                    {item.title}
                                                                                          </h3>

                                                                                          {/* Description */}
                                                                                          <p className="text-gray-400 text-sm leading-relaxed">
                                                                                                    {item.description}
                                                                                          </p>
                                                                                </div>
                                                                      </motion.div>
                                                            );
                                                  })}
                                        </motion.div>
                              </div>
                    </section>
          );
}

export default WhyUs;
