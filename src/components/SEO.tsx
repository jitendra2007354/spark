import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

export const SEO = ({ title, description, keywords, canonical }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | Spark - Institutional Mobility Infrastructure`;
    
    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, attr: string = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', description);

    const baseKeywords = "Spark, Spark connect, Spark partner";
    const finalKeywords = keywords ? `${baseKeywords}, ${keywords}` : baseKeywords;
    updateMeta('keywords', finalKeywords);
    
    // Open Graph / Facebook
    updateMeta('og:type', 'website', 'property');
    updateMeta('og:url', window.location.href, 'property');
    updateMeta('og:title', `${title} | Spark`, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', 'https://picsum.photos/seed/spark-corporate/1200/630', 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:url', window.location.href);
    updateMeta('twitter:title', `${title} | Spark`);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', 'https://picsum.photos/seed/spark-corporate/1200/630');

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    } else {
      const defaultCanonical = window.location.origin + window.location.pathname;
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', defaultCanonical);
    }
  }, [title, description, canonical]);

  return null;
};
