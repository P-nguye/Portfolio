"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download, Eye, User } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/resume";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="blob absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="blob absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-violet"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="blob absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan"
          style={{ animationDelay: "5s", opacity: 0.08 }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={item} className="inline-flex">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan tracking-wider uppercase">
              Available for opportunities
            </span>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-text-muted text-lg mb-1">Hi, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              <span className="gradient-text">Phong</span>
              <br />
              <span className="text-text-primary">Nguyen</span>
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-xl sm:text-2xl text-text-muted font-light">
              <span className="text-accent-cyan font-medium">Full-Stack Developer</span>
              {" & "}
              <span className="text-accent-violet font-medium">AI Engineer</span>
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="text-text-muted text-base leading-relaxed max-w-lg"
          >
            CS graduate from UBC Okanagan. I build scalable web applications with Next.js &
            TypeScript and solve complex problems with AI and computer vision.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <motion.button
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-bg-base"
              style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Eye size={16} />
              View Projects
            </motion.button>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-text-primary text-sm font-medium hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5">
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Pulsing glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                padding: "3px",
                animation: "pulse-ring 3s ease-in-out infinite",
              }}
              aria-hidden
            />
            {/* Outer ring */}
            <div
              className="relative rounded-full p-1"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              }}
            >
              <div className="rounded-full overflow-hidden w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-bg-surface flex items-center justify-center">
                {photoError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-text-muted text-sm"
                    style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.06), rgba(139,92,246,0.06))" }}>
                    <User size={48} className="text-accent-cyan/50" />
                    <span className="text-xs">Add photo to public/</span>
                  </div>
                ) : (
                  <Image
                    src="/photo.jpg"
                    alt="Tien Phong Nguyen"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                    onError={() => setPhotoError(true)}
                  />
                )}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 px-3 py-2 rounded-lg glass-card border border-white/10 text-xs font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              style={{ animation: "float 6s ease-in-out infinite 1.2s" }}
            >
              <span className="text-accent-cyan">BSc. CS</span>{" "}
              <span className="text-text-muted">@ UBC</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-muted/50"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
