import { useState } from 'react';
import { ButtonPreview } from './components/ButtonPreview';
import { ConfigPanel } from './components/ConfigPanel';
import { CodePreview } from './components/CodePreview';
import AnimatedLogo from './components/ui/AnimatedLogo';
import { AnimatedButton } from './components/AnimatedButton';

function App() {
  const [config, setConfig] = useState<ButtonConfig>({
    text: 'Click Me',
    clickedText: 'Amazing!',
    gradient: true,
    glow: true,
    showDecorative: true,
    decorationType: 'star',
    decorativePosition: 'center',
    showIcon: true,
    iconType: 'Heart',
    iconAnimation: 'pulse',
    showExplosion: true,
    showRewrite: false,
    rotateIcon: false,
    clicked: false,
  });

  const handleConfigChange = (newConfig: Partial<ButtonConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const handleButtonClick = () => {
    setConfig((prev) => ({ ...prev, clicked: true }));
    setTimeout(() => {
      setConfig((prev) => ({ ...prev, clicked: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <AnimatedLogo />
            <h1 className="text-2xl font-bold text-gray-800">Pleasant Button Generator for React</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ConfigPanel config={config} onConfigChange={handleConfigChange} />
          </div>
          <div className="space-y-8">
            {import.meta.env.MODE === 'development' && (
              <div>
                <AnimatedButton />
              </div>
            )}
            <ButtonPreview config={config} onClick={handleButtonClick} />
            <CodePreview config={config} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;