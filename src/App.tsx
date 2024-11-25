import { useState } from 'react';
import { ButtonPreview } from './components/ButtonPreview';
import { ConfigPanel } from './components/ConfigPanel';
import { CodePreview } from './components/CodePreview';
import { Wand2 } from 'lucide-react';

function App() {
  const [config, setConfig] = useState<ButtonConfig>({
    text: 'Click Me',
    clickedText: 'Amazing!',
    gradient: true,
    glow: true,
    showDecorative: true,
    decorationType: 'stars',
    decorativePosition: 'center',
    showIcon: true,
    iconType: 'heart',
    iconAnimation: 'pulse',
    showExplosion: true,
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
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <img className='h-auto w-20 grayscale' src="../public/logo2.gif" alt="logo" />
            <h1 className="text-2xl font-bold text-gray-900">Pleasant Button Generator</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ButtonPreview config={config} onClick={handleButtonClick} />
            <ConfigPanel config={config} onConfigChange={handleConfigChange} />
          </div>
          <div>
            <CodePreview config={config} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;