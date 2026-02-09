import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Kotlin from "../../assets/images/icon/kotlin.png";
import Github from "../../assets/images/icon/github.png";
import Swift from "../../assets/images/icon/swift.png";
import Php from "../../assets/images/icon/php.png";
import Cloud from "../../assets/images/icon/cloud.png";

import Azure from "../../assets/images/icon/azure.png";
import Next from "../../assets/images/icon/next.png";
import Shopify from "../../assets/images/icon/shopify.png";
import Angular from "../../assets/images/icon/angular.png";
import Nodejs from "../../assets/images/icon/nodejs.png";
import Go from "../../assets/images/icon/go.png";
import SqlServer from "../../assets/images/icon/sqlserver.png";
import Sass from "../../assets/images/icon/sass.png";
import Cloudflare from "../../assets/images/icon/cloudflare.png";
import React from "../../assets/images/icon/react.png";
import Dotnet from "../../assets/images/icon/dotnet.png";
import Mongodb from "../../assets/images/icon/mongodb.png";

import Terraform from "../../assets/images/icon/terraform.png";
import Wordpress from "../../assets/images/icon/wordprees.png";
import MachineLearning from "../../assets/images/icon/machine-learning.png";
import Aws from "../../assets/images/icon/aws.png";
import Python from "../../assets/images/icon/python.png";
import Figma from "../../assets/images/icon/figma.png";

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Animation variants for individual tech items
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

// Hover animation for tech cards
const hoverVariants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 0 0 rgba(56, 189, 248, 0)",
  },
  hover: {
    scale: 1.08,
    y: -8,
    boxShadow: "0 20px 40px rgba(56, 189, 248, 0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

// Floating animation for icons
const floatVariants = {
  animate: (i) => ({
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: i * 0.2,
    },
  }),
};

// Glow pulse animation
const glowVariants = {
  rest: {
    opacity: 0,
    scale: 0.8,
  },
  hover: {
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 0.3,
    },
  },
};

/**
 * Animated Tech Card Component
 */
function TechCard({ icon, name, index, isWhiteIcon = false }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative"
    >
      <motion.div
        variants={hoverVariants}
        className="text-center rounded-md h-[130px] lg:w-[130px] flex flex-col justify-center items-center transition-colors duration-200 relative group cursor-pointer"
      >
        {/* Glow effect background */}
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-xl"
        />

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(139, 92, 246, 0.1))",
            border: "1px solid rgba(56, 189, 248, 0.2)",
          }}
        />

        {/* Icon container with float animation */}
        <motion.div
          custom={index}
          variants={floatVariants}
          animate="animate"
          className="h-[50px] w-[80px] relative z-10"
        >
          <motion.img
            src={icon}
            alt={name}
            className={`w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] ${
              isWhiteIcon
                ? "[filter:brightness(0)_saturate(100%)_invert(99%)_sepia(64%)_saturate(2%)_hue-rotate(207deg)_brightness(113%)_contrast(100%)]"
                : ""
            }`}
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Label with reveal animation */}
        <motion.p
          className="mt-2.5 text-sm relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

/**
 * Technology Stack Section
 */
function TechStack() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container-wide relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-3 gap-[14px] relative lg:grid-cols-9"
        >
          <div className="lg:row-start-1 lg:col-start-1 lg:col-end-1">
            <TechCard icon={Kotlin} name="Kotlin" index={0} />
          </div>

          <div className="lg:row-start-1 lg:col-start-2 lg:col-end-3">
            <TechCard icon={Github} name="Github" index={1} isWhiteIcon />
          </div>

          <div className="lg:row-start-1 lg:col-start-8 lg:col-end-8">
            <TechCard icon={Swift} name="Swift" index={2} />
          </div>

          <div className="lg:row-start-1 lg:col-start-9 lg:col-end-9">
            <TechCard icon={Php} name="PHP" index={3} />
          </div>

          <div className="lg:row-start-2 lg:col-start-1 lg:col-end-1">
            <TechCard icon={Cloud} name="Cloud" index={4} />
          </div>

          <div className="lg:row-start-2 lg:col-start-2 lg:col-end-2">
            <TechCard icon={Azure} name="Azure" index={5} />
          </div>

          <div className="lg:row-start-2 lg:col-start-8 lg:col-end-8">
            <TechCard icon={Next} name="Next.js" index={6} />
          </div>

          <div className="lg:row-start-2 lg:col-start-9 lg:col-end-9">
            <TechCard icon={Shopify} name="Shopify" index={7} />
          </div>

          <div className="lg:row-start-3 lg:col-start-1 lg:col-end-1">
            <TechCard icon={Wordpress} name="Wordpress" index={8} />
          </div>

          <motion.div
            className="col-span-3 lg:row-start-2 lg:row-end-4 lg:col-start-3 lg:col-end-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionHeading
              tag="Technology"
              title="Our Tech Stack"
              description="We work with the latest and most powerful technologies to build scalable, maintainable solutions."
            />
          </motion.div>

          <div className="lg:row-start-3 lg:col-start-2 lg:col-end-2">
            <TechCard icon={Aws} name="Aws" index={9} />
          </div>

          <div className="lg:row-start-3 lg:col-start-8 lg:col-end-8">
            <TechCard icon={Figma} name="Figma" index={10} />
          </div>

          <div className="lg:row-start-3 lg:col-start-9 lg:col-end-9">
            <TechCard icon={Python} name="Python" index={11} />
          </div>

          <div className="lg:row-start-4 lg:col-start-1 lg:col-end-1">
            <TechCard icon={Angular} name="Angular" index={12} />
          </div>

          <div className="lg:row-start-4 lg:col-start-2 lg:col-end-2">
            <TechCard icon={Nodejs} name="Node.js" index={13} />
          </div>

          <div className="lg:row-start-4 lg:col-start-3 lg:col-end-3">
            <TechCard icon={Go} name="Go" index={14} />
          </div>

          <div className="lg:row-start-4 lg:col-start-7 lg:col-end-7">
            <TechCard icon={SqlServer} name="SQL Server" index={15} />
          </div>

          <div className="lg:row-start-4 lg:col-start-8 lg:col-end-8">
            <TechCard icon={Sass} name="Sass" index={16} />
          </div>

          <div className="lg:row-start-4 lg:col-start-9 lg:col-end-9">
            <TechCard icon={Cloudflare} name="Cloudflare" index={17} />
          </div>

          <div className="lg:row-start-5 lg:col-start-2 lg:col-end-2">
            <TechCard icon={React} name="React" index={18} />
          </div>

          <div className="lg:row-start-5 lg:col-start-3 lg:col-end-3">
            <TechCard icon={Kotlin} name="Kotlin" index={19} />
          </div>

          <div className="lg:row-start-5 lg:col-start-4 lg:col-end-4">
            <TechCard icon={Dotnet} name="Dotnet" index={20} />
          </div>

          <div className="lg:row-start-5 lg:col-start-6 lg:col-end-6">
            <TechCard icon={Mongodb} name="Mongodb" index={21} />
          </div>

          <div className="lg:row-start-5 lg:col-start-7 lg:col-end-7">
            <TechCard icon={Terraform} name="Terraform" index={22} />
          </div>

          <div className="lg:row-start-5 lg:col-start-8 lg:col-end-8">
            <TechCard
              icon={MachineLearning}
              name="Machine Learning"
              index={23}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
