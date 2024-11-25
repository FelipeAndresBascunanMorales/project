import React from 'react';
import { Star, Sparkles, Palette, Wand2, Bell, Heart, Phone, Layout } from 'lucide-react';

interface ConfigPanelProps {
  config: ButtonConfig;
  onConfigChange: (config: Partial<ButtonConfig>) => void;
}

export const ConfigPanel: React.FC<ConfigPanelProps> = ({ config, onConfigChange }) => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Customize Button</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Palette className="w-4 h-4 mr-2" />
            Style
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                config.gradient
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'border border-gray-300'
              }`}
              onClick={() => onConfigChange({ gradient: true })}
            >
              Gradient
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm ${
                !config.gradient
                  ? 'bg-blue-500 text-white'
                  : 'border border-gray-300'
              }`}
              onClick={() => onConfigChange({ gradient: false })}
            >
              Solid
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Wand2 className="w-4 h-4 mr-2" />
            Effects
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.glow}
                onChange={(e) => onConfigChange({ glow: e.target.checked })}
                className="rounded text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Glow Effect</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.showDecorative}
                onChange={(e) => onConfigChange({ showDecorative: e.target.checked })}
                className="rounded text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Show Decorative Elements</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.showExplosion}
                onChange={(e) => onConfigChange({ showExplosion: e.target.checked })}
                className="rounded text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Click Explosion</span>
            </label>
          </div>
        </div>

        {config.showDecorative && (
          <>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                Decorative Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  className={`flex items-center justify-center px-4 py-2 rounded-md text-sm ${
                    config.decorationType === 'stars'
                      ? 'bg-blue-500 text-white'
                      : 'border border-gray-300'
                  }`}
                  onClick={() => onConfigChange({ decorationType: 'stars' })}
                >
                  <Star className="w-4 h-4 mr-2" />
                  Stars
                </button>
                <button
                  className={`flex items-center justify-center px-4 py-2 rounded-md text-sm ${
                    config.decorationType === 'sparkles'
                      ? 'bg-blue-500 text-white'
                      : 'border border-gray-300'
                  }`}
                  onClick={() => onConfigChange({ decorationType: 'sparkles' })}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Sparkles
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Layout className="w-4 h-4 mr-2" />
                Position
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['left', 'center', 'right'].map((position) => (
                  <button
                    key={position}
                    className={`px-4 py-2 rounded-md text-sm ${
                      config.decorativePosition === position
                        ? 'bg-blue-500 text-white'
                        : 'border border-gray-300'
                    }`}
                    onClick={() => onConfigChange({ decorativePosition: position as any })}
                  >
                    {position.charAt(0).toUpperCase() + position.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            Icon
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.showIcon}
                onChange={(e) => onConfigChange({ showIcon: e.target.checked })}
                className="rounded text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Show Icon</span>
            </label>
          </div>

          {config.showIcon && (
            <>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {['bell', 'heart', 'phone'].map((type) => (
                  <button
                    key={type}
                    className={`flex items-center justify-center px-4 py-2 rounded-md text-sm ${
                      config.iconType === type
                        ? 'bg-blue-500 text-white'
                        : 'border border-gray-300'
                    }`}
                    onClick={() => onConfigChange({ iconType: type as any })}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 mt-2">
                {['pulse', 'bounce', 'spin'].map((animation) => (
                  <button
                    key={animation}
                    className={`px-4 py-2 rounded-md text-sm ${
                      config.iconAnimation === animation
                        ? 'bg-blue-500 text-white'
                        : 'border border-gray-300'
                    }`}
                    onClick={() => onConfigChange({ iconAnimation: animation as any })}
                  >
                    {animation.charAt(0).toUpperCase() + animation.slice(1)}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Button Text</label>
          <input
            type="text"
            value={config.text}
            onChange={(e) => onConfigChange({ text: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Button text"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Clicked Text</label>
          <input
            type="text"
            value={config.clickedText}
            onChange={(e) => onConfigChange({ clickedText: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Text after click"
          />
        </div>
      </div>
    </div>
  );
};