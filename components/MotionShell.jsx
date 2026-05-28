"use client";

import { motion } from "framer-motion";

export function MotionShell({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatOrb({ className = "", delay = 0 }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full border border-white/15 bg-white/5 backdrop-blur-xl ${className}`}
      animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 5.5, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
