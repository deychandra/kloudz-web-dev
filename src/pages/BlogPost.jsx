import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar, FiShare2, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { pageTransition, fadeUp } from '../utils/animations';

// Blog post data
const blogPostsData = {
          'scalable-saas-architecture': {
                    title: 'How to Build a Scalable SaaS Architecture',
                    excerpt: 'Learn the key principles of building a multi-tenant SaaS platform that can scale to millions of users.',
                    category: 'Engineering',
                    date: 'Jan 15, 2026',
                    readTime: '8 min read',
                    author: 'Rajesh Kumar',
                    authorRole: 'CTO',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
                    content: `
## Introduction

Building a scalable SaaS architecture is one of the most challenging tasks for engineering teams. As your user base grows from hundreds to millions, your architecture must evolve to handle increased load while maintaining performance and reliability.

## Key Principles

### 1. Multi-Tenant Architecture

The foundation of any SaaS platform is its multi-tenancy model. There are three primary approaches:

- **Shared Database, Shared Schema**: All tenants share the same database and tables with a tenant_id column
- **Shared Database, Separate Schema**: Each tenant has their own schema within a shared database
- **Separate Databases**: Each tenant has their own dedicated database

For most startups, we recommend starting with the shared database approach and migrating to separate schemas as you scale.

### 2. Horizontal Scaling

Design your application to scale horizontally from day one:

- Use stateless application servers
- Implement session management with Redis or similar
- Design for eventual consistency where appropriate
- Use message queues for async processing

### 3. Database Optimization

Your database will be the first bottleneck. Plan ahead:

- Implement read replicas for read-heavy workloads
- Use connection pooling (PgBouncer for PostgreSQL)
- Index strategically based on query patterns
- Consider sharding for massive scale

### 4. Caching Strategy

Implement a multi-layer caching strategy:

- CDN for static assets
- Application-level caching with Redis
- Query result caching
- API response caching

## Conclusion

Building a scalable SaaS platform requires careful planning and continuous iteration. Start with a solid foundation, monitor your metrics, and be prepared to evolve your architecture as you grow.
    `,
          },
          'hiring-remote-developers': {
                    title: 'The Ultimate Guide to Hiring Remote Developers',
                    excerpt: 'Everything you need to know about building and managing remote engineering teams effectively.',
                    category: 'Hiring',
                    date: 'Jan 10, 2026',
                    readTime: '12 min read',
                    author: 'Priya Sharma',
                    authorRole: 'VP Engineering',
                    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
                    content: `
## Introduction

Remote work has become the new normal for software development teams. Companies that master remote hiring gain access to a global talent pool while reducing costs.

## Finding the Right Talent

### 1. Define Clear Requirements

Before you start searching, create a detailed job description:

- Technical skills required vs. nice-to-have
- Experience level expectations
- Timezone overlap requirements
- Communication expectations

### 2. Sourcing Candidates

Best channels for finding remote developers:

- **IT Staff Augmentation Partners**: Companies like Kloudz pre-vet candidates
- **Remote Job Boards**: We Work Remotely, RemoteOK, Arc.dev
- **LinkedIn**: Active outreach to passive candidates
- **Developer Communities**: GitHub, Stack Overflow, Dev.to

### 3. Technical Assessment

Design a robust evaluation process:

- Initial code review (GitHub/portfolio)
- Take-home assignment (time-boxed, realistic problem)
- Live coding session (pair programming style)
- System design discussion for senior roles

## Managing Remote Teams

### Communication Best Practices

- Over-communicate, especially async
- Use video for important discussions
- Document everything in writing
- Establish clear response time expectations

### Building Culture Remotely

- Regular virtual team building
- Annual or bi-annual in-person meetups
- Recognition and celebration of wins
- 1:1s focused on growth, not just status

## Conclusion

Building a successful remote team requires intentionality and the right processes. Focus on clear communication, strong technical evaluation, and building genuine connections.
    `,
          },
          'ai-in-2026': {
                    title: 'AI in 2026: What Every Business Leader Needs to Know',
                    excerpt: 'A practical guide to leveraging AI and automation for business growth and efficiency.',
                    category: 'AI & Automation',
                    date: 'Jan 5, 2026',
                    readTime: '6 min read',
                    author: 'Amit Patel',
                    authorRole: 'VP Engineering',
                    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
                    content: `
## The State of AI in 2026

AI has evolved from experimental technology to essential business infrastructure. Companies that haven't adopted AI are now at a significant competitive disadvantage.

## Practical AI Applications

### 1. Customer Support Automation

AI-powered chatbots now handle 70%+ of customer inquiries:

- Instant responses 24/7
- Consistent quality
- Seamless escalation to humans
- Continuous learning from interactions

### 2. Content Generation

AI assists with creating:

- Marketing copy and social posts
- Technical documentation
- Email responses
- Report generation

### 3. Process Automation

Automate repetitive tasks:

- Data entry and validation
- Document processing (OCR + extraction)
- Workflow orchestration
- Quality assurance testing

## Getting Started

### Start Small

Don't try to transform everything at once:

1. Identify high-volume, repetitive tasks
2. Calculate potential ROI
3. Run a pilot with clear success metrics
4. Scale what works

### Build vs. Buy

Most companies should buy:

- Use established AI platforms (OpenAI, Anthropic)
- Integrate pre-built solutions
- Focus on customization, not infrastructure
- Build only for unique competitive advantage

## Conclusion

AI in 2026 is practical, accessible, and essential. Start with clear business problems, measure results, and scale gradually.
    `,
          },
          'devops-best-practices': {
                    title: 'DevOps Best Practices for Startups',
                    excerpt: 'How to set up CI/CD, infrastructure as code, and monitoring from day one.',
                    category: 'DevOps',
                    date: 'Dec 28, 2025',
                    readTime: '10 min read',
                    author: 'Rajesh Kumar',
                    authorRole: 'CTO',
                    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80',
                    content: `
## Why DevOps Matters for Startups

DevOps practices accelerate development, reduce bugs, and enable rapid iteration. Even small teams benefit from proper CI/CD and infrastructure automation.

## Essential Practices

### 1. Version Control Everything

Not just code—version control:

- Infrastructure definitions (Terraform/Pulumi)
- Configuration files
- Documentation
- Database migrations

### 2. CI/CD from Day One

Set up automated pipelines early:

- **CI**: Automated testing on every push
- **CD**: Automated deployments to staging
- **Production**: One-click or automated with approval

### 3. Infrastructure as Code

Never configure servers manually:

- Use Terraform or Pulumi for cloud resources
- Docker for application packaging
- Kubernetes or ECS for orchestration
- Ansible for configuration management

### 4. Monitoring & Observability

You can't fix what you can't see:

- **Metrics**: Prometheus + Grafana
- **Logging**: ELK Stack or CloudWatch
- **Tracing**: Jaeger or AWS X-Ray
- **Alerting**: PagerDuty or Opsgenie

## Recommended Stack

For early-stage startups:

| Category | Recommendation |
|----------|---------------|
| CI/CD | GitHub Actions |
| Cloud | AWS or GCP |
| Containers | Docker + ECS/EKS |
| IaC | Terraform |
| Monitoring | Datadog or CloudWatch |

## Conclusion

Invest in DevOps early. The initial setup time pays dividends in velocity, reliability, and developer happiness.
    `,
          },
};

const categoryColors = {
          'Engineering': 'bg-primary/10 text-primary',
          'Hiring': 'bg-accent-purple/10 text-accent-purple',
          'AI & Automation': 'bg-accent-cyan/10 text-accent-cyan',
          'DevOps': 'bg-green-500/10 text-green-500',
};

function BlogPost() {
          const { slug } = useParams();
          const post = blogPostsData[slug];

          if (!post) {
                    return (
                              <motion.div
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={pageTransition}
                                        className="min-h-screen flex items-center justify-center"
                              >
                                        <div className="text-center">
                                                  <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
                                                  <Link to="/blog" className="text-primary hover:underline">
                                                            ← Back to Blog
                                                  </Link>
                                        </div>
                              </motion.div>
                    );
          }

          return (
                    <motion.div
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              variants={pageTransition}
                    >
                              {/* Hero */}
                              <section className="pt-32 pb-12 relative overflow-hidden">
                                        <div className="absolute inset-0 hero-animated-bg" />
                                        <div className="absolute inset-0 grid-pattern opacity-20" />

                                        <div className="container-wide relative">
                                                  <motion.div
                                                            variants={fadeUp}
                                                            initial="hidden"
                                                            animate="show"
                                                         
                                                  >
                                                            {/* Back link */}
                                                            <Link
                                                                      to="/blog"
                                                                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                                                            >
                                                                      <FiArrowLeft />
                                                                      Back to Blog
                                                            </Link>

                                                            {/* Meta */}
                                                            <div className="flex items-center gap-4 mb-6">
                                                                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[post.category]}`}>
                                                                                {post.category}
                                                                      </span>
                                                                      <div className="flex items-center gap-4 text-sm text-gray-500">
                                                                                <span className="flex items-center gap-1">
                                                                                          <FiCalendar className="w-4 h-4" />
                                                                                          {post.date}
                                                                                </span>
                                                                                <span className="flex items-center gap-1">
                                                                                          <FiClock className="w-4 h-4" />
                                                                                          {post.readTime}
                                                                                </span>
                                                                      </div>
                                                            </div>

                                                            {/* Title */}
                                                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                                                                      {post.title}
                                                            </h1>

                                                            {/* Excerpt */}
                                                            <p className="text-xl text-gray-400 mb-8">
                                                                      {post.excerpt}
                                                            </p>

                                                            {/* Author */}
                                                            <div className="flex items-center gap-4 mb-8">
                                                                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-white font-bold">
                                                                                {post.author.split(' ').map(n => n[0]).join('')}
                                                                      </div>
                                                                      <div>
                                                                                <div className="text-white font-medium">{post.author}</div>
                                                                                <div className="text-sm text-gray-500">{post.authorRole}</div>
                                                                      </div>
                                                            </div>

                                                            {/* Featured Image */}
                                                            {post.image && (
                                                                      <motion.div
                                                                                variants={fadeUp}
                                                                                initial="hidden"
                                                                                animate="show"
                                                                                className="relative rounded-2xl overflow-hidden aspect-video"
                                                                      >
                                                                                <img
                                                                                          src={post.image}
                                                                                          alt={post.title}
                                                                                          className="w-full h-full object-cover"
                                                                                />
                                                                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 via-transparent to-transparent" />
                                                                      </motion.div>
                                                            )}
                                                  </motion.div>
                                        </div>
                              </section>

                              {/* Content */}
                              <section className="section-padding pt-12">
                                        <div className="container-wide">
                                                  <div>
                                                            <motion.article
                                                                      variants={fadeUp}
                                                                      initial="hidden"
                                                                      animate="show"
                                                                      className="prose prose-invert prose-lg max-w-none"
                                                            >
                                                                      <div
                                                                                className="text-gray-300 leading-relaxed space-y-6 
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4
                  [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
                  [&_li]:text-gray-400
                  [&_strong]:text-white
                  [&_code]:bg-dark-700 [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-primary
                  [&_table]:w-full [&_table]:text-sm [&_table]:mt-4
                  [&_th]:text-left [&_th]:text-gray-400 [&_th]:pb-2 [&_th]:border-b [&_th]:border-dark-600
                  [&_td]:py-2 [&_td]:text-gray-300"
                                                                                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                                                                      />
                                                            </motion.article>

                                                            {/* Share */}
                                                            <motion.div
                                                                      variants={fadeUp}
                                                                      initial="hidden"
                                                                      animate="show"
                                                                      className="flex items-center gap-6 mt-12 pt-8 border-t border-dark-600"
                                                            >
                                                                      <span className="text-gray-400 flex items-center gap-2">
                                                                                <FiShare2 />
                                                                                Share:
                                                                      </span>
                                                                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                                                                <FiTwitter className="w-5 h-5" />
                                                                      </a>
                                                                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                                                                <FiLinkedin className="w-5 h-5" />
                                                                      </a>
                                                            </motion.div>
                                                  </div>
                                        </div>
                              </section>
                    </motion.div>
          );
}

export default BlogPost;
