import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiGithub, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { SITE_CONFIG, FOOTER_LINKS } from '../../utils/constants';
import { staggerContainer, fadeUp } from '../../utils/animations';
import Logo from "../../assets/images/kloudz-logo.svg";
/**
 * Premium footer with structured navigation and animations
 */
function Footer() {
          const currentYear = new Date().getFullYear();

          const socialLinks = [
                    { icon: FiLinkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
                    { icon: FiTwitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
                    { icon: FiGithub, href: SITE_CONFIG.social.github, label: 'GitHub' },
                    { icon: FiFacebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
          ];

          return (
                    <footer className="relative bg-dark-900 border-t border-dark-700/50">
                              {/* Decorative gradient line */}
                              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                              {/* Background glow */}
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none" />

                              <div className="container-wide relative">
                                        {/* Main footer content */}
                                        <motion.div
                                                  variants={staggerContainer}
                                                  initial="hidden"
                                                  whileInView="show"
                                                  viewport={{ once: true, margin: '-100px' }}
                                                  className="py-16 lg:py-20"
                                        >
                                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                                                            {/* Company Info */}
                                                            <motion.div variants={fadeUp} className="lg:col-span-4">
                                                                      <Link to="/" className="inline-flex items-center gap-2 mb-6">
                                                                 <img
                                                                              src={Logo}
                                                                              alt="Kloudz Logo"
                                                                              className=" object-contain max-w-[90px] w-full"
                                                                            />
                                                                            
                                                                      </Link>
                                                                      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                                                                                Transforming businesses with world-class technology solutions and engineering talent.
                                                                      </p>

                                                                      {/* Social Links */}
                                                                      <div className="flex items-center gap-3">
                                                                                {socialLinks.map((social) => {
                                                                                          const Icon = social.icon;
                                                                                          return (
                                                                                                    <motion.a
                                                                                                              key={social.label}
                                                                                                              href={social.href}
                                                                                                              target="_blank"
                                                                                                              rel="noopener noreferrer"
                                                                                                              whileHover={{ scale: 1.1, y: -2 }}
                                                                                                              whileTap={{ scale: 0.95 }}
                                                                                                              className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-700/50 text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                                                                                              aria-label={social.label}
                                                                                                    >
                                                                                                              <Icon className="w-5 h-5" />
                                                                                                    </motion.a>
                                                                                          );
                                                                                })}
                                                                      </div>
                                                            </motion.div>

                                                            {/* Services Links */}
                                                            <motion.div variants={fadeUp} className="lg:col-span-2">
                                                                      <h4 className="text-white font-semibold mb-5">Services</h4>
                                                                      <ul className="space-y-3">
                                                                                {FOOTER_LINKS.services.map((link) => (
                                                                                          <li key={link.name}>
                                                                                                    <Link
                                                                                                              to={link.href}
                                                                                                              className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                                                                                    >
                                                                                                              {link.name}
                                                                                                    </Link>
                                                                                          </li>
                                                                                ))}
                                                                      </ul>
                                                            </motion.div>

                                                            {/* Company Links */}
                                                            <motion.div variants={fadeUp} className="lg:col-span-2">
                                                                      <h4 className="text-white font-semibold mb-5">Company</h4>
                                                                      <ul className="space-y-3">
                                                                                {FOOTER_LINKS.company.map((link) => (
                                                                                          <li key={link.name}>
                                                                                                    <Link
                                                                                                              to={link.href}
                                                                                                              className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                                                                                    >
                                                                                                              {link.name}
                                                                                                    </Link>
                                                                                          </li>
                                                                                ))}
                                                                      </ul>
                                                            </motion.div>

                                                            {/* Resources Links */}
                                                            <motion.div variants={fadeUp} className="lg:col-span-2">
                                                                      <h4 className="text-white font-semibold mb-5">Resources</h4>
                                                                      <ul className="space-y-3">
                                                                                {FOOTER_LINKS.resources.map((link) => (
                                                                                          <li key={link.name}>
                                                                                                    <Link
                                                                                                              to={link.href}
                                                                                                              className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                                                                                    >
                                                                                                              {link.name}
                                                                                                    </Link>
                                                                                          </li>
                                                                                ))}
                                                                      </ul>
                                                            </motion.div>

                                                            {/* Contact Info */}
                                                            <motion.div variants={fadeUp} className="lg:col-span-2">
                                                                      <h4 className="text-white font-semibold mb-5">Contact</h4>
                                                                      <ul className="space-y-4">
                                                                                <li>
                                                                                          <a
                                                                                                    href={`mailto:${SITE_CONFIG.email}`}
                                                                                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                                                                          >
                                                                                                    <FiMail className="w-4 h-4 flex-shrink-0" />
                                                                                                    <span className="break-all">{SITE_CONFIG.email}</span>
                                                                                          </a>
                                                                                </li>
                                                                                <li>
                                                                                          <a
                                                                                                    href={`tel:${SITE_CONFIG.phone.india}`}
                                                                                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                                                                          >
                                                                                                    <FiPhone className="w-4 h-4 flex-shrink-0" />
                                                                                                    <span>{SITE_CONFIG.phone.india}</span>
                                                                                          </a>
                                                                                </li>
                                                                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                                                                          <FiMapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                                                                          <div className="space-y-2">
                                                                                                    {SITE_CONFIG.address.map((addr) => (
                                                                                                              <span key={addr} className="block">
                                                                                                                        {addr}
                                                                                                              </span>
                                                                                                    ))}
                                                                                          </div>
                                                                                </li>
                                                                      </ul>
                                                            </motion.div>
                                                  </div>
                                        </motion.div>

                                        {/* Bottom bar */}
                                        <div className="py-6 border-t border-dark-700/50">
                                                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                                            <p className="text-sm text-gray-500">
                                                                      © {currentYear} {SITE_CONFIG.name}. All rights reserved.
                                                            </p>
                                                            <div className="flex items-center gap-6">
                                                                      <Link
                                                                                to="/privacy"
                                                                                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                                                                      >
                                                                                Privacy Policy
                                                                      </Link>
                                                                      <Link
                                                                                to="/terms"
                                                                                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                                                                      >
                                                                                Terms of Service
                                                                      </Link>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </footer>
          );
}

export default Footer;
