"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Server, Brain, Code2 } from "lucide-react";
import { skills } from "@/data/resume";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  layout: Layout,
  server: Server,
  brain: Brain,
  code: Code2,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const categoryColors = [
  { border: "border-accent-cyan/20", glow: "rgba(6,182,212,0.1)", icon: "text-accent-cyan" },
  { border: "border-accent-violet/20", glow: "rgba(139,92,246,0.1)", icon: "text-accent-violet" },
  { border: "border-accent-cyan/20", glow: "rgba(6,182,212,0.1)", icon: "text-accent-cyan" },
  { border: "border-accent-violet/20", glow: "rgba(139,92,246,0.1)", icon: "text-accent-violet" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 bg-bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-2">
              What I Work With
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
              Skills & Technologies
            </h2>
          </motion.div>

          {/* Skill categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group, idx) => {
              const Icon = iconMap[group.icon] || Code2;
              const colors = categoryColors[idx % categoryColors.length];

              return (
                <motion.div
                  key={group.category}
                  variants={fadeUp}
                  className={`glass-card rounded-2xl p-6 border ${colors.border} group`}
                  whileHover={{
                    boxShadow: `0 0 30px ${colors.glow}`,
                    y: -2,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-2 rounded-lg"
                      style={{ background: colors.glow }}
                    >
                      <Icon size={18} className={colors.icon} />
                    </div>
                    <h3 className="text-text-primary font-semibold">{group.category}</h3>
                  </div>

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="flex flex-wrap gap-2"
                  >
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, scale: 0.85 },
                          show: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.3, ease: "easeOut" },
                          },
                        }}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 text-text-muted border border-white/5 hover:border-accent-cyan/30 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
