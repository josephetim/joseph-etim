"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  [8, 18],
  [22, 34],
  [38, 15],
  [53, 42],
  [68, 22],
  [84, 36],
  [16, 70],
  [35, 62],
  [58, 76],
  [79, 66],
] as const;

export function MotionBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <motion.div
        className="absolute -left-[15vw] top-[5vh] h-[48rem] w-[48rem] rounded-full bg-indigo-500/[0.08] blur-[120px]"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, 80, 15, 0], y: [0, 35, 90, 0], scale: [1, 1.08, 0.96, 1] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[20vw] top-[35vh] h-[44rem] w-[44rem] rounded-full bg-teal-600/[0.055] blur-[130px]"
        animate={
          reducedMotion
            ? undefined
            : { x: [0, -70, -20, 0], y: [0, 60, -25, 0], scale: [1, 0.94, 1.06, 1] }
        }
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        className="absolute inset-x-0 top-20 h-[44rem] w-full opacity-[0.16] dark:opacity-[0.2]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="0.5" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="1" stopColor="#0d9488" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M8 18 C20 12 26 42 38 15 S54 55 68 22 S77 26 84 36"
          fill="none"
          stroke="url(#network-line)"
          strokeWidth="0.12"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: reducedMotion ? 0 : 3, ease: "easeOut" }}
        />
        <motion.path
          d="M16 70 C24 53 29 72 35 62 S49 56 58 76 S70 56 79 66"
          fill="none"
          stroke="url(#network-line)"
          strokeWidth="0.1"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{
            duration: reducedMotion ? 0 : 3.5,
            delay: reducedMotion ? 0 : 0.4,
            ease: "easeOut",
          }}
        />
        {nodes.map(([x, y], index) => (
          <motion.circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="0.42"
            fill={index % 3 === 0 ? "#2dd4bf" : "#818cf8"}
            vectorEffect="non-scaling-stroke"
            animate={
              reducedMotion
                ? undefined
                : { opacity: [0.28, 0.9, 0.28], r: [0.32, 0.5, 0.32] }
            }
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.25,
            }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-canvas/10 to-canvas" />
    </div>
  );
}
