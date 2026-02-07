import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

// Import all home page sections
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
import TechStack from '../components/sections/TechStack';
import Process from '../components/sections/Process';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';

/**
 * Home Page - Main landing page with all sections
 */
function Home() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              {/* Cinematic Hero Section */}
                              <Hero />

                              {/* Dual Offering - Services & Hiring */}
                              <Services />

                              {/* Trust Indicators / Stats */}
                              <Stats />

                              {/* Why Kloudz - Differentiators */}
                              <WhyUs />

                              {/* Technology Stack */}
                              <TechStack />

                              {/* Process Steps */}
                              <Process />

                              {/* Final CTA */}
                              <CTA
                                        headline="Ready to Build Something Great?"
                                        description="Whether you need to build a product or scale your team, we're here to help you succeed."
                                        primaryCTA={{ text: "Let's Talk", href: "/contact" }}
                                        secondaryCTA={{ text: "View Case Studies", href: "/case-studies" }}
                              />
                    </motion.div>
          );
}

export default Home;
