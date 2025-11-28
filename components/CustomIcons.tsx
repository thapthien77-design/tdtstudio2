import React from 'react';

export const WebDesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    {/* Code Brackets */}
    <path d="M7 8.5L5 10.5L7 12.5" strokeWidth="2" />
    <path d="M17 8.5L19 10.5L17 12.5" strokeWidth="2" />
    {/* Slash */}
    <line x1="13.5" y1="8" x2="10.5" y2="13" strokeWidth="2" />
    {/* UI Elements */}
    <rect x="4" y="5" width="2" height="2" rx="0.5" fill="currentColor" fillOpacity="0.3" stroke="none" />
    <rect x="7" y="5" width="2" height="2" rx="0.5" fill="currentColor" fillOpacity="0.3" stroke="none" />
  </svg>
);

export const AppDevIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Phone Body */}
    <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
    <line x1="11" y1="19" x2="13" y2="19" />
    {/* Floating Layers */}
    <path d="M4 8H20" strokeDasharray="2 2" opacity="0.5" />
    <rect x="5" y="6" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.1" />
    <rect x="15" y="12" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 5V15" strokeDasharray="1 3" />
    <circle cx="12" cy="11" r="2" />
    <circle cx="12" cy="11" r="5" strokeOpacity="0.2" />
  </svg>
);

export const GameDesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Controller Shape */}
    <path d="M21 12L19.8 17.5C19.5 18.8 18.3 19.8 16.9 19.8H7.1C5.7 19.8 4.5 18.8 4.2 17.5L3 12C2.6 10.5 3.5 9 5 9H19C20.5 9 21.4 10.5 21 12Z" />
    {/* D-Pad */}
    <path d="M6 13H8" />
    <path d="M7 12V14" />
    {/* Buttons */}
    <circle cx="16" cy="13" r="1" fill="currentColor" />
    <circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.5" />
    {/* 3D Cube Element emerging */}
    <path d="M12 2L15 4L12 6L9 4L12 2Z" />
    <path d="M9 4V7L12 9" />
    <path d="M15 4V7L12 9" />
    <path d="M12 9V12" strokeDasharray="2 2" />
  </svg>
);
