import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { forwardRef, useRef, useState } from 'react';

/**
 * Primary button with hover effects
 */
export const Button = forwardRef(function Button(
          {
                    children,
                    variant = 'primary',
                    size = 'default',
                    href,
                    to,
                    className = '',
                    magnetic = false,
                    ...props
          },
          ref
) {
          const buttonRef = useRef(null);
          const [position, setPosition] = useState({ x: 0, y: 0 });

          // Magnetic effect handler
          const handleMouseMove = (e) => {
                    if (!magnetic || !buttonRef.current) return;

                    const rect = buttonRef.current.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;

                    const distanceX = (e.clientX - centerX) * 0.3;
                    const distanceY = (e.clientY - centerY) * 0.3;

                    setPosition({ x: distanceX, y: distanceY });
          };

          const handleMouseLeave = () => {
                    setPosition({ x: 0, y: 0 });
          };

          const variants = {
                    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-glow',
                    secondary: 'bg-transparent border border-dark-500 text-white hover:border-primary hover:bg-primary/10',
                    ghost: 'bg-transparent text-gray-300 hover:text-white',
                    outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
          };

          const sizes = {
                    sm: 'px-4 py-2 text-sm',
                    default: 'px-6 py-3 text-sm',
                    lg: 'px-8 py-4 text-base',
                    xl: 'px-10 py-5 text-lg',
          };

          const baseClasses = `
    relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg
    overflow-hidden transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]} ${className}
  `;

          const MotionComponent = motion.button;

          const buttonContent = (
                    <MotionComponent
                              ref={buttonRef || ref}
                              className={baseClasses}
                              onMouseMove={handleMouseMove}
                              onMouseLeave={handleMouseLeave}
                              animate={{ x: position.x, y: position.y }}
                              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              {...props}
                    >
                              {/* Shine effect */}
                              <span className="absolute inset-0 overflow-hidden rounded-lg">
                                        <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent hover:translate-x-[100%] transition-transform duration-700" />
                              </span>
                              <span className="relative z-10 flex items-center gap-2">{children}</span>
                    </MotionComponent>
          );

          // Handle link types
          if (to) {
                    return (
                              <Link to={to} className="inline-block">
                                        {buttonContent}
                              </Link>
                    );
          }

          if (href) {
                    return (
                              <a href={href} className="inline-block">
                                        {buttonContent}
                              </a>
                    );
          }

          return buttonContent;
});

/**
 * Icon button variant
 */
export function IconButton({
          children,
          className = '',
          variant = 'ghost',
          ...props
}) {
          const variants = {
                    primary: 'bg-primary text-white hover:bg-primary-dark',
                    ghost: 'bg-dark-700/50 text-gray-400 hover:bg-dark-600 hover:text-white',
                    outline: 'border border-dark-600 text-gray-400 hover:border-primary hover:text-primary',
          };

          return (
                    <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className={`
        w-10 h-10 flex items-center justify-center rounded-lg
        transition-all duration-300
        ${variants[variant]} ${className}
      `}
                              {...props}
                    >
                              {children}
                    </motion.button>
          );
}

/**
 * Magnetic button effect (for CTAs)
 */
export function MagneticButton({ children, className = '', ...props }) {
          return (
                    <Button magnetic variant="primary" className={className} {...props}>
                              {children}
                    </Button>
          );
}

export default Button;
