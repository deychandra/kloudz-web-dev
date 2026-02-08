import { motion } from "framer-motion";
import {
  FiGlobe,
  FiUsers,
  FiCode,
  FiHeart,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";
import { pageTransition, staggerContainer, fadeUp } from "../utils/animations";
import SectionHeading from "../components/ui/SectionHeading";
import CinematicHero from "../components/sections/CinematicHero";
import Stats from "../components/sections/Stats";
import CTA from "../components/sections/CTA";
import SEO from "../components/common/SEO";
import { Crown, Cpu, Rocket, Handshake } from "lucide-react";

const story = [
  {
    year: "2015",
    title: "Founded",
    description:
      "Started with a small team of 5 passionate engineers in Bangalore.",
  },
  {
    year: "2017",
    title: "Global Expansion",
    description: "Expanded to serve clients across 10+ countries.",
  },
  {
    year: "2019",
    title: "Enterprise Focus",
    description:
      "Shifted focus to enterprise-grade solutions and dedicated teams.",
  },
  {
    year: "2021",
    title: "100+ Engineers",
    description: "Crossed 100 engineers milestone with offices in 3 countries.",
  },
  {
    year: "2023",
    title: "AI & Automation",
    description:
      "Launched dedicated AI practice to help clients leverage generative AI.",
  },
  {
    year: "Today",
    title: "200+ Professionals",
    description:
      "Serving 50+ clients across 15 countries with world-class engineering.",
  },
];

const values = [
  {
    icon: FiCode,
    title: "Engineering Excellence",
    description:
      "We take pride in writing clean, maintainable code that scales.",
  },
  {
    icon: FiUsers,
    title: "Client Partnership",
    description:
      "We treat every client project as if it were our own business.",
  },
  {
    icon: FiHeart,
    title: "Developer Experience",
    description:
      "Happy developers build better products. We invest in our team.",
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Learning",
    description:
      "Technology evolves fast. We never stop learning and improving.",
  },
  {
    icon: FiGlobe,
    title: "Global Mindset",
    description:
      "We work across timezones and cultures with empathy and respect.",
  },
  {
    icon: FiAward,
    title: "Quality First",
    description: "We never compromise on quality. Every line of code matters.",
  },
];

const leadershipTracks = [
  {
    role: "Founder’s Office",
    focus: "Vision, partnerships, and long-term strategy.",
    metrics: ["15+ global partners", "5 strategic bets", "3 new markets"],
    icon: Crown,
  },
  {
    role: "Technology Council",
    focus: "Architecture, security, and engineering excellence.",
    metrics: ["200+ engineers", "99.95% uptime", "50+ audits passed"],
    icon: Cpu,
  },
  {
    role: "Delivery Guild",
    focus: "Execution, quality, and continuous improvement.",
    metrics: ["140+ releases/yr", "92 NPS score", "48 hr onboarding"],
    icon: Rocket,
  },
  {
    role: "Growth & Success",
    focus: "Client success, outcomes, and expansion.",
    metrics: ["50+ enterprise clients", "12yr avg tenure", "8x ROI wins"],
    icon: Handshake,
  },
];

const offices = [
  {
    city: "Bangalore, India",
    type: "HQ & Engineering Center",
    size: "150+ engineers",
  },
  {
    city: "Hyderabad, India",
    type: "Development Center",
    size: "30+ engineers",
  },
  {
    city: "San Francisco, USA",
    type: "Sales & Client Success",
    size: "Sales team",
  },
];

function About() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <SEO
        title="About Us - Global IT Services & Engineering Partner"
        description="Learn about Kloudz Computing's journey from a small team to a global engineering partner. 200+ professionals serving 50+ clients across 15 countries since 2015."
        keywords="about Kloudz Computing, IT company history, software development company, global engineering team, offshore development company"
        canonical="https://kloudz.com/about"
      />

      {/* Cinematic Hero Section */}
      <CinematicHero
        tag="About Us"
        title={
          <>
            <span className="word inline-block">We</span>{" "}
            <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-cyan to-accent-purple">
              Build
            </span>{" "}
            <span className="word inline-block">Products</span>{" "}
            <span className="word inline-block">&</span>{" "}
            <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-primary to-accent-cyan">
              Scale
            </span>{" "}
            <span className="word inline-block">Teams</span>
          </>
        }
        subtitle={
          <>
            Kloudz Computing is a global IT services company helping{" "}
            <span className="text-primary font-medium">startups</span> and{" "}
            <span className="text-accent-purple font-medium">enterprises</span>{" "}
            build world-class products and engineering teams.
          </>
        }
        variant="purple"
      />

      {/* Stats */}
      <Stats />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="History"
            title="Our Story"
            description="From a small team to a global engineering partner."
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-dark-600 md:-translate-x-1/2" />

            <div className="space-y-12">
              {story.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  custom={index}
                  className={`relative flex items-start gap-6 md:gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Year circle */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-dark-900 border-2 border-primary text-primary text-sm font-bold">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}
                  >
                    <div className="glass-card p-6 inline-block">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-wide">
          <SectionHeading
            tag="Culture"
            title="Our Values"
            description="The principles that guide everything we do."
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  custom={index}
                  className="glass-card p-6 group hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Team"
            title="Leadership"
            description="Meet the people driving our vision."
            className="mb-12"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-stretch"
          >
            <motion.div
              variants={fadeUp}
              className="lg:col-span-5 glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.45),transparent_60%)]" />
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">
                  Leadership
                </p>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  A leadership model built on outcomes, not titles.
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  We organize leadership around accountability pillars that
                  drive product impact, delivery excellence, and sustained
                  client success.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4">
                    <p className="text-xs text-gray-500">Avg. Delivery</p>
                    <p className="text-2xl font-semibold text-white">8 weeks</p>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-xs text-gray-500">Client Retention</p>
                    <p className="text-2xl font-semibold text-white">96%</p>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-xs text-gray-500">Leadership Tenure</p>
                    <p className="text-2xl font-semibold text-white">10 yrs</p>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-xs text-gray-500">Active Programs</p>
                    <p className="text-2xl font-semibold text-white">24</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
              {leadershipTracks.map((track, index) => (
                <motion.div
                  key={track.role}
                  variants={fadeUp}
                  custom={index}
                  className="glass-card p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 via-accent-cyan/20 to-accent-purple/30 border border-white/10 flex items-center justify-center">
                      <track.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {track.role}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{track.focus}</p>
                  <div className="flex flex-wrap gap-2">
                    {track.metrics.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 rounded-full bg-dark-800/70 text-gray-300 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-wide">
          <SectionHeading
            tag="Locations"
            title="Our Offices"
            className="mb-12"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                variants={fadeUp}
                custom={index}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {office.city}
                </h3>
                <p className="text-primary text-sm mb-1">{office.type}</p>
                <p className="text-xs text-gray-500">{office.size}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Join Our Journey"
        description="We're always looking for talented engineers to join our team."
        primaryCTA={{ text: "View Careers", href: "/careers" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
      />
    </motion.div>
  );
}

export default About;
