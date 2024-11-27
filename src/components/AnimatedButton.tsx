import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart } from 'lucide-react'
import { Star } from 'lucide-react'

  const decorativeElements = Array.from({ length: 6 }).map((_, i) => {
    const position = {
        x: Math.cos((i * 60) * (Math.PI / 180)) * 50,
        y: Math.sin((i * 60) * (Math.PI / 180)) * 50,
      };
    return (
      <motion.div
        key={i}
        className="absolute"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          x: position.x,
          y: position.y,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      >
        <Star className="w-4 h-4 text-yellow-400" />
        
      </motion.div>
    );
  });
  
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
    <div className="relative flex items-center justify-center w-max rounded-full">
      {decorativeElements}
    <motion.button
      className={`
        relative px-8 py-3 text-lg font-medium rounded-full
        bg-gradient-to-r from-purple-500 to-pink-500
        text-white transform
      `}
      style={{
        '--button-rgb': '129, 140, 248',
      } as React.CSSProperties}
      variants={buttonVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      onClick={() => setClicked(true)}
    >
      <div className="flex items-center space-x-2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            transition: { duration: 1.5, repeat: Infinity },
  }}
          className="mr-2"
        >
          <Heart className="w-5 h-5" />
        </motion.div>
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
      </div>
      {clicked && (<motion.div
        className="absolute inset-0 bg-white rounded-full mix-blend-overlay"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: [1, 2],
            opacity: [1, 0],
            transition: { duration: 0.5 },
          },
        }}
        initial="hidden"
        animate="visible"
      />)}
      
    </motion.button>
    </div>
  );
};