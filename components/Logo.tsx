import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>TDT Studio Logo</title>
    {/* Gold Background */}
    <rect width="100" height="100" rx="20" fill="#EAB308" />
    
    {/* Black Geometric Symbol (Isometric Hexagon/Cube) */}
    <g transform="translate(50 50) scale(0.6)">
      {/* Top Block */}
      <path 
        d="M0 -50 L43.3 -25 L0 0 L-43.3 -25 Z" 
        fill="#0A0A0A" 
      />
      {/* Right Block */}
      <path 
        d="M0 0 L43.3 -25 V25 L0 50 Z" 
        fill="#0A0A0A" 
      />
      {/* Left Block */}
      <path 
        d="M0 0 L0 50 L-43.3 25 V-25 Z" 
        fill="#0A0A0A" 
      />
      
      {/* Stylized gaps/cuts to match the provided image style */}
      <path d="M-2 -2 L-2 -48" stroke="#EAB308" strokeWidth="4" strokeLinecap="round"/>
      <path d="M2 -2 L41 -24" stroke="#EAB308" strokeWidth="4" strokeLinecap="round"/>
      <path d="M-2 2 L-41 24" stroke="#EAB308" strokeWidth="4" strokeLinecap="round"/>
    </g>
  </svg>
);
