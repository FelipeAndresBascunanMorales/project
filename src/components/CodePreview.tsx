import React from 'react';
import { Copy } from 'lucide-react';

interface CodePreviewProps {
  config: ButtonConfig;
}

const iconAnimations = {
  pulse: `{
            scale: [1, 1.2, 1],
            transition: { duration: 1.5, repeat: Infinity },
  }`,
  bounce: `{
            y: [0, -5, 0],
            transition: { duration: 1, repeat: Infinity },
  }`,
  spin: `{
            rotate: [0, 360],
            transition: { duration: 2, repeat: Infinity, ease: "linear" },
  }`
};


const getDecorativePosition = {
  'left': `{
        x: -50 + Math.cos((i * 60) * (Math.PI / 180)) * 50,
        y: Math.sin((i * 60) * (Math.PI / 180)) * 50,
      }`,
    'right': `{
        x: 50 + Math.cos((i * 60) * (Math.PI / 180)) * 50,
        y: Math.sin((i * 60) * (Math.PI / 180)) * 50,
      }`,
    'center': `{
        x: Math.cos((i * 60) * (Math.PI / 180)) * 50,
        y: Math.sin((i * 60) * (Math.PI / 180)) * 50,
      }`
  };



export const CodePreview: React.FC<CodePreviewProps> = ({ config }) => {

  const decorationFunction = config.showDecorative ? `
  const decorativeElements = Array.from({ length: 6 }).map((_, i) => {
    const position = ${getDecorativePosition[config.decorativePosition]};
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
        ${config.showDecorative && config.decorationType === 'star' ? `<Star className="w-4 h-4 text-yellow-400" />` : ''}
        ${config.showDecorative && config.decorationType === 'sparkles' ? `<Star className="w-4 h-4 text-yellow-400" />` : ''}
      </motion.div>
    );
  });
  ` : '';

  const generateCode = () => {
    return `import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
${config.showIcon ? `import { ${config.iconType} } from 'lucide-react'` : ''}
${config.showDecorative ? `import { ${(config.decorationType[0].toUpperCase() + config.decorationType.slice(1))} } from 'lucide-react'` : ''}
${decorationFunction}
export const AnimatedButton = () => {
  const [clicked, setClicked] = useState(false);

  const buttonVariants = {
    idle: {
      scale: 1,
      ${config.glow ? "boxShadow: '0 0 20px rgba(var(--button-rgb), 0.5)'," : ''}
    },
    hover: {
      scale: 1.05,
      ${config.glow ? "boxShadow: '0 0 30px rgba(var(--button-rgb), 0.8)'," : ''}
    },
    tap: { scale: 0.95 },
  };

  return (
    ${config.showDecorative ? `<div className="relative flex items-center justify-center w-max rounded-full">
      {decorativeElements}` : ''}
    <motion.button
      className={\`
        relative px-8 py-3 text-lg font-medium rounded-full
        ${config.gradient ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-blue-500'}
        text-white transform
      \`}
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
        ${(config.showIcon && config.iconType) ? `<motion.div
          animate={${iconAnimations[config.iconAnimation]}}
          className="mr-2"
        >
          <${config.iconType} className="w-5 h-5" />
        </motion.div>` : ''
        }
        <AnimatePresence mode="wait">
          <motion.span
            key={clicked ? 'clicked' : 'default'}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            {clicked ? "${config.clickedText}" : "${config.text}"}
          </motion.span>
        </AnimatePresence>
      </div>
      ${(config.showExplosion) ? `{clicked && (<motion.div
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
      ` : ''}
    </motion.button>
    ${config.showDecorative ? `</div>` : ''}
  );
};`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Generated Code </h2>
        <button
          onClick={copyToClipboard}
          className="flex items-center px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
          >
          <Copy className="w-4 h-4 mr-2" />
          Copy Code
        </button>
      </div>
      <i>*npm install framer-motion lucide-react</i>
      <pre className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
        <code className="text-sm text-gray-100">{generateCode()}</code>
      </pre>
    </div>
  );
};