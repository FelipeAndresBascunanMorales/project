import React from 'react';
import { Copy } from 'lucide-react';

interface CodePreviewProps {
  config: ButtonConfig;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ config }) => {
  const generateCode = () => {
    return `import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.button
      className={\`
        px-8 py-3 text-lg font-medium rounded-full
        ${config.gradient ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-blue-500'}
        text-white transform
      \`}
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
          {clicked ? "${config.clickedText}" : "${config.text}"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Generated Code</h2>
        <button
          onClick={copyToClipboard}
          className="flex items-center px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy Code
        </button>
      </div>
      <pre className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
        <code className="text-sm text-gray-100">{generateCode()}</code>
      </pre>
    </div>
  );
};