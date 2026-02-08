import { motion, useInView, useReducedMotion } from 'framer-motion';
import { staggerContainer, scaleIn } from '../../utils/animations';
import { STATS } from '../../utils/constants';
import { useEffect, useMemo, useRef, useState } from 'react';

function parseStatValue(value) {
          const match = String(value).match(/^(\d+)(.*)$/);
          if (!match) return { number: 0, suffix: '' };
          return { number: Number(match[1]), suffix: match[2] || '' };
}

function AnimatedStatValue({ value, duration = 1200 }) {
          const reduceMotion = useReducedMotion();
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, margin: '-50px' });
          const { number, suffix } = useMemo(() => parseStatValue(value), [value]);
          const [display, setDisplay] = useState(reduceMotion ? number : 0);

          useEffect(() => {
                    if (!inView || reduceMotion) {
                              if (reduceMotion) setDisplay(number);
                              return;
                    }

                    let start = null;
                    let rafId = null;

                    const tick = (time) => {
                              if (start === null) start = time;
                              const progress = Math.min((time - start) / duration, 1);
                              const current = Math.round(number * progress);
                              setDisplay(current);
                              if (progress < 1) {
                                        rafId = requestAnimationFrame(tick);
                              }
                    };

                    rafId = requestAnimationFrame(tick);

                    return () => {
                              if (rafId) cancelAnimationFrame(rafId);
                    };
          }, [inView, number, duration, reduceMotion]);

          return (
                    <span ref={ref}>
                              {display}
                              {suffix}
                    </span>
          );
}

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
                                                                                <AnimatedStatValue value={stat.value} />
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
