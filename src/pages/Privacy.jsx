import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeUp } from '../utils/animations';
import SEO from '../components/common/SEO';

const sections = [
          {
                    title: '1. Information We Collect',
                    content: `We collect information you provide directly to us, such as when you:
    • Fill out a contact form
    • Request a consultation
    • Subscribe to our newsletter
    • Communicate with us via email or phone
    
    This information may include your name, email address, phone number, company name, and any other information you choose to provide.`,
          },
          {
                    title: '2. How We Use Your Information',
                    content: `We use the information we collect to:
    • Respond to your inquiries and provide requested services
    • Send you technical notices and support messages
    • Communicate about products, services, and events
    • Improve our website and services
    • Comply with legal obligations`,
          },
          {
                    title: '3. Information Sharing',
                    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:
    • Service providers who assist in our operations
    • Professional advisors (lawyers, accountants)
    • Law enforcement when required by law`,
          },
          {
                    title: '4. Data Security',
                    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`,
          },
          {
                    title: '5. Cookies',
                    content: `We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
          },
          {
                    title: '6. Third-Party Links',
                    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read the privacy policies of any linked sites.`,
          },
          {
                    title: '7. Your Rights',
                    content: `Depending on your location, you may have rights to:
    • Access your personal information
    • Correct inaccurate data
    • Request deletion of your data
    • Object to processing of your data
    • Data portability
    
    To exercise these rights, please contact us at s.roy@kloudzcomputing.tech.`,
          },
          {
                    title: '8. Changes to This Policy',
                    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.`,
          },
          {
                    title: '9. Contact Us',
                    content: `If you have any questions about this Privacy Policy, please contact us at:
    
    Kloudz Computing
    Email: s.roy@kloudzcomputing.tech
    Phone: +91 90466 84235`,
          },
];

function Privacy() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              <SEO
                                        title="Privacy Policy - Data Protection & Privacy Practices"
                                        description="Kloudz Computing Privacy Policy. Learn how we collect, use, and protect your personal information when you use our website and services."
                                        keywords="privacy policy, data protection, personal information, cookie policy, GDPR compliance"
                                        canonical="https://kloudz.com/privacy"
                              />

                              {/* Hero */}
                              <section className="pt-32 pb-12 relative overflow-hidden">
                                        <div className="absolute inset-0 hero-animated-bg" />
                                        <div className="container-wide relative">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            animate="show"
                                                            className="max-w-3xl"
                                                  >
                                                            <motion.h1
                                                                      variants={fadeUp}
                                                                      className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                                                            >
                                                                      Privacy Policy
                                                            </motion.h1>
                                                            <motion.p variants={fadeUp} className="text-gray-400">
                                                                      Last Updated: January 2024
                                                            </motion.p>
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Content */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <div className="max-w-3xl">
                                                            <motion.div
                                                                      variants={staggerContainer}
                                                                      initial="hidden"
                                                                      whileInView="show"
                                                                      viewport={{ once: true }}
                                                                      className="space-y-10"
                                                            >
                                                                      <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed">
                                                                                At Kloudz Computing ("we," "our," or "us"), we respect your privacy and are committed
                                                                                to protecting your personal information. This Privacy Policy explains how we collect,
                                                                                use, disclose, and safeguard your information when you visit our website or use our services.
                                                                      </motion.p>

                                                                      {sections.map((section, index) => (
                                                                                <motion.div
                                                                                          key={section.title}
                                                                                          variants={fadeUp}
                                                                                          custom={index}
                                                                                >
                                                                                          <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                                                                                          <div className="text-gray-400 whitespace-pre-line leading-relaxed">
                                                                                                    {section.content}
                                                                                          </div>
                                                                                </motion.div>
                                                                      ))}
                                                            </motion.div>
                                                  </div>
                                        </div>
                              </section>
                    </motion.div>
          );
}

export default Privacy;
