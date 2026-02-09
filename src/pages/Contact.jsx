import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";
import {
  pageTransition,
  staggerContainer,
  fadeUp,
  slideInLeft,
  slideInRight,
} from "../utils/animations";
import CinematicHero from "../components/sections/CinematicHero";
import SEO from "../components/common/SEO";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "s.roy@kloudzcomputing.tech",
    href: "mailto:s.roy@kloudzcomputing.tech",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 90466 84235",
    href: "tel:+919046684235",
  },
  {
    icon: FiMapPin,
    label: "Kolkata Office",
    value:
      "O-Block, Flat No.-3, 1st Floor, C/17/9, Baishnabghata Patuli Township, Kolkata, West Bengal, 700094, India",
    href: "#",
  },
  {
    icon: FiMapPin,
    label: "Bengaluru Office",
    value:
      "VICI 102, SJR VERITY, Hosa Rd, KSDB Quarters Kaveri Layout, KASAVANAHALLI, Bengaluru, Karnataka 560035",
    href: "#",
  },
];

const inquiryTypes = [
  "Project Inquiry",
  "Hiring/Staffing",
  "Partnership",
  "General Question",
  "Other",
];

const faqs = [
  {
    q: "What are your typical project timelines?",
    a: "It depends on scope. MVPs typically take 2-4 months, medium projects 4-6 months, and enterprise systems 6-12 months.",
  },
  {
    q: "How do you bill for projects?",
    a: "We offer fixed price, time & materials, and dedicated team models. We'll recommend the best fit during our initial call.",
  },
  {
    q: "What's your typical response time?",
    a: "We aim to respond within 24 hours on business days. For urgent matters, call us directly.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we sign NDAs before any detailed discussions. Your ideas and data are always protected.",
  },
];

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <SEO
        title="Contact Us - Get a Free Project Quote"
        description="Contact Kloudz Computing for software development, IT staffing, or AI automation services. Get a free consultation and project quote within 24 hours."
        keywords="contact software development company, hire developers, IT services quote, software development inquiry, offshore development contact"
        canonical="https://kloudz.com/contact"
      />

      {/* Cinematic Hero Section */}
      <CinematicHero
        tag="Get in Touch"
        title={
          <>
            <span className="word inline-block">Let's</span>{" "}
            <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-cyan to-accent-purple">
              Build
            </span>{" "}
            <span className="word inline-block">Something</span>{" "}
            <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-primary">
              Great
            </span>
          </>
        }
        subtitle={
          <>
            Have a project in mind or need to{" "}
            <span className="text-primary font-medium">scale your team</span>?
            We'd love to hear from you.
          </>
        }
        variant="cyan"
        minHeight="60vh"
        showScrollIndicator={false}
      />

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiCheck className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          name="inquiryType"
                          required
                          value={formState.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="">Select...</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>


                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your project *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Brief description of your project or hiring needs..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <FiSend className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & FAQs */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-dark-700/50 transition-colors group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{item.label}</p>
                          <p className="text-white">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* FAQs */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      custom={index}
                      className="border-b border-dark-600 pb-4 last:border-0 last:pb-0"
                    >
                      <h4 className="text-white font-medium mb-2">{faq.q}</h4>
                      <p className="text-sm text-gray-400">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
