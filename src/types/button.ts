declare global {
  interface ButtonConfig {
    text: string;
    clickedText: string;
    gradient: boolean;
    glow: boolean;
    showDecorative: boolean;
    decorationType: 'stars' | 'sparkles';
    decorativePosition: 'left' | 'right' | 'center';
    showIcon: boolean;
    iconType: 'bell' | 'heart' | 'phone';
    iconAnimation: 'pulse' | 'bounce' | 'spin';
    showExplosion: boolean;
    clicked: boolean;
  }
}

export {};