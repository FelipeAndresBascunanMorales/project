import { motion } from "framer-motion";

export default function AnimatedLogo(){
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="90"
      height="90"
      initial={{ scale: 1 }}
      animate={{ scale: 1.05 }}
      transition={{
        duration: 2,
        repeat: 1,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {/* Background Gradient Circle */}
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ec48e8" />
          <stop offset="100%" stopColor="#a855f7" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#bgGradient)" />

      {/* Waves */}
      <motion.path
        d="M0 100 Q50 50 100 100 T200 100"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        animate={{
          translateY: [0, 10, 0],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M0 120 Q50 70 100 120 T200 120"
        fill="none"
        stroke="#ffe6f0"
        strokeWidth="2"
        animate={{
          translateY: [0, -10, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkles */}
      <motion.circle
        cx="60"
        cy="60"
        r="3"
        fill="#ffffff"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          translateY: [-10, -30, -10],
          translateX: [0, 10, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="140"
        cy="140"
        r="3.5"
        fill="#8a2be2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          translateY: [-5, -20, -5],
          translateX: [5, -5, 5],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="100"
        cy="50"
        r="2.5"
        fill="#ffd1dc"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          translateY: [0, -15, 0],
          translateX: [0, 5, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 2.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo Text */}
      

      <motion.text
        x="50%"
        y="45%"
        textAnchor="middle"
        fontSize="32"
        fontWeight="bold"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          translateY: [10, 0],
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          repeat: 0,
          repeatDelay: 3,
        }}
      >
        Sparkle
      </motion.text>

      <motion.text
        x="50%"
        y="65%"
        textAnchor="middle"
        fontSize="32"
        fontWeight="bold"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          translateY: [10, 0],
        }}
        transition={{
          duration: 0.9,
          repeat: 0,
          repeatDelay: 3,
        }}
      >
        Buttons
      </motion.text>
    </motion.svg>
    
  );
};
