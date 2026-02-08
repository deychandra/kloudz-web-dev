import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TESTIMONIALS } from "../../utils/constants";
import SectionHeading from "../ui/SectionHeading";

// World map SVG pattern as background
const WorldMapPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.08]"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern
        id="dotPattern"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx="2"
          cy="2"
          r="1"
          fill="currentColor"
          className="text-primary-400"
        />
      </pattern>
    </defs>
    {/* Simplified world map dots pattern */}
    <ellipse cx="200" cy="250" rx="80" ry="120" fill="url(#dotPattern)" />
    <ellipse cx="350" cy="200" rx="120" ry="100" fill="url(#dotPattern)" />
    <ellipse cx="550" cy="220" rx="150" ry="130" fill="url(#dotPattern)" />
    <ellipse cx="750" cy="280" rx="100" ry="80" fill="url(#dotPattern)" />
    <ellipse cx="900" cy="250" rx="120" ry="100" fill="url(#dotPattern)" />
    <ellipse cx="1050" cy="300" rx="80" ry="60" fill="url(#dotPattern)" />
  </svg>
);

// Quote icon
const QuoteIcon = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex justify-center mb-8"
  >
    <svg
      width="60"
      height="48"
      viewBox="0 0 60 48"
      fill="none"
      className="text-primary/60"
    >
      <path
        d="M0 48V28.8C0 20.8 1.6 14.13 4.8 8.8C8.27 3.2 13.87 0 21.6 0L24 7.2C19.47 7.73 16 9.6 13.6 12.8C11.47 15.73 10.4 19.47 10.4 24H24V48H0ZM36 48V28.8C36 20.8 37.6 14.13 40.8 8.8C44.27 3.2 49.87 0 57.6 0L60 7.2C55.47 7.73 52 9.6 49.6 12.8C47.47 15.73 46.4 19.47 46.4 24H60V48H36Z"
        fill="currentColor"
      />
    </svg>
  </motion.div>
);

// Testimonial slide content
const TestimonialSlide = ({ testimonial, direction }) => {
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      key={testimonial.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      }}
      className="text-center px-4 md:px-16 lg:px-32"
    >
      {/* Quote text */}
      <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed italic mb-12 max-w-4xl mx-auto">
        "{testimonial.quote}"
      </p>

      {/* Company logo placeholder */}
      {testimonial.logo && (
        <div className="flex justify-center mb-6">
          <img
            src={testimonial.logo}
            alt={testimonial.company}
            className="h-10 object-contain opacity-60"
          />
        </div>
      )}

      {/* User info */}
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <motion.div
          className="relative mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent-cyan/50 rounded-full blur-sm opacity-60" />
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="relative w-16 h-16 rounded-full object-cover border-2 border-dark-600 bg-white"
          />
        </motion.div>

        {/* Name and title */}
        <h4 className="text-xl font-semibold text-white mb-1">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-400">
          {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
};

// Navigation arrow button
const NavButton = ({ direction, onClick, disabled }) => (
  <motion.button
    onClick={onClick}
    disabled={disabled}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`
                              w-12 h-12 rounded-full flex items-center justify-center
                              bg-dark-700/80 border border-dark-600/50
                              text-gray-400 hover:text-white hover:border-primary/50
                              transition-colors duration-300
                              disabled:opacity-50 disabled:cursor-not-allowed
                    `}
    aria-label={
      direction === "prev" ? "Previous testimonial" : "Next testimonial"
    }
  >
    {direction === "prev" ? (
      <FiChevronLeft className="w-6 h-6" />
    ) : (
      <FiChevronRight className="w-6 h-6" />
    )}
  </motion.button>
);

// Side avatar previews
const SideAvatar = ({ testimonial, position, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`absolute ${position} transform -translate-y-1/2 z-10 hidden lg:block`}
    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 0, x: position.includes("left") ? -50 : 50 }}
    animate={{ opacity: isActive ? 0.3 : 0.6, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`relative ${isActive ? "ring-2 ring-primary" : ""}`}>
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover opacity-60 hover:opacity-100 transition-opacity"
      />
    </div>
  </motion.button>
);

/**
 * Testimonials Section - Animated carousel with dark theme
 */
function Testimonials() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = TESTIMONIALS;
  const totalTestimonials = testimonials.length;

  const paginate = useCallback(
    (newDirection) => {
      setCurrentIndex(([prevIndex]) => {
        let newIndex = prevIndex + newDirection;
        if (newIndex < 0) newIndex = totalTestimonials - 1;
        if (newIndex >= totalTestimonials) newIndex = 0;
        return [newIndex, newDirection];
      });
    },
    [totalTestimonials],
  );

  const goToSlide = useCallback((index) => {
    setCurrentIndex(([prevIndex]) => {
      const dir = index > prevIndex ? 1 : -1;
      return [index, dir];
    });
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Get adjacent testimonials for side previews
  const prevIndex =
    currentIndex === 0 ? totalTestimonials - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === totalTestimonials - 1 ? 0 : currentIndex + 1;

  return (
    <section
      className="section-padding relative overflow-hidden bg-dark-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 via-dark-900 to-dark-800/50" />

        {/* World map pattern */}
        <WorldMapPattern />

        {/* Top and bottom borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
      </div>

      {/* Blur accents */}
      <div className="blur-circle-primary top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-5" />
      <div className="blur-circle-accent top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 opacity-5" />

      <div className="container-wide relative">
        {/* Section heading */}
        <SectionHeading
          tag="Testimonials"
          title="What's our user says about us"
          description="Hear from Our Users How Kloudz Computing Has Transformed Their Businesses and Exceeded Expectations."
          className="mb-16"
        />

        {/* Quote icon */}
        <QuoteIcon />

        {/* Carousel container */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          {/* Side avatars */}
          <SideAvatar
            testimonial={testimonials[prevIndex]}
            position="left-4 xl:left-8 top-1/2"
            isActive={false}
            onClick={() => paginate(-1)}
          />
          <SideAvatar
            testimonial={testimonials[nextIndex]}
            position="right-4 xl:right-8 top-1/2"
            isActive={false}
            onClick={() => paginate(1)}
          />

          {/* Testimonial content */}
          <AnimatePresence mode="wait" custom={direction}>
            <TestimonialSlide
              testimonial={testimonials[currentIndex]}
              direction={direction}
            />
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <NavButton direction="prev" onClick={() => paginate(-1)} />

          <div className="flex items-center gap-2 mx-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                                                                                          w-2 h-2 rounded-full transition-all duration-300
                                                                                          ${
                                                                                            index ===
                                                                                            currentIndex
                                                                                              ? "w-8 bg-primary"
                                                                                              : "bg-dark-600 hover:bg-dark-500"
                                                                                          }
                                                                                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <NavButton direction="next" onClick={() => paginate(1)} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
