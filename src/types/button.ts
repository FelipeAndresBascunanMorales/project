declare global {
  interface ButtonConfig {
    text: string;
    clickedText: string;
    gradient: boolean;
    glow: boolean;
    showDecorative: boolean;
    decorationType: 'star' | 'sparkles';
    decorativePosition: 'left' | 'right' | 'center';
    showIcon: boolean;
    iconType: 'Bell' | 'Heart' | 'Phone';
    iconAnimation: 'pulse' | 'bounce' | 'spin';
    showExplosion: boolean;
    showRewrite: boolean;
    rotateIcon: boolean;
    clicked: boolean;
  }
}

export {};