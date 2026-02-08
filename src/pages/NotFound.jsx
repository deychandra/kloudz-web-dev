import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowRight } from 'react-icons/fi';
import { pageTransition, fadeUp } from '../utils/animations';
import SEO from '../components/common/SEO';

function NotFound() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                              className="min-h-screen flex items-center justify-center relative overflow-hidden"
                    >
                              <SEO
                                        title="404 - Page Not Found"
                                        description="The page you're looking for doesn't exist. Return to Kloudz Computing homepage or contact our support team for assistance."
                                        noindex={true}
                              />

                              {/* Background */}
                              <div className="absolute inset-0 hero-animated-bg" />
                              <div className="absolute inset-0 grid-pattern opacity-20" />
                              <div className="blur-circle-primary top-1/4 left-1/4" />
                              <div className="blur-circle-accent bottom-1/4 right-1/4" />

                              {/* Content */}
                              <div className="relative text-center px-6">
                                        <motion.div
                                                  initial={{ opacity: 0, scale: 0.8 }}
                                                  animate={{ opacity: 1, scale: 1 }}
                                                  transition={{ duration: 0.6 }}
                                                  className="mb-8"
                                        >
                                                  <span className="text-[150px] md:text-[200px] font-display font-bold text-primary/20 leading-none">
                                                            404
                                                  </span>
                                        </motion.div>

                                        <motion.h1
                                                  variants={fadeUp}
                                                  initial="hidden"
                                                  animate="show"
                                                  className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
                                        >
                                                  Page Not Found
                                        </motion.h1>

                                        <motion.p
                                                  variants={fadeUp}
                                                  initial="hidden"
                                                  animate="show"
                                                  transition={{ delay: 0.1 }}
                                                  className="text-gray-400 mb-8 max-w-md mx-auto"
                                        >
                                                  The page you're looking for doesn't exist or has been moved.
                                                  Let's get you back on track.
                                        </motion.p>

                                        <motion.div
                                                  variants={fadeUp}
                                                  initial="hidden"
                                                  animate="show"
                                                  transition={{ delay: 0.2 }}
                                                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                                        >
                                                  <Link
                                                            to="/"
                                                            className="btn-primary px-8 py-4 inline-flex items-center gap-2 group"
                                                  >
                                                            <FiHome className="w-5 h-5" />
                                                            Go to Homepage
                                                  </Link>
                                                  <Link
                                                            to="/contact"
                                                            className="btn-secondary px-8 py-4 inline-flex items-center gap-2"
                                                  >
                                                            Contact Support
                                                            <FiArrowRight className="w-5 h-5" />
                                                  </Link>
                                        </motion.div>
                              </div>
                    </motion.div>
          );
}

export default NotFound;
