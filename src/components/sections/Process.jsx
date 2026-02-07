import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import { PROCESS_STEPS } from '../../utils/constants';

/**
 * Process Section - 4 Step Process
 */
function Process() {
          const containerRef = useRef(null);
          const { scrollYProgress } = useScroll({
                    target: containerRef,
                    offset: ['start end', 'end start'],
          });

          const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

          return (
                    <section ref={containerRef} className="section-padding relative overflow-hidden bg-dark-800/30">
                              {/* Background decorations */}
                              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
                              <div className="blur-circle-primary -left-60 top-1/2 -translate-y-1/2 opacity-10" />

                              <div className="container-wide relative">
                                        <SectionHeading
                                                  tag="How It Works"
                                                  title="Simple 4-Step Process"
                                                  description="From first contact to successful delivery, here's how we work together."
                                                  className="mb-16"
                                        />

                                        {/* Timeline container */}
                                        <div className="relative max-w-4xl mx-auto">
                                                  {/* Animated timeline line */}
                                                  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-dark-600 md:-translate-x-1/2">
                                                            <motion.div
                                                                      className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent-cyan origin-top"
                                                                      style={{ height: lineHeight }}
                                                            />
                                                  </div>

                                                  {/* Steps */}
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true, margin: '-100px' }}
                                                            className="space-y-12 md:space-y-24"
                                                  >
                                                            {PROCESS_STEPS.map((step, index) => (
                                                                      <motion.div
                                                                                key={step.number}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className={`relative flex items-start gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                                                                          }`}
                                                                      >
                                                                                {/* Step number circle */}
                                                                                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 z-10">
                                                                                          <motion.div
                                                                                                    whileInView={{ scale: [0.8, 1.1, 1] }}
                                                                                                    viewport={{ once: true }}
                                                                                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                                                                                    className="w-16 h-16 flex items-center justify-center rounded-full bg-dark-900 border-2 border-primary text-primary font-display font-bold text-lg"
                                                                                          >
                                                                                                    {step.number}
                                                                                          </motion.div>
                                                                                </div>

                                                                                {/* Content card */}
                                                                                <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                                                                                          <motion.div
                                                                                                    whileHover={{ y: -4 }}
                                                                                                    className="glass-card p-6 inline-block w-full md:max-w-md"
                                                                                          >
                                                                                                    <h3 className="text-xl font-semibold text-white mb-2">
                                                                                                              {step.title}
                                                                                                    </h3>
                                                                                                    <p className="text-gray-400 text-sm leading-relaxed">
                                                                                                              {step.description}
                                                                                                    </p>
                                                                                          </motion.div>
                                                                                </div>

                                                                                {/* Spacer for alternating layout */}
                                                                                <div className="hidden md:block flex-1" />
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </div>
                    </section>
          );
}

export default Process;
