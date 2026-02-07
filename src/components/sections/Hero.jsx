import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { gsap } from 'gsap';
import { Button } from '../ui/Button';

/**
 * Animated floating cloud component
 */
function FloatingCloud({ className = '', delay = 0, size = 'md' }) {
          const sizes = {
                    sm: 'w-20 h-12',
                    md: 'w-32 h-20',
                    lg: 'w-48 h-28',
                    xl: 'w-64 h-36',
          };

          return (
                    <motion.div
                              className={`absolute ${sizes[size]} ${className}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 1, delay }}
                    >
                              <motion.svg
                                        viewBox="0 0 200 120"
                                        fill="none"
                                        className="w-full h-full"
                                        animate={{
                                                  y: [0, -15, 0],
                                                  x: [0, 5, 0],
                                        }}
                                        transition={{
                                                  duration: 6 + delay,
                                                  repeat: Infinity,
                                                  ease: 'easeInOut',
                                        }}
                              >
                                        <defs>
                                                  <linearGradient id={`cloudGradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                            <stop offset="0%" stopColor="rgba(1, 115, 200, 0.15)" />
                                                            <stop offset="50%" stopColor="rgba(1, 115, 200, 0.08)" />
                                                            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                                                  </linearGradient>
                                                  <filter id={`glow-${delay}`}>
                                                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                                            <feMerge>
                                                                      <feMergeNode in="coloredBlur" />
                                                                      <feMergeNode in="SourceGraphic" />
                                                            </feMerge>
                                                  </filter>
                                        </defs>
                                        <path
                                                  d="M160 80c22.091 0 40-17.909 40-40s-17.909-40-40-40c-2.446 0-4.842.22-7.167.636C146.628 17.247 127.942 8 107 8c-28.167 0-51.752 19.472-58.092 45.695C22.143 56.47 0 80.426 0 110c0 5.523 4.477 10 10 10h150c22.091 0 40-17.909 40-40 0-22.091-17.909-40-40-40z"
                                                  fill={`url(#cloudGradient-${delay})`}
                                                  filter={`url(#glow-${delay})`}
                                        />
                              </motion.svg>
                    </motion.div>
          );
}

/**
 * Animated particles for hero background
 */
function HeroParticles() {
          const particles = Array.from({ length: 20 }, (_, i) => ({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 4 + 1,
                    duration: Math.random() * 3 + 4,
                    delay: Math.random() * 2,
          }));

          return (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              {particles.map((particle) => (
                                        <motion.div
                                                  key={particle.id}
                                                  className="absolute w-1 h-1 bg-primary/30 rounded-full"
                                                  style={{
                                                            left: `${particle.x}%`,
                                                            top: `${particle.y}%`,
                                                            width: particle.size,
                                                            height: particle.size,
                                                  }}
                                                  animate={{
                                                            y: [0, -100, 0],
                                                            opacity: [0.3, 0.7, 0.3],
                                                  }}
                                                  transition={{
                                                            duration: particle.duration,
                                                            repeat: Infinity,
                                                            delay: particle.delay,
                                                            ease: 'easeInOut',
                                                  }}
                                        />
                              ))}
                    </div>
          );
}

/**
 * Cinematic Hero Section with animated headline and floating clouds
 */
function Hero() {
          const containerRef = useRef(null);
          const headlineRef = useRef(null);

          const { scrollYProgress } = useScroll({
                    target: containerRef,
                    offset: ['start start', 'end start'],
          });

          const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
          const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

          // GSAP animation for headline
          useEffect(() => {
                    if (headlineRef.current) {
                              const chars = headlineRef.current.querySelectorAll('.char');
                              gsap.fromTo(
                                        chars,
                                        { y: 100, opacity: 0 },
                                        {
                                                  y: 0,
                                                  opacity: 1,
                                                  duration: 0.8,
                                                  stagger: 0.03,
                                                  ease: 'power3.out',
                                                  delay: 0.3,
                                        }
                              );
                    }
          }, []);

          // Split text into characters for animation
          const headline = "We Build Products & Scale Teams";
          const words = headline.split(' ');

          return (
                    <section
                              ref={containerRef}
                              className="relative min-h-screen flex items-center justify-center overflow-hidden hero-animated-bg"
                    >
                              {/* Background elements */}
                              <div className="absolute inset-0 grid-pattern opacity-30" />

                              {/* Floating clouds */}
                              <FloatingCloud className="top-20 left-10 opacity-60" delay={0} size="lg" />
                              <FloatingCloud className="top-40 right-20 opacity-40" delay={0.5} size="xl" />
                              <FloatingCloud className="bottom-40 left-1/4 opacity-50" delay={1} size="md" />
                              <FloatingCloud className="top-1/3 right-1/3 opacity-30" delay={1.5} size="lg" />
                              <FloatingCloud className="bottom-20 right-10 opacity-50" delay={2} size="md" />

                              {/* Animated particles */}
                              <HeroParticles />

                              {/* Gradient orbs */}
                              <div className="blur-circle-primary top-1/4 -left-40" />
                              <div className="blur-circle-accent bottom-1/4 -right-40" />

                              {/* Main content */}
                              <motion.div
                                        style={{ y, opacity }}
                                        className="relative z-10 container-wide text-center pt-24 pb-20"
                              >
                                        {/* Pre-headline tag */}
                                        <motion.div
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.6, delay: 0.1 }}
                                                  className="mb-8"
                                        >
                                                  <span className="section-tag">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                            Trusted by 50+ Enterprise Clients
                                                  </span>
                                        </motion.div>

                                        {/* Main headline */}
                                        <h1
                                                  ref={headlineRef}
                                                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-display-xl font-display font-bold text-white mb-6 leading-tight"
                                        >
                                                  {words.map((word, wordIndex) => (
                                                            <span key={wordIndex} className="inline-block mr-[0.3em]">
                                                                      {word.split('').map((char, charIndex) => (
                                                                                <motion.span
                                                                                          key={`${wordIndex}-${charIndex}`}
                                                                                          className="char inline-block"
                                                                                          initial={{ y: 100, opacity: 0 }}
                                                                                          animate={{ y: 0, opacity: 1 }}
                                                                                          transition={{
                                                                                                    duration: 0.6,
                                                                                                    delay: 0.3 + (wordIndex * 0.1) + (charIndex * 0.02),
                                                                                                    ease: [0.25, 0.1, 0.25, 1],
                                                                                          }}
                                                                                >
                                                                                          {char === '&' ? (
                                                                                                    <span className="text-primary">&</span>
                                                                                          ) : char}
                                                                                </motion.span>
                                                                      ))}
                                                            </span>
                                                  ))}
                                        </h1>

                                        {/* Subheadline */}
                                        <motion.p
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.6, delay: 0.8 }}
                                                  className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                                        >
                                                  Transform your ideas into reality with world-class engineering talent
                                                  and cutting-edge technology solutions.
                                        </motion.p>

                                        {/* CTA Buttons */}
                                        <motion.div
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.6, delay: 1 }}
                                                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                                        >
                                                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                            <Link
                                                                      to="/contact"
                                                                      className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2 group"
                                                            >
                                                                      Start Your Project
                                                                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                            </Link>
                                                  </motion.div>
                                                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                            <Link
                                                                      to="/hiring/contract-hiring"
                                                                      className="btn-secondary px-8 py-4 text-base inline-flex items-center gap-2"
                                                            >
                                                                      Hire Developers
                                                            </Link>
                                                  </motion.div>
                                        </motion.div>

                                        {/* Stats preview */}
                                        <motion.div
                                                  initial={{ opacity: 0, y: 40 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.8, delay: 1.2 }}
                                                  className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                                        >
                                                  {[
                                                            { value: '15+', label: 'Countries' },
                                                            { value: '50+', label: 'Clients' },
                                                            { value: '10+', label: 'Years' },
                                                            { value: '200+', label: 'Engineers' },
                                                  ].map((stat, index) => (
                                                            <motion.div
                                                                      key={stat.label}
                                                                      initial={{ opacity: 0, y: 20 }}
                                                                      animate={{ opacity: 1, y: 0 }}
                                                                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                                                                      className="text-center"
                                                            >
                                                                      <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                                                                {stat.value}
                                                                      </div>
                                                                      <div className="text-sm text-gray-500">{stat.label}</div>
                                                            </motion.div>
                                                  ))}
                                        </motion.div>
                              </motion.div>

                              {/* Scroll indicator */}
                              <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.5 }}
                                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                              >
                                        <motion.div
                                                  animate={{ y: [0, 10, 0] }}
                                                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                                  className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center"
                                        >
                                                  <motion.div
                                                            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                                                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                                            className="w-1.5 h-3 bg-gray-500 rounded-full mt-2"
                                                  />
                                        </motion.div>
                              </motion.div>
                    </section>
          );
}

export default Hero;
