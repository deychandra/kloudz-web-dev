import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';

/**
 * Floating particles component
 */
function FloatingParticles({ count = 30, color = 'primary' }) {
          const colorClass = color === 'primary' ? 'bg-primary/30' :
                    color === 'purple' ? 'bg-accent-purple/30' :
                              'bg-accent-cyan/30';

          return (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              {[...Array(count)].map((_, i) => (
                                        <motion.div
                                                  key={i}
                                                  className={`absolute w-1 h-1 ${colorClass} rounded-full`}
                                                  style={{
                                                            left: `${Math.random() * 100}%`,
                                                            top: `${Math.random() * 100}%`,
                                                  }}
                                                  animate={{
                                                            y: [-20, 20, -20],
                                                            x: [-10, 10, -10],
                                                            opacity: [0.3, 0.8, 0.3],
                                                            scale: [1, 1.5, 1],
                                                  }}
                                                  transition={{
                                                            duration: 3 + Math.random() * 4,
                                                            repeat: Infinity,
                                                            delay: Math.random() * 2,
                                                            ease: "easeInOut",
                                                  }}
                                        />
                              ))}
                    </div>
          );
}

/**
 * Animated grid lines
 */
function AnimatedGrid({ horizontalLines = 8, verticalLines = 12 }) {
          return (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              {/* Horizontal lines */}
                              {[...Array(horizontalLines)].map((_, i) => (
                                        <motion.div
                                                  key={`h-${i}`}
                                                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                                                  style={{ top: `${(i + 1) * (100 / (horizontalLines + 1))}%` }}
                                                  initial={{ scaleX: 0, opacity: 0 }}
                                                  animate={{ scaleX: 1, opacity: 1 }}
                                                  transition={{ duration: 1.5, delay: i * 0.1 }}
                                        />
                              ))}
                              {/* Vertical lines */}
                              {[...Array(verticalLines)].map((_, i) => (
                                        <motion.div
                                                  key={`v-${i}`}
                                                  className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                                                  style={{ left: `${(i + 1) * (100 / (verticalLines + 1))}%` }}
                                                  initial={{ scaleY: 0, opacity: 0 }}
                                                  animate={{ scaleY: 1, opacity: 1 }}
                                                  transition={{ duration: 1.5, delay: i * 0.05 }}
                                        />
                              ))}
                    </div>
          );
}

/**
 * Glowing orbs with customizable colors
 */
function GlowingOrbs({ variant = 'default' }) {
          const orbs = {
                    default: [
                              { color: 'rgba(1,115,200,0.15)', size: 600, top: '-200px', left: '-100px', duration: 8 },
                              { color: 'rgba(139,92,246,0.1)', size: 500, top: '50%', right: '-150px', duration: 10 },
                              { color: 'rgba(6,182,212,0.1)', size: 400, bottom: '-100px', left: '30%', duration: 6 },
                    ],
                    purple: [
                              { color: 'rgba(139,92,246,0.15)', size: 600, top: '-200px', right: '-100px', duration: 8 },
                              { color: 'rgba(1,115,200,0.1)', size: 500, top: '50%', left: '-150px', duration: 10 },
                              { color: 'rgba(236,72,153,0.1)', size: 400, bottom: '-100px', right: '30%', duration: 6 },
                    ],
                    cyan: [
                              { color: 'rgba(6,182,212,0.15)', size: 600, top: '-200px', left: '20%', duration: 8 },
                              { color: 'rgba(1,115,200,0.1)', size: 500, bottom: '-100px', right: '-150px', duration: 10 },
                              { color: 'rgba(139,92,246,0.1)', size: 400, top: '30%', left: '-100px', duration: 6 },
                    ],
          };

          const orbConfig = orbs[variant] || orbs.default;

          return (
                    <>
                              {orbConfig.map((orb, i) => (
                                        <motion.div
                                                  key={i}
                                                  className="absolute rounded-full"
                                                  style={{
                                                            width: orb.size,
                                                            height: orb.size,
                                                            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                                                            top: orb.top,
                                                            left: orb.left,
                                                            right: orb.right,
                                                            bottom: orb.bottom,
                                                  }}
                                                  animate={{
                                                            scale: [1, 1.2, 1],
                                                            opacity: [0.5, 0.8, 0.5],
                                                  }}
                                                  transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
                                        />
                              ))}
                    </>
          );
}

/**
 * Light streaks decoration
 */
function LightStreaks() {
          return (
                    <>
                              <motion.div
                                        className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 2, delay: 0.5 }}
                              />
                              <motion.div
                                        className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-cyan/30 to-transparent"
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 2, delay: 0.8 }}
                              />
                    </>
          );
}

/**
 * Scroll indicator
 */
function ScrollIndicator() {
          return (
                    <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5 }}
                              className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                              <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2"
                              >
                                        <motion.div
                                                  animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                                                  transition={{ duration: 2, repeat: Infinity }}
                                                  className="w-1.5 h-1.5 bg-primary rounded-full"
                                        />
                              </motion.div>
                    </motion.div>
          );
}

/**
 * CinematicHero - Reusable cinematic hero section
 * 
 * @param {string} tag - Small tag text above the title
 * @param {string} title - Main title (can include JSX for gradient text)
 * @param {string|JSX} subtitle - Subtitle text or JSX element
 * @param {string} variant - Color variant: 'default', 'purple', 'cyan'
 * @param {boolean} showScrollIndicator - Whether to show the scroll indicator
 * @param {string} minHeight - Minimum height of the hero section
 */
function CinematicHero({
          tag,
          title,
          subtitle,
          variant = 'default',
          showScrollIndicator = true,
          minHeight = '70vh',
          children,
}) {
          const heroRef = useRef(null);
          const titleRef = useRef(null);

          const { scrollYProgress } = useScroll({
                    target: heroRef,
                    offset: ["start start", "end start"]
          });

          const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
          const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

          // GSAP title animation
          useEffect(() => {
                    if (titleRef.current) {
                              const words = titleRef.current.querySelectorAll('.word');
                              if (words.length > 0) {
                                        gsap.fromTo(words,
                                                  { opacity: 0, y: 80, rotateX: -90 },
                                                  {
                                                            opacity: 1,
                                                            y: 0,
                                                            rotateX: 0,
                                                            duration: 1,
                                                            stagger: 0.15,
                                                            ease: "back.out(1.7)",
                                                            delay: 0.3,
                                                  }
                                        );
                              }
                    }
          }, []);

          const tagColors = {
                    default: 'bg-primary/10 border-primary/20 text-primary',
                    purple: 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple',
                    cyan: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan',
          };

          const tagDotColors = {
                    default: 'bg-primary',
                    purple: 'bg-accent-purple',
                    cyan: 'bg-accent-cyan',
          };

          return (
                    <section ref={heroRef} className="relative flex items-center overflow-hidden" style={{ minHeight }}>
                              {/* Multi-layer background */}
                              <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

                              {/* Animated mesh gradient */}
                              <div
                                        className="absolute inset-0"
                                        style={{
                                                  background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(1,115,200,0.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139,92,246,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 40% 60% at 0% 80%, rgba(6,182,212,0.1) 0%, transparent 50%)
          `
                                        }}
                              />

                              {/* Animated elements */}
                              <AnimatedGrid />
                              <FloatingParticles count={30} />
                              <GlowingOrbs variant={variant} />
                              <LightStreaks />

                              {/* Content */}
                              <motion.div
                                        className="container-wide relative z-10 py-32"
                                        style={{ y, opacity }}
                              >
                                        <div className="max-w-4xl mx-auto text-center">
                                                  {/* Tag with glow */}
                                                  {tag && (
                                                            <motion.div
                                                                      initial={{ opacity: 0, y: 30 }}
                                                                      animate={{ opacity: 1, y: 0 }}
                                                                      transition={{ duration: 0.8 }}
                                                                      className="mb-8"
                                                            >
                                                                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium backdrop-blur-sm ${tagColors[variant]}`}>
                                                                                <span className={`w-2 h-2 rounded-full animate-pulse ${tagDotColors[variant]}`} />
                                                                                {tag}
                                                                      </span>
                                                            </motion.div>
                                                  )}

                                                  {/* Animated title */}
                                                  <h1
                                                            ref={titleRef}
                                                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-8 leading-tight perspective-1000"
                                                  >
                                                            {typeof title === 'string' ? (
                                                                      title.split(' ').map((word, i) => (
                                                                                <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
                                                                      ))
                                                            ) : (
                                                                      title
                                                            )}
                                                  </h1>

                                                  {/* Subtitle */}
                                                  {subtitle && (
                                                            <motion.div
                                                                      initial={{ opacity: 0, y: 20 }}
                                                                      animate={{ opacity: 1, y: 0 }}
                                                                      transition={{ duration: 0.8, delay: 0.6 }}
                                                                      className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                                                            >
                                                                      {subtitle}
                                                            </motion.div>
                                                  )}

                                                  {/* Additional content */}
                                                  {children}

                                                  {/* Scroll indicator */}
                                                  {showScrollIndicator && <ScrollIndicator />}
                                        </div>
                              </motion.div>

                              {/* Bottom gradient fade */}
                              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
                    </section>
          );
}

export default CinematicHero;
export { FloatingParticles, AnimatedGrid, GlowingOrbs, LightStreaks, ScrollIndicator };
