import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * Animated text with character or word reveal
 */
export function AnimatedText({
          children,
          type = 'words', // 'chars' | 'words' | 'lines'
          className = '',
          delay = 0,
          staggerDelay = 0.03,
          duration = 0.5,
          once = true,
          ...props
}) {
          const text = typeof children === 'string' ? children : '';

          const elements = useMemo(() => {
                    if (type === 'chars') {
                              return text.split('').map((char, i) => ({
                                        content: char === ' ' ? '\u00A0' : char,
                                        key: `char-${i}`,
                              }));
                    }
                    if (type === 'words') {
                              return text.split(' ').map((word, i) => ({
                                        content: word,
                                        key: `word-${i}`,
                              }));
                    }
                    return [{ content: text, key: 'line-0' }];
          }, [text, type]);

          const containerVariants = {
                    hidden: { opacity: 1 },
                    visible: {
                              opacity: 1,
                              transition: {
                                        delayChildren: delay,
                                        staggerChildren: staggerDelay,
                              },
                    },
          };

          const itemVariants = {
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                        duration,
                                        ease: [0.25, 0.1, 0.25, 1],
                              },
                    },
          };

          return (
                    <motion.span
                              className={`inline-block ${className}`}
                              variants={containerVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once, margin: '-50px' }}
                              {...props}
                    >
                              {elements.map((element) => (
                                        <motion.span
                                                  key={element.key}
                                                  className="inline-block"
                                                  variants={itemVariants}
                                        >
                                                  {element.content}
                                                  {type === 'words' && '\u00A0'}
                                        </motion.span>
                              ))}
                    </motion.span>
          );
}

/**
 * Animated headline with reveal effect
 */
export function AnimatedHeadline({
          children,
          as: Component = 'h2',
          className = '',
          delay = 0,
          ...props
}) {
          return (
                    <Component className={`overflow-hidden ${className}`}>
                              <motion.span
                                        className="block"
                                        initial={{ y: '100%', opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true, margin: '-50px' }}
                                        transition={{
                                                  duration: 0.8,
                                                  delay,
                                                  ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                        {...props}
                              >
                                        {children}
                              </motion.span>
                    </Component>
          );
}

/**
 * Animated paragraph with fade up
 */
export function AnimatedParagraph({
          children,
          className = '',
          delay = 0.2,
          ...props
}) {
          return (
                    <motion.p
                              className={className}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: '-50px' }}
                              transition={{
                                        duration: 0.6,
                                        delay,
                                        ease: [0.25, 0.1, 0.25, 1],
                              }}
                              {...props}
                    >
                              {children}
                    </motion.p>
          );
}

/**
 * Counter animation for numbers
 */
export function AnimatedCounter({
          value,
          suffix = '',
          prefix = '',
          duration = 2,
          className = '',
}) {
          const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;

          return (
                    <motion.span
                              className={className}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                    >
                              {prefix}
                              <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                              >
                                        {value}
                              </motion.span>
                              {suffix}
                    </motion.span>
          );
}

export default AnimatedText;
