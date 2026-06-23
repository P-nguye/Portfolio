"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, GraduationCap, Code2, Award } from "lucide-react";
import { personalInfo, awards } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { icon: Code2, value: "6+", label: "Projects Built" },
  { icon: GraduationCap, value: "BSc.", label: "CS @ UBC Okanagan" },
  { icon: Trophy, value: "2nd", label: "AI Tournament Rank" },
  { icon: Award, value: "2", label: "Scholarships Awarded" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Section heading */}
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-2">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
              Who I Am
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-text-muted text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-text-muted leading-relaxed">
                Born in Vietnam and studying in Canada, I bring a global perspective to software
                engineering. I&apos;m passionate about building things that are both technically
                rigorous and genuinely useful — from AI pipelines that detect pedestrians in the
                wild, to web platforms that help universities manage resources efficiently.
              </p>
              <p className="text-text-muted leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring how AI can be applied to
                real social challenges — like the wildfire-detection app I built at a UBC hackathon
                to support public safety.
              </p>

              {/* Quick facts */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["Available for work", "Kelowna, BC", "Open to relocation"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats + Awards */}
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <motion.div
                    key={label}
                    className="glass-card rounded-xl p-5 group"
                    whileHover={{ y: -4, boxShadow: "0 0 20px rgba(6,182,212,0.15)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={20} className="text-accent-cyan mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl font-bold gradient-text">{value}</p>
                    <p className="text-text-muted text-sm mt-1">{label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Awards */}
              <div className="space-y-3">
                <p className="text-text-muted text-sm font-medium uppercase tracking-wider mb-4">
                  Achievements
                </p>
                {awards.map((award) => (
                  <motion.div
                    key={award.title}
                    className="glass-card rounded-lg px-4 py-3 flex items-start gap-3 group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Trophy size={16} className="text-accent-cyan mt-0.5 flex-shrink-0 group-hover:text-accent-violet transition-colors" />
                    <div>
                      <p className="text-text-primary text-sm font-medium">{award.title}</p>
                      <p className="text-text-muted text-xs mt-0.5">
                        {award.org} · {award.period}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
