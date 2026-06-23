"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown } from "lucide-react";
import { timeline, type TimelineEntry } from "@/data/resume";

type TabType = "Experience" | "Education";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = entry.type === "work" ? Briefcase : GraduationCap;
  const iconColor = entry.type === "work" ? "text-accent-cyan" : "text-accent-violet";
  const iconBg = entry.type === "work" ? "bg-accent-cyan/10 border-accent-cyan/20" : "bg-accent-violet/10 border-accent-violet/20";

  return (
    <motion.div variants={fadeUp} className="relative flex gap-6 group">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <motion.div
          className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center ${iconBg} z-10`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon size={18} className={iconColor} />
        </motion.div>
        {/* Vertical line (hidden on last item via parent styling) */}
        <div className="w-px flex-1 timeline-line mt-2 opacity-30 group-last:hidden" />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1 min-w-0">
        <motion.div
          className="glass-card rounded-xl border border-white/5 overflow-hidden cursor-pointer"
          whileHover={{ boxShadow: "0 0 20px rgba(6,182,212,0.1)" }}
          transition={{ duration: 0.2 }}
          onClick={() => setExpanded((e) => !e)}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5">
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-text-primary font-semibold">{entry.title}</h3>
                {entry.org === "Independent Contractor" || entry.endDate === "Present" ? (
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
                    Current
                  </span>
                ) : null}
              </div>
              <p className="text-text-muted text-sm">
                {entry.org} · {entry.location}
              </p>
              <p className="text-text-muted/60 text-xs mt-1 font-mono">
                {entry.startDate} — {entry.endDate}
              </p>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-text-muted flex-shrink-0"
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>

          {/* Expandable details */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 border-t border-white/5 pt-4 space-y-3">
                  <ul className="space-y-2">
                    {entry.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.3 }}
                        className="flex items-start gap-2 text-text-muted text-sm leading-relaxed"
                      >
                        <span className="text-accent-cyan mt-1.5 flex-shrink-0 text-xs">▸</span>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>

                  {entry.tech && entry.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {entry.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-xs bg-white/5 text-text-muted border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<TabType>("Experience");

  const entries = timeline.filter((e) =>
    activeTab === "Experience" ? e.type === "work" : e.type === "education"
  );

  return (
    <section id="timeline" className="py-24 px-6 bg-bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-2">
              My Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Experience & Education
            </h2>
            <p className="text-text-muted">
              Click any entry to expand and see detailed achievements and contributions.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeUp} className="flex gap-2 mb-10">
            {(["Experience", "Education"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "text-bg-base"
                    : "text-text-muted border border-white/10 hover:border-white/20 hover:text-text-primary"
                }`}
                style={
                  activeTab === tab
                    ? { background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }
                    : {}
                }
              >
                {tab === "Experience" ? <Briefcase size={15} /> : <GraduationCap size={15} />}
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Timeline entries */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              {entries.map((entry) => (
                <TimelineItem key={entry.id} entry={entry} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
