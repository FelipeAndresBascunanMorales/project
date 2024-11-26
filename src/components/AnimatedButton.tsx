import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


export const AnimatedButton = () => {
  const [clicked, setClicked] = useState(false);

  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: '0 0 20px rgba(var(--button-rgb), 0.5)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(var(--button-rgb), 0.8)',
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.button
      className={`
        px-8 py-3 text-lg font-medium rounded-full
        bg-gradient-to-r from-purple-500 to-pink-500
        text-white transform
      `}
      variants={buttonVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      onClick={() => setClicked(true)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={clicked ? 'clicked' : 'default'}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
        >
          {clicked ? "Amazing!" : "Click Me"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};