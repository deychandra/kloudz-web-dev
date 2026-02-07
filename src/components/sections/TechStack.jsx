import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import { TECHNOLOGIES } from '../../utils/constants';

// Tech icons - using simple text representation with styled backgrounds
const techIcons = {
          // Frontend
          'React': { bg: 'bg-[#61DAFB]/10', text: 'text-[#61DAFB]' },
          'Next.js': { bg: 'bg-white/10', text: 'text-white' },
          'Vue.js': { bg: 'bg-[#42b883]/10', text: 'text-[#42b883]' },
          'Angular': { bg: 'bg-[#dd0031]/10', text: 'text-[#dd0031]' },
          'TypeScript': { bg: 'bg-[#3178c6]/10', text: 'text-[#3178c6]' },
          'Tailwind CSS': { bg: 'bg-[#06B6D4]/10', text: 'text-[#06B6D4]' },
          // Backend
          'Node.js': { bg: 'bg-[#339933]/10', text: 'text-[#339933]' },
          'Python': { bg: 'bg-[#3776AB]/10', text: 'text-[#3776AB]' },
          'Java': { bg: 'bg-[#ED8B00]/10', text: 'text-[#ED8B00]' },
          'Go': { bg: 'bg-[#00ADD8]/10', text: 'text-[#00ADD8]' },
          '.NET': { bg: 'bg-[#512BD4]/10', text: 'text-[#512BD4]' },
          'Ruby on Rails': { bg: 'bg-[#CC0000]/10', text: 'text-[#CC0000]' },
          // Cloud
          'AWS': { bg: 'bg-[#FF9900]/10', text: 'text-[#FF9900]' },
          'Azure': { bg: 'bg-[#0078D4]/10', text: 'text-[#0078D4]' },
          'GCP': { bg: 'bg-[#4285F4]/10', text: 'text-[#4285F4]' },
          'Docker': { bg: 'bg-[#2496ED]/10', text: 'text-[#2496ED]' },
          'Kubernetes': { bg: 'bg-[#326CE5]/10', text: 'text-[#326CE5]' },
          'Terraform': { bg: 'bg-[#7B42BC]/10', text: 'text-[#7B42BC]' },
          // Database
          'PostgreSQL': { bg: 'bg-[#336791]/10', text: 'text-[#336791]' },
          'MongoDB': { bg: 'bg-[#47A248]/10', text: 'text-[#47A248]' },
          'Redis': { bg: 'bg-[#DC382D]/10', text: 'text-[#DC382D]' },
          'MySQL': { bg: 'bg-[#4479A1]/10', text: 'text-[#4479A1]' },
          'DynamoDB': { bg: 'bg-[#4053D6]/10', text: 'text-[#4053D6]' },
          'Elasticsearch': { bg: 'bg-[#005571]/10', text: 'text-[#00BFB3]' },
          // AI
          'OpenAI': { bg: 'bg-[#412991]/10', text: 'text-[#10A37F]' },
          'TensorFlow': { bg: 'bg-[#FF6F00]/10', text: 'text-[#FF6F00]' },
          'PyTorch': { bg: 'bg-[#EE4C2C]/10', text: 'text-[#EE4C2C]' },
          'LangChain': { bg: 'bg-[#1C3C3C]/10', text: 'text-emerald-400' },
          'Hugging Face': { bg: 'bg-[#FFD21E]/10', text: 'text-[#FFD21E]' },
          'Computer Vision': { bg: 'bg-purple-500/10', text: 'text-purple-400' },
};

const categories = [
          { key: 'frontend', title: 'Frontend' },
          { key: 'backend', title: 'Backend' },
          { key: 'cloud', title: 'Cloud & DevOps' },
          { key: 'database', title: 'Databases' },
          { key: 'ai', title: 'AI & ML' },
];

/**
 * Technology Stack Section
 */
function TechStack() {
          return (
                    <section className="section-padding relative overflow-hidden">
                              {/* Background */}
                              <div className="absolute inset-0 grid-pattern opacity-20" />

                              <div className="container-wide relative">
                                        <SectionHeading
                                                  tag="Technology"
                                                  title="Our Tech Stack"
                                                  description="We work with the latest and most powerful technologies to build scalable, maintainable solutions."
                                                  className="mb-16"
                                        />

                                        <motion.div
                                                  variants={staggerContainer}
                                                  initial="hidden"
                                                  whileInView="show"
                                                  viewport={{ once: true, margin: '-100px' }}
                                                  className="space-y-10"
                                        >
                                                  {categories.map((category, catIndex) => (
                                                            <motion.div
                                                                      key={category.key}
                                                                      variants={fadeUp}
                                                                      custom={catIndex}
                                                            >
                                                                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                                                                                <span className="w-8 h-px bg-primary" />
                                                                                {category.title}
                                                                      </h3>

                                                                      <div className="flex flex-wrap gap-3">
                                                                                {TECHNOLOGIES[category.key].map((tech, index) => {
                                                                                          const styles = techIcons[tech] || { bg: 'bg-dark-600', text: 'text-gray-300' };
                                                                                          return (
                                                                                                    <motion.div
                                                                                                              key={tech}
                                                                                                              initial={{ opacity: 0, scale: 0.8 }}
                                                                                                              whileInView={{ opacity: 1, scale: 1 }}
                                                                                                              viewport={{ once: true }}
                                                                                                              transition={{ duration: 0.3, delay: index * 0.05 }}
                                                                                                              whileHover={{ scale: 1.05, y: -2 }}
                                                                                                              className={`px-4 py-2.5 rounded-xl ${styles.bg} ${styles.text} text-sm font-medium transition-all duration-300 cursor-default border border-transparent hover:border-current/20`}
                                                                                                    >
                                                                                                              {tech}
                                                                                                    </motion.div>
                                                                                          );
                                                                                })}
                                                                      </div>
                                                            </motion.div>
                                                  ))}
                                        </motion.div>
                              </div>
                    </section>
          );
}

export default TechStack;
