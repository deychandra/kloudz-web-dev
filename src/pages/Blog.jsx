import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiCalendar, FiMail, FiCheck } from 'react-icons/fi';
import { gsap } from 'gsap';
import { pageTransition, staggerContainer, fadeUp } from '../utils/animations';
import SectionHeading from '../components/ui/SectionHeading';
import SEO from '../components/common/SEO';

const blogPosts = [
          {
                    id: 'scalable-saas-architecture',
                    title: 'How to Build a Scalable SaaS Architecture',
                    excerpt: 'Learn the key principles of building a multi-tenant SaaS platform that can scale to millions of users.',
                    category: 'Engineering',
                    date: 'Jan 15, 2026',
                    readTime: '8 min read',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
                    featured: true,
          },
          {
                    id: 'hiring-remote-developers',
                    title: 'The Ultimate Guide to Hiring Remote Developers',
                    excerpt: 'Everything you need to know about building and managing remote engineering teams effectively.',
                    category: 'Hiring',
                    date: 'Jan 10, 2026',
                    readTime: '12 min read',
                    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
                    featured: true,
          },
          {
                    id: 'ai-in-2026',
                    title: 'AI in 2026: What Every Business Leader Needs to Know',
                    excerpt: 'A practical guide to leveraging AI and automation for business growth and efficiency.',
                    category: 'AI & Automation',
                    date: 'Jan 5, 2026',
                    readTime: '6 min read',
                    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
                    featured: false,
          },
          {
                    id: 'devops-best-practices',
                    title: 'DevOps Best Practices for Startups',
                    excerpt: 'How to set up CI/CD, infrastructure as code, and monitoring from day one.',
                    category: 'DevOps',
                    date: 'Dec 28, 2025',
                    readTime: '10 min read',
                    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
                    featured: false,
          },
];

const categoryColors = {
          'Engineering': 'bg-primary/10 text-primary',
          'Hiring': 'bg-accent-purple/10 text-accent-purple',
          'AI & Automation': 'bg-accent-cyan/10 text-accent-cyan',
          'DevOps': 'bg-green-500/10 text-green-500',
};

// Floating particles component
function FloatingParticles() {
          return (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              {[...Array(30)].map((_, i) => (
                                        <motion.div
                                                  key={i}
                                                  className="absolute w-1 h-1 bg-primary/30 rounded-full"
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

// Animated grid lines
function AnimatedGrid() {
          return (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              {/* Horizontal lines */}
                              {[...Array(8)].map((_, i) => (
                                        <motion.div
                                                  key={`h-${i}`}
                                                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                                                  style={{ top: `${(i + 1) * 12}%` }}
                                                  initial={{ scaleX: 0, opacity: 0 }}
                                                  animate={{ scaleX: 1, opacity: 1 }}
                                                  transition={{ duration: 1.5, delay: i * 0.1 }}
                                        />
                              ))}
                              {/* Vertical lines */}
                              {[...Array(12)].map((_, i) => (
                                        <motion.div
                                                  key={`v-${i}`}
                                                  className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                                                  style={{ left: `${(i + 1) * 8}%` }}
                                                  initial={{ scaleY: 0, opacity: 0 }}
                                                  animate={{ scaleY: 1, opacity: 1 }}
                                                  transition={{ duration: 1.5, delay: i * 0.05 }}
                                        />
                              ))}
                    </div>
          );
}

// Glowing orbs
function GlowingOrbs() {
          return (
                    <>
                              <motion.div
                                        className="absolute w-[600px] h-[600px] rounded-full"
                                        style={{
                                                  background: 'radial-gradient(circle, rgba(1,115,200,0.15) 0%, transparent 70%)',
                                                  top: '-200px',
                                                  left: '-100px',
                                        }}
                                        animate={{
                                                  scale: [1, 1.2, 1],
                                                  opacity: [0.5, 0.8, 0.5],
                                        }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                              />
                              <motion.div
                                        className="absolute w-[500px] h-[500px] rounded-full"
                                        style={{
                                                  background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
                                                  top: '50%',
                                                  right: '-150px',
                                        }}
                                        animate={{
                                                  scale: [1.2, 1, 1.2],
                                                  opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                              />
                              <motion.div
                                        className="absolute w-[400px] h-[400px] rounded-full"
                                        style={{
                                                  background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
                                                  bottom: '-100px',
                                                  left: '30%',
                                        }}
                                        animate={{
                                                  scale: [1, 1.3, 1],
                                                  opacity: [0.4, 0.7, 0.4],
                                        }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                              />
                    </>
          );
}

function Blog() {
          const [email, setEmail] = useState('');
          const [subscribed, setSubscribed] = useState(false);
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
          }, []);

          const handleSubscribe = (e) => {
                    e.preventDefault();
                    if (email) {
                              setSubscribed(true);
                              setEmail('');
                    }
          };

          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              <SEO
                                        title="Blog - Software Development & Engineering Insights"
                                        description="Read expert insights on software development, engineering management, AI automation, and hiring remote developers. Stay updated with the latest technology trends."
                                        keywords="software development blog, engineering insights, hiring developers, AI automation blog, DevOps best practices, technology blog"
                                        canonical="https://kloudz.com/blog"
                              />

                              {/* Cinematic Hero Section */}
                              <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
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
                                        <FloatingParticles />
                                        <GlowingOrbs />

                                        {/* Cinematic light streak */}
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

                                        {/* Content */}
                                        <motion.div
                                                  className="container-wide relative z-10 py-32"
                                                  style={{ y, opacity }}
                                        >
                                                  <div className="max-w-4xl mx-auto text-center">
                                                            {/* Tag with glow */}
                                                            <motion.div
                                                                      initial={{ opacity: 0, y: 30 }}
                                                                      animate={{ opacity: 1, y: 0 }}
                                                                      transition={{ duration: 0.8 }}
                                                                      className="mb-8"
                                                            >
                                                                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                                                                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                                                                Resources & Insights
                                                                      </span>
                                                            </motion.div>

                                                            {/* Animated title */}
                                                            <h1
                                                                      ref={titleRef}
                                                                      className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight perspective-1000"
                                                            >
                                                                      <span className="word inline-block">Blog</span>{' '}
                                                                      <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-cyan to-accent-purple">&</span>{' '}
                                                                      <span className="word inline-block">Insights</span>
                                                            </h1>

                                                            {/* Subtitle with typewriter effect look */}
                                                            <motion.p
                                                                      initial={{ opacity: 0, y: 20 }}
                                                                      animate={{ opacity: 1, y: 0 }}
                                                                      transition={{ duration: 0.8, delay: 0.6 }}
                                                                      className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                                                            >
                                                                      Thoughts on{' '}
                                                                      <span className="text-primary font-medium">software development</span>,{' '}
                                                                      <span className="text-accent-purple font-medium">engineering management</span>, and{' '}
                                                                      <span className="text-accent-cyan font-medium">building great teams</span>.
                                                            </motion.p>

                                                            {/* Scroll indicator */}
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
                                                  </div>
                                        </motion.div>

                                        {/* Bottom gradient fade */}
                                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
                              </section>

                              {/* Blog Posts Grid */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-2 gap-8"
                                                  >
                                                            {blogPosts.map((post, index) => (
                                                                      <motion.article
                                                                                key={post.id}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500"
                                                                      >
                                                                                {/* Image with actual photo */}
                                                                      <div className="h-56 relative overflow-hidden">
                                                                                {post.image ? (
                                                                                          <motion.img
                                                                                                    src={post.image}
                                                                                                    alt={post.title}
                                                                                                    className="absolute inset-0 w-full h-full object-cover"
                                                                                                    whileHover={{ scale: 1.1 }}
                                                                                                    transition={{ duration: 0.6 }}
                                                                                          />
                                                                                ) : (
                                                                                          <>
                                                                                                    <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />
                                                                                                    <motion.div
                                                                                                              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/10 to-accent-cyan/20"
                                                                                                              whileHover={{ scale: 1.1 }}
                                                                                                              transition={{ duration: 0.6 }}
                                                                                                    />
                                                                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                                                                              <motion.span
                                                                                                                        className="text-8xl font-display font-bold text-white/5"
                                                                                                                        whileHover={{ scale: 1.2, rotate: -5 }}
                                                                                                                        transition={{ duration: 0.3 }}
                                                                                                              >
                                                                                                                        {post.title.charAt(0)}
                                                                                                              </motion.span>
                                                                                                    </div>
                                                                                          </>
                                                                                )}
                                                                                {/* Category badge on image */}
                                                                                <div className="absolute top-4 left-4">
                                                                                          <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md ${categoryColors[post.category]}`}>
                                                                                                    {post.category}
                                                                                          </span>
                                                                                </div>
                                                                                {/* Overlay gradient */}
                                                                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                                                                      </div>

                                                                                {/* Content */}
                                                                                <div className="p-6">
                                                                                          {/* Meta */}
                                                                                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                                                                                                    <span className="flex items-center gap-1.5">
                                                                                                              <FiCalendar className="w-4 h-4" />
                                                                                                              {post.date}
                                                                                                    </span>
                                                                                                    <span className="flex items-center gap-1.5">
                                                                                                              <FiClock className="w-4 h-4" />
                                                                                                              {post.readTime}
                                                                                                    </span>
                                                                                          </div>

                                                                                          {/* Title & Excerpt */}
                                                                                          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                                                                                    {post.title}
                                                                                          </h2>
                                                                                          <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                                                                                    {post.excerpt}
                                                                                          </p>

                                                                                          {/* Read More */}
                                                                                          <Link
                                                                                                    to={`/blog/${post.id}`}
                                                                                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                                                                                          >
                                                                                                    Read More
                                                                                                    <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                                                                          </Link>
                                                                                </div>
                                                                      </motion.article>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Newsletter Section */}
                              <section className="section-padding relative overflow-hidden">
                                        {/* Background effects */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
                                        <motion.div
                                                  className="absolute inset-0"
                                                  style={{
                                                            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(1,115,200,0.1) 0%, transparent 50%)'
                                                  }}
                                                  animate={{ scale: [1, 1.1, 1] }}
                                                  transition={{ duration: 8, repeat: Infinity }}
                                        />

                                        <div className="container-wide relative">
                                                  <motion.div
                                                            variants={fadeUp}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="max-w-xl mx-auto text-center"
                                                  >
                                                            <motion.div
                                                                      className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent-purple/20 text-primary mx-auto mb-8 border border-primary/20"
                                                                      whileHover={{ scale: 1.1, rotate: 5 }}
                                                            >
                                                                      <FiMail className="w-10 h-10" />
                                                            </motion.div>
                                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                                                      Stay Updated
                                                            </h2>
                                                            <p className="text-gray-400 mb-8 text-lg">
                                                                      Get the latest insights on software development, engineering hiring, and technology trends delivered to your inbox.
                                                            </p>

                                                            {subscribed ? (
                                                                      <motion.div
                                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                                animate={{ opacity: 1, scale: 1 }}
                                                                                className="flex items-center justify-center gap-3 text-green-500 p-6 rounded-xl bg-green-500/10 border border-green-500/20"
                                                                      >
                                                                                <FiCheck className="w-6 h-6" />
                                                                                <span className="font-semibold text-lg">Thanks for subscribing!</span>
                                                                      </motion.div>
                                                            ) : (
                                                                      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                                                                                <input
                                                                                          type="email"
                                                                                          required
                                                                                          value={email}
                                                                                          onChange={(e) => setEmail(e.target.value)}
                                                                                          placeholder="Enter your email"
                                                                                          className="flex-1 px-5 py-4 rounded-xl bg-dark-700/50 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-sm"
                                                                                />
                                                                                <motion.button
                                                                                          type="submit"
                                                                                          whileHover={{ scale: 1.02 }}
                                                                                          whileTap={{ scale: 0.98 }}
                                                                                          className="btn-primary px-8 py-4 text-base font-semibold"
                                                                                >
                                                                                          Subscribe
                                                                                </motion.button>
                                                                      </form>
                                                            )}
                                                  </motion.div>
                                        </div>
                              </section>
                    </motion.div>
          );
}

export default Blog;
