import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

/**
 * Section heading with tag and animated title
 */
export function SectionHeading({
          tag,
          title,
          description,
          align = 'center',
          className = '',
}) {
          const alignmentClasses = {
                    left: 'text-left',
                    center: 'text-center mx-auto',
                    right: 'text-right ml-auto',
          };

          return (
                    <motion.div
                              variants={fadeUp}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: true, margin: '-100px' }}
                              className={`max-w-3xl ${alignmentClasses[align]} ${className}`}
                    >
                              {tag && (
                                        <motion.span
                                                  initial={{ opacity: 0, y: 10 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  viewport={{ once: true }}
                                                  transition={{ duration: 0.5 }}
                                                  className="section-tag mb-4"
                                        >
                                                  {tag}
                                        </motion.span>
                              )}
                              {title && (
                                        <motion.h2
                                                  initial={{ opacity: 0, y: 20 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  viewport={{ once: true }}
                                                  transition={{ duration: 0.6, delay: 0.1 }}
                                                  className="text-display-sm md:text-display-md font-display font-bold text-white mb-4"
                                        >
                                                  {title}
                                        </motion.h2>
                              )}
                              {description && (
                                        <motion.p
                                                  initial={{ opacity: 0, y: 20 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  viewport={{ once: true }}
                                                  transition={{ duration: 0.6, delay: 0.2 }}
                                                  className="text-gray-400 text-lg"
                                        >
                                                  {description}
                                        </motion.p>
                              )}
                    </motion.div>
          );
}

export default SectionHeading;
