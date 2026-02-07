import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

/**
 * Animated card with hover effects
 */
export function Card({
          children,
          className = '',
          href,
          to,
          hover = true,
          glow = false,
          ...props
}) {
          const cardContent = (
                    <motion.div
                              className={`
        glass-card p-6 lg:p-8
        ${hover ? 'card-hover' : ''}
        ${glow ? 'glow-effect' : ''}
        ${className}
      `}
                              whileHover={hover ? { y: -8 } : undefined}
                              transition={{ duration: 0.3 }}
                              {...props}
                    >
                              {children}
                    </motion.div>
          );

          if (to) {
                    return <Link to={to}>{cardContent}</Link>;
          }

          if (href) {
                    return <a href={href}>{cardContent}</a>;
          }

          return cardContent;
}

/**
 * Service card with icon and description
 */
export function ServiceCard({
          icon: Icon,
          title,
          description,
          href,
          to,
          features = [],
          className = '',
          index = 0,
}) {
          return (
                    <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: '-50px' }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                              <Card to={to} href={href} className={`group h-full ${className}`} glow>
                                        {/* Icon */}
                                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                  {Icon && <Icon className="w-7 h-7" />}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                                                  {title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                  {description}
                                        </p>

                                        {/* Features list */}
                                        {features.length > 0 && (
                                                  <ul className="space-y-2 mb-6">
                                                            {features.map((feature, i) => (
                                                                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                                {feature}
                                                                      </li>
                                                            ))}
                                                  </ul>
                                        )}

                                        {/* Arrow indicator */}
                                        {(to || href) && (
                                                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                                                            <span>Learn more</span>
                                                            <FiArrowRight className="w-4 h-4" />
                                                  </div>
                                        )}
                              </Card>
                    </motion.div>
          );
}

/**
 * Feature card for Why Kloudz section
 */
export function FeatureCard({
          icon: Icon,
          title,
          description,
          index = 0,
          className = '',
}) {
          return (
                    <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: '-50px' }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              className={`group ${className}`}
                    >
                              <div className="glass-card p-6 h-full transition-all duration-300 hover:border-primary/30">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                                  {Icon && <Icon className="w-6 h-6" />}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
                              </div>
                    </motion.div>
          );
}

/**
 * Stat card for trust indicators
 */
export function StatCard({ value, label, description, index = 0 }) {
          return (
                    <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, margin: '-50px' }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="text-center p-6"
                    >
                              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                                        {value}
                              </div>
                              <div className="text-lg font-semibold text-white mb-1">{label}</div>
                              {description && (
                                        <div className="text-sm text-gray-500">{description}</div>
                              )}
                    </motion.div>
          );
}

/**
 * Case study card
 */
export function CaseStudyCard({
          title,
          industry,
          description,
          technologies = [],
          results = [],
          image,
          to,
          index = 0,
          className = '',
}) {
          return (
                    <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: '-50px' }}
                              transition={{ duration: 0.6, delay: index * 0.15 }}
                              className={className}
                    >
                              <Link to={to || '#'} className="block group">
                                        <div className="glass-card overflow-hidden h-full">
                                                  {/* Image placeholder */}
                                                  {image && (
                                                            <div className="relative h-48 overflow-hidden">
                                                                      <img
                                                                                src={image}
                                                                                alt={title}
                                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                                      />
                                                                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                                                            </div>
                                                  )}

                                                  <div className="p-6">
                                                            {/* Industry tag */}
                                                            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                                                                      {industry}
                                                            </span>

                                                            {/* Title */}
                                                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                                                                      {title}
                                                            </h3>

                                                            {/* Description */}
                                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                                      {description}
                                                            </p>

                                                            {/* Technologies */}
                                                            {technologies.length > 0 && (
                                                                      <div className="flex flex-wrap gap-2 mb-4">
                                                                                {technologies.slice(0, 4).map((tech, i) => (
                                                                                          <span
                                                                                                    key={i}
                                                                                                    className="px-2 py-1 text-xs text-gray-400 bg-dark-700 rounded"
                                                                                          >
                                                                                                    {tech}
                                                                                          </span>
                                                                                ))}
                                                                      </div>
                                                            )}

                                                            {/* View case study link */}
                                                            <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                                                                      <span>View case study</span>
                                                                      <FiArrowRight className="w-4 h-4" />
                                                            </div>
                                                  </div>
                                        </div>
                              </Link>
                    </motion.div>
          );
}

export default Card;
