import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { staggerContainer, fadeUp } from "../../utils/animations";
import SectionHeading from "../ui/SectionHeading";
import { PROCESS_STEPS } from "../../utils/constants";

// Step circle component with active state
function StepCircle({ number, index, isActive }) {
  return (
    <div className="relative">
      {/* Glow effect when active */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.4, opacity: [0, 0.25, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          }}
        />
      )}

      {/* Main circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: isActive ? 1 : 0.9,
          opacity: 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`relative w-16 h-16 flex items-center justify-center rounded-full font-display font-bold text-lg transition-all duration-500 ${
          isActive
            ? "bg-gradient-to-br from-primary to-accent-cyan text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]"
            : "bg-dark-900 border-2 border-dark-600 text-gray-500"
        }`}
      >
        {number}
      </motion.div>
    </div>
  );
}

/**
 * Process Section - 4 Step Process with Glowing Progress Bar
 */
function Process() {
  const containerRef = useRef(null);
  const [activeSteps, setActiveSteps] = useState([false, false, false, false]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Line progresses from 0% to 100% between scroll 0.15 and 0.85
  const lineHeight = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    ["0%", "100%"],
  );

  // Update active steps based on scroll progress
  // Thresholds are mapped to when line reaches each circle (4 steps = 0%, 33%, 66%, 100% of line)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate line progress (0 to 1 mapped to 0.15-0.85 scroll range)
    const lineProgress = Math.min(1, Math.max(0, (latest - 0.15) / 0.7));

    // Each step activates when line reaches it (at 0%, ~25%, ~50%, ~75% of line)
    const thresholds = [0.0, 0.25, 0.5, 0.75];
    const newActiveSteps = thresholds.map(
      (threshold) => lineProgress >= threshold,
    );

    // Only update if changed
    if (JSON.stringify(newActiveSteps) !== JSON.stringify(activeSteps)) {
      setActiveSteps(newActiveSteps);
    }
  });

  return (
    <section
      ref={containerRef}
      className="section-padding relative overflow-hidden bg-dark-800/30"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
      <div className="blur-circle-primary -left-60 top-1/2 -translate-y-1/2 opacity-10" />

      <div className="container-wide relative">
        <SectionHeading
          tag="How It Works"
          title="Simple 4-Step Process"
          description="From first contact to successful delivery, here's how we work together."
          className="mb-16"
        />

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated timeline line with glow */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-600/50 md:-translate-x-1/2">
            {/* Glowing progress bar */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 origin-top rounded-full"
              style={{
                height: lineHeight,
                background:
                  "linear-gradient(180deg, #6366f1, #8b5cf6, #06b6d4)",
                boxShadow:
                  "0 0 10px rgba(99, 102, 241, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)",
              }}
            />
            {/* Extra glow layer */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-6 origin-top rounded-full"
              style={{
                height: lineHeight,
                background:
                  "linear-gradient(180deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))",
                filter: "blur(8px)",
              }}
            />
          </div>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-24"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                custom={index}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number circle */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 z-10">
                  <StepCircle
                    number={step.number}
                    index={index}
                    isActive={activeSteps[index]}
                  />
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`glass-card p-6 inline-block w-full md:max-w-md transition-all duration-500 ${
                      activeSteps[index] ? "border-primary/30" : ""
                    }`}
                    style={{
                      boxShadow: activeSteps[index]
                        ? "0 0 20px rgba(99, 102, 241, 0.15)"
                        : "none",
                    }}
                  >
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                        activeSteps[index] ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Process;
