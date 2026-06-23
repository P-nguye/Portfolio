"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const links = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    description: "Reach me directly",
    hoverColor: "hover:border-accent-cyan/40",
    iconColor: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
  },
  {
    label: "GitHub",
    value: "P-nguye",
    href: personalInfo.github,
    icon: Github,
    description: "See my code",
    hoverColor: "hover:border-white/20",
    iconColor: "text-text-primary",
    bgColor: "bg-white/5",
  },
  {
    label: "LinkedIn",
    value: "nguyen-phong",
    href: personalInfo.linkedin,
    icon: Linkedin,
    description: "Connect professionally",
    hoverColor: "hover:border-accent-violet/40",
    iconColor: "text-accent-violet",
    bgColor: "bg-accent-violet/10",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-6">
            <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Let&apos;s Build Something Together
            </h2>
          </motion.div>

          <motion.p variants={fadeUp} className="text-text-muted text-lg max-w-xl mx-auto mb-16">
            I&apos;m actively looking for full-stack and software engineering roles. Whether you have
            a project, an opportunity, or just want to connect — my inbox is open.
          </motion.p>

          {/* Contact cards */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            {links.map(({ label, value, href, icon: Icon, description, hoverColor, iconColor, bgColor }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={fadeUp}
                className={`glass-card rounded-2xl p-6 border border-white/5 ${hoverColor} transition-all duration-200 group text-left`}
                whileHover={{ y: -6, boxShadow: "0 0 30px rgba(6,182,212,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={iconColor} />
                </div>
                <p className="text-text-primary font-semibold mb-1">{label}</p>
                <p className="text-text-muted text-xs mb-3">{description}</p>
                <div className="flex items-center gap-1 text-text-muted text-sm group-hover:text-accent-cyan transition-colors duration-200">
                  <span className="truncate">{value}</span>
                  <ArrowRight size={14} className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA email button */}
          <motion.div variants={fadeUp}>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-bg-base"
              style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={18} />
              Say Hello
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
