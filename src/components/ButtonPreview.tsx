import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Bell, Heart, Phone } from 'lucide-react';

interface ButtonPreviewProps {
  config: ButtonConfig;
  onClick: () => void;
}

const icons = {
  Bell: Bell,
  Heart: Heart,
  Phone: Phone,
};

const iconAnimations = {
  pulse: {
    scale: [1, 1.2, 1],
    transition: { duration: 1.5, repeat: Infinity },
  },
  bounce: {
    y: [0, -5, 0],
    transition: { duration: 1, repeat: Infinity },
  },
  spin: {
    rotate: [0, 360],
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
};

export const ButtonPreview: React.FC<ButtonPreviewProps> = ({ config, onClick }) => {
  
  const Icon = config.showIcon ? icons[config.iconType] : null;

  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: config.glow ? '0 0 20px rgba(var(--button-rgb), 0.5)' : 'none',
    },
    hover: {
      scale: 1.05,
      boxShadow: config.glow ? '0 0 30px rgba(var(--button-rgb), 0.8)' : 'none',
    },
    tap: {
      scale: 0.95,
    },
  };

  const getDecorativePosition = (index: number) => {
    const radius = 50;
    const angle = (index * 60) * (Math.PI / 180);
    
    switch (config.decorativePosition) {
      case 'left':
        return {
          x: -50 + Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
      case 'right':
        return {
          x: 50 + Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
      default:
        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
    }
  };

  const decorativeElements = Array.from({ length: 6 }).map((_, i) => {
    const position = getDecorativePosition(i);
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
        {config.decorationType === 'star' ? (
          <Star className="w-4 h-4 text-yellow-400" />
        ) : (
          <Sparkles className="w-4 h-4 text-purple-400" />
        )}
      </motion.div>
    );
  });


  const explosionVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1, 2],
      opacity: [1, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative flex items-center justify-center w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
      {config.showDecorative && decorativeElements}
      <motion.button
        className={`
          relative px-8 py-3 text-lg font-medium rounded-full
          ${config.gradient ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
          ${!config.gradient ? 'bg-blue-500' : ''}
          text-white transform
        `}
        style={{
          '--button-rgb': '129, 140, 248',
        } as React.CSSProperties}
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          {config.showIcon && Icon && (
            <motion.div
              animate={iconAnimations[config.iconAnimation]}
              className="mr-2"
            >
              <Icon className="w-5 h-5" />
            </motion.div>
          )}
          <AnimatePresence mode="wait">
            <motion.span
              key={config.clicked ? 'clicked' : 'default'}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {config.clicked ? config.clickedText : config.text}
            </motion.span>
          </AnimatePresence>
        </div>
        {config.showExplosion && config.clicked && (
          <motion.div
            className="absolute inset-0 bg-white rounded-full mix-blend-overlay"
            variants={explosionVariants}
            initial="hidden"
            animate="visible"
          />
        )}
      </motion.button>
    </div>
  );
};