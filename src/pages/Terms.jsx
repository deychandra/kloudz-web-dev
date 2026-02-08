import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeUp } from '../utils/animations';
import SEO from '../components/common/SEO';

const sections = [
          {
                    title: '1. Acceptance of Terms',
                    content: `By accessing and using the Kloudz Computing website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
          },
          {
                    title: '2. Services Description',
                    content: `Kloudz Computing provides custom software development, cloud infrastructure, AI solutions, and IT staffing services. The specific scope, deliverables, and terms for each engagement will be outlined in a separate Statement of Work (SOW) or service agreement.`,
          },
          {
                    title: '3. Intellectual Property',
                    content: `Unless otherwise specified in a service agreement:
    • All work product created for clients becomes the client's property upon full payment
    • Kloudz retains the right to use general knowledge and skills gained during engagements
    • Pre-existing intellectual property remains with its original owner
    • Open-source components remain subject to their respective licenses`,
          },
          {
                    title: '4. Client Responsibilities',
                    content: `Clients agree to:
    • Provide accurate and complete information as needed for project execution
    • Make timely decisions and provide feedback as requested
    • Ensure they have rights to any materials provided to Kloudz
    • Pay invoices according to agreed payment terms
    • Maintain confidentiality of any proprietary information shared`,
          },
          {
                    title: '5. Payment Terms',
                    content: `Payment terms will be specified in each service agreement. Generally:
    • Invoices are due within 30 days of issue
    • Late payments may incur interest charges
    • Work may be paused for accounts more than 30 days overdue
    • All fees are non-refundable unless otherwise stated`,
          },
          {
                    title: '6. Confidentiality',
                    content: `Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes but is not limited to business strategies, technical specifications, and customer data. Confidentiality obligations survive termination of services.`,
          },
          {
                    title: '7. Limitation of Liability',
                    content: `To the maximum extent permitted by law:
    • Kloudz is not liable for indirect, incidental, or consequential damages
    • Total liability is limited to the fees paid for the specific service
    • We are not responsible for third-party services or integrations
    • Clients are responsible for data backup and business continuity`,
          },
          {
                    title: '8. Warranties',
                    content: `Kloudz warrants that:
    • Services will be performed in a professional manner
    • Deliverables will substantially conform to agreed specifications
    • We will not knowingly introduce malicious code
    
    We do not warrant that services will be error-free or uninterrupted.`,
          },
          {
                    title: '9. Termination',
                    content: `Either party may terminate services with 30 days written notice. Upon termination:
    • Client pays for all work completed to date
    • Kloudz delivers all completed work product
    • Confidentiality obligations continue
    • Licenses to third-party components may need separate handling`,
          },
          {
                    title: '10. Governing Law',
                    content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Kloudz Computing is incorporated. Any disputes shall be resolved through arbitration.`,
          },
          {
                    title: '11. Changes to Terms',
                    content: `We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.`,
          },
          {
                    title: '12. Contact',
                    content: `For questions about these Terms of Service, please contact:
    
    Kloudz Computing
    Email: legal@kloudz.com
    Phone: +1 (888) 555-0123`,
          },
];

function Terms() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              <SEO
                                        title="Terms of Service - Legal Agreement & Conditions"
                                        description="Kloudz Computing Terms of Service. Read our legal agreement covering service usage, intellectual property, payment terms, and liability provisions."
                                        keywords="terms of service, legal agreement, terms and conditions, service agreement, intellectual property, payment terms"
                                        canonical="https://kloudz.com/terms"
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
                                                                      Terms of Service
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
                                                                                Please read these Terms of Service ("Terms") carefully before using the Kloudz Computing
                                                                                website and services. These Terms constitute a legally binding agreement between you and
                                                                                Kloudz Computing.
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

export default Terms;
