import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCloud, FiServer, FiGitBranch, FiBox, FiActivity, FiShield, FiCheck, FiTrendingUp } from 'react-icons/fi';
import { pageTransition, staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeading from '../../components/ui/SectionHeading';
import CTA from '../../components/sections/CTA';

const services = [
          {
                    icon: FiCloud,
                    title: 'Cloud Architecture & Migration',
                    features: ['AWS, Azure, GCP setup and configuration', 'Migration from on-premise to cloud', 'Multi-cloud & hybrid strategies', 'Cost optimization & reserved instances'],
          },
          {
                    icon: FiServer,
                    title: 'Infrastructure as Code (IaC)',
                    features: ['Terraform, CloudFormation, Pulumi', 'Version-controlled infrastructure', 'Repeatable deployments', 'Environment parity (dev, staging, prod)'],
          },
          {
                    icon: FiGitBranch,
                    title: 'CI/CD Pipelines',
                    features: ['Automated testing & deployment', 'GitHub Actions, GitLab CI, Jenkins', 'Blue-green & canary deployments', 'Rollback strategies'],
          },
          {
                    icon: FiBox,
                    title: 'Container Orchestration',
                    features: ['Docker containerization', 'Kubernetes (EKS, AKS, GKE)', 'Service mesh (Istio, Linkerd)', 'Auto-scaling policies'],
          },
          {
                    icon: FiActivity,
                    title: 'Monitoring & Observability',
                    features: ['Centralized logging (ELK, CloudWatch)', 'Application monitoring (Datadog, New Relic)', 'Custom dashboards & alerts', 'Performance optimization'],
          },
          {
                    icon: FiShield,
                    title: 'Security & Compliance',
                    features: ['IAM policies & role-based access', 'Secrets management (Vault, AWS Secrets Manager)', 'Security scanning & vulnerability assessments', 'Compliance automation (SOC 2, HIPAA, GDPR)'],
          },
];

const benefits = [
          { value: '99.9%+', label: 'uptime with automated failover' },
          { value: '10x', label: 'faster deployments with CI/CD' },
          { value: '40%', label: 'cost reduction through optimization' },
          { value: '0', label: 'downtime deployments' },
];

const technologies = {
          cloud: ['AWS (EC2, S3, RDS, Lambda, ECS, EKS)', 'Microsoft Azure', 'Google Cloud Platform'],
          devops: ['Terraform', 'Ansible', 'Chef', 'Puppet', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack'],
};

function CloudDevOps() {
          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              {/* Hero Section */}
                              <section className="pt-32 pb-20 relative overflow-hidden">
                                        <div className="absolute inset-0 hero-animated-bg" />
                                        <div className="absolute inset-0 grid-pattern opacity-20" />
                                        <div className="blur-circle-primary top-1/4 -right-40" />

                                        <div className="container-wide relative">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            animate="show"
                                                            className="max-w-3xl"
                                                  >
                                                            <motion.span variants={fadeUp} className="section-tag mb-6 inline-block">
                                                                      Services
                                                            </motion.span>
                                                            <motion.h1
                                                                      variants={fadeUp}
                                                                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                                                            >
                                                                      Cloud Infrastructure & DevOps
                                                            </motion.h1>
                                                            <motion.p
                                                                      variants={fadeUp}
                                                                      className="text-xl text-gray-400 mb-8 leading-relaxed"
                                                            >
                                                                      Build scalable, reliable, and cost-efficient cloud infrastructure.
                                                                      Automate deployments, improve uptime, and move faster with confidence.
                                                            </motion.p>
                                                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                                                      <Link to="/contact" className="btn-primary px-8 py-4 inline-flex items-center gap-2 group">
                                                                                Get Free Assessment
                                                                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                                      </Link>
                                                                      <Link to="/case-studies" className="btn-secondary px-8 py-4">
                                                                                View Our Work
                                                                      </Link>
                                                            </motion.div>
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Benefits Stats */}
                              <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
                                        <div className="container-wide">
                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid grid-cols-2 md:grid-cols-4 gap-8"
                                                  >
                                                            {benefits.map((benefit, index) => (
                                                                      <motion.div
                                                                                key={benefit.label}
                                                                                variants={fadeUp}
                                                                                custom={index}
                                                                                className="text-center"
                                                                      >
                                                                                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                                                                                          {benefit.value}
                                                                                </div>
                                                                                <div className="text-sm text-gray-400">{benefit.label}</div>
                                                                      </motion.div>
                                                            ))}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Services Grid */}
                              <section className="section-padding">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="What We Do"
                                                            title="Cloud & DevOps Services"
                                                            description="End-to-end cloud solutions from architecture to ongoing management."
                                                            className="mb-16"
                                                  />

                                                  <motion.div
                                                            variants={staggerContainer}
                                                            initial="hidden"
                                                            whileInView="show"
                                                            viewport={{ once: true }}
                                                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                                  >
                                                            {services.map((service, index) => {
                                                                      const Icon = service.icon;
                                                                      return (
                                                                                <motion.div
                                                                                          key={service.title}
                                                                                          variants={fadeUp}
                                                                                          custom={index}
                                                                                          className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
                                                                                >
                                                                                          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                                                                    <Icon className="w-6 h-6" />
                                                                                          </div>
                                                                                          <h3 className="text-lg font-semibold text-white mb-4">{service.title}</h3>
                                                                                          <ul className="space-y-2">
                                                                                                    {service.features.map((feature) => (
                                                                                                              <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                                                                                                                        <FiCheck className="text-primary flex-shrink-0 mt-0.5" />
                                                                                                                        {feature}
                                                                                                              </li>
                                                                                                    ))}
                                                                                          </ul>
                                                                                </motion.div>
                                                                      );
                                                            })}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Technology Stack */}
                              <section className="section-padding bg-dark-800/30">
                                        <div className="container-wide">
                                                  <SectionHeading
                                                            tag="Technology"
                                                            title="Tools We Use"
                                                            description="Industry-leading cloud platforms and DevOps tools."
                                                            className="mb-12"
                                                  />

                                                  <div className="space-y-10">
                                                            <div>
                                                                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                                                                                <span className="w-8 h-px bg-primary" />
                                                                                Cloud Platforms
                                                                      </h3>
                                                                      <div className="flex flex-wrap gap-3">
                                                                                {technologies.cloud.map((tech, index) => (
                                                                                          <motion.span
                                                                                                    key={tech}
                                                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                                                    viewport={{ once: true }}
                                                                                                    transition={{ delay: index * 0.05 }}
                                                                                                    className="px-4 py-2 text-sm text-gray-300 bg-dark-700/50 rounded-lg"
                                                                                          >
                                                                                                    {tech}
                                                                                          </motion.span>
                                                                                ))}
                                                                      </div>
                                                            </div>

                                                            <div>
                                                                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                                                                                <span className="w-8 h-px bg-primary" />
                                                                                DevOps Tools
                                                                      </h3>
                                                                      <div className="flex flex-wrap gap-3">
                                                                                {technologies.devops.map((tech, index) => (
                                                                                          <motion.span
                                                                                                    key={tech}
                                                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                                                    viewport={{ once: true }}
                                                                                                    transition={{ delay: index * 0.03 }}
                                                                                                    className="px-4 py-2 text-sm text-gray-300 bg-dark-700/50 rounded-lg"
                                                                                          >
                                                                                                    {tech}
                                                                                          </motion.span>
                                                                                ))}
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* CTA */}
                              <CTA
                                        headline="Modernize Your Infrastructure"
                                        description="Get a free cloud & DevOps assessment. We'll identify bottlenecks and create an optimization roadmap."
                                        primaryCTA={{ text: "Get Free Assessment", href: "/contact" }}
                              />
                    </motion.div>
          );
}

export default CloudDevOps;
