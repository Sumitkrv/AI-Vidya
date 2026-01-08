
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-black': '#0B0B0F',
        'royal-purple': '#7B3FE4',
        'electric-violet': '#A855F7',
        'soft-white': '#F5F5F7',
        
        // Accent Colors
        'neon-green': '#9DFF00',
        'soft-blue': '#6EE7F9',
        'warm-pink': '#FF6EC7',
        
        // Dark Neutrals
        'dark': {
          900: '#0F0F14',
          800: '#18181F',
          700: '#2A2A35',
          600: '#3F3F4C',
          500: '#71717A',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7B3FE4 0%, #A855F7 100%)',
        'gradient-neon': 'linear-gradient(135deg, #9DFF00 0%, #6EE7F9 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #A855F7 0%, #FF6EC7 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0B0B0F 0%, #1A1A2E 100%)',
      },
      boxShadow: {
        'purple-glow': '0 0 40px rgba(123, 63, 228, 0.6)',
        'blue-glow': '0 0 40px rgba(110, 231, 249, 0.5)',
        'neon-glow': '0 0 40px rgba(157, 255, 0, 0.5)',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(123, 63, 228, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(123, 63, 228, 0.8)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
