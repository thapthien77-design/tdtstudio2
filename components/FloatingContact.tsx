import React from 'react';
import { Phone } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

const FloatingContact: React.FC = () => {
  const { settings } = useSettings();
  
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div className="relative group">
        {/* Pulsing effect */}
        <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main Button */}
        <a 
          href={`tel:${settings.hotline.replace(/\s/g, '')}`}
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:scale-110 transition-transform duration-300 z-10"
          aria-label="Call Hotline"
        >
          <Phone className="w-6 h-6 text-dark-900 animate-pulse-slow" />
        </a>

        {/* Tooltip */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-white text-dark-900 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Hotline: {settings.hotline}
          {/* Little triangle for tooltip */}
          <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;