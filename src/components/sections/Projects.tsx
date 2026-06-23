"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Github, ExternalLink, X, Star } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/resume";

type FilterTab = "All" | ProjectCategory;
const tabs: FilterTab[] = ["All", "Web", "AI", "Systems"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const categoryColors: Record<ProjectCategory, string> = {
  Web: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
  AI: "text-accent-violet border-accent-violet/30 bg-accent-violet/10",
  Systems: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative z-10 glass-card rounded-2xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 20 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span
                className={`inline-block px-2 py-0.5 rounded text-xs font-medium border mb-3 ${
                  categoryColors[project.category]
                }`}
              >
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors p-1 rounded-lg hover:bg-white/5"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Description */}
          <p className="text-text-muted leading-relaxed mb-6">{project.fullDescription}</p>

          {/* Highlights */}
          <div className="mb-6">
            <p className="text-text-primary text-sm font-semibold mb-3 uppercase tracking-wider">
              Key Highlights
            </p>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-text-muted text-sm">
                  <span className="text-accent-cyan mt-1 flex-shrink-0">→</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mb-6">
            <p className="text-text-primary text-sm font-semibold mb-3 uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-sm bg-white/5 text-text-muted border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-text-muted text-sm hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-200"
              >
                <Github size={15} />
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-bg-base transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      layout
      variants={fadeUp}
      className="glass-card rounded-2xl border border-white/5 overflow-hidden cursor-pointer group relative"
      onClick={onClick}
      whileHover={{ y: -6, boxShadow: "0 0 30px rgba(6,182,212,0.15)" }}
      transition={{ duration: 0.25 }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan">
            <Star size={10} fill="currentColor" />
            Featured
          </span>
        </div>
      )}

      {/* Card gradient header */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
      />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span
            className={`px-2 py-0.5 rounded text-xs font-medium border ${
              categoryColors[project.category]
            }`}
          >
            {project.category}
          </span>
        </div>

        <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent-cyan transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs bg-white/5 text-text-muted border border-white/5"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs text-text-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <p className="text-accent-cyan text-xs font-medium group-hover:gap-2 transition-all">
          View details →
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-12">
            <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-2">
              What I&apos;ve Built
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Projects
            </h2>
            <p className="text-text-muted max-w-xl">
              A selection of projects spanning full-stack web development, AI/ML systems, and
              mobile applications. Click any card for a deeper technical breakdown.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "text-bg-base"
                    : "text-text-muted border border-white/10 hover:border-white/20 hover:text-text-primary"
                }`}
                style={
                  activeTab === tab
                    ? { background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }
                    : {}
                }
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
