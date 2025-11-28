import React, { useEffect } from 'react';
import { useSettings } from '../context/SettingsContext';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "Thiết kế web, Lập trình App, Game Studio, TDT Studio, Công nghệ, Chuyển đổi số",
  image,
  url,
  type = 'website'
}) => {
  const { settings } = useSettings();
  const siteName = "TDT Studio";
  const defaultImage = settings.logoUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop";
  const currentUrl = url || window.location.href;
  const fullTitle = `${title} | ${siteName}`;

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteName,
    "alternateName": "TDT Technology & Services",
    "url": window.location.origin,
    "logo": settings.logoUrl,
    "image": defaultImage,
    "description": description,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": settings.address,
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "VN"
    },
    "telephone": settings.hotline,
    "email": settings.email,
    "founder": {
        "@type": "Person",
        "name": "Đức Thiên"
    },
    "areaServed": "Vietnam",
    "sameAs": [
      "https://facebook.com/tdtstudio",
      "https://linkedin.com/company/tdtstudio"
    ]
  };

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to update/create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOgTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // 4. Update Open Graph
    updateOgTag('og:type', type);
    updateOgTag('og:title', fullTitle);
    updateOgTag('og:description', description);
    updateOgTag('og:image', image || defaultImage);
    updateOgTag('og:url', currentUrl);
    updateOgTag('og:site_name', siteName);

    // 5. Update JSON-LD
    let script = document.querySelector('script[id="json-ld-seo"]');
    if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', 'json-ld-seo');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, [fullTitle, description, keywords, image, currentUrl, type, settings, structuredData]);

  return null;
};

export default SEO;