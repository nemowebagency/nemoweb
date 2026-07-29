import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoData, baseUrl } from '../config/seoConfig';

const SEO = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noindex = false,
}) => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const seoData = getSeoData(path);

    const finalTitle = title || seoData.title;
    const finalDescription = description || seoData.description;
    const finalKeywords = keywords || seoData.keywords;
    const finalImage = image || seoData.ogImage;
    const canonical = seoData.canonical;
    const locale = seoData.locale;
    const siteName = 'Nemo Web Agency';

    document.title = finalTitle;

    const updateMetaTag = (property, content, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${property}"]`
        : `meta[name="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    const updateLinkTag = (rel, href) => {
      const selector = `link[rel="${rel}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }

      element.setAttribute('href', href);
    };

    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', 'Nemo Web Agency');
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:image', finalImage, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', locale, true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', finalImage);
    updateMetaTag('twitter:site', '@nemoagency');

    updateLinkTag('canonical', canonical);

    let jsonLdScript = document.querySelector(
      'script[type="application/ld+json"][data-seo]'
    );
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      jsonLdScript.setAttribute('data-seo', 'true');
      document.head.appendChild(jsonLdScript);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: baseUrl,
      logo: `${baseUrl}/logo-512x512.png`,
      description: finalDescription,
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+39-XXX-XXX-XXXX',
        contactType: 'customer service',
        availableLanguage: ['Italian'],
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IT',
        addressRegion: 'Sicilia',
      },
    };

    if (path !== '/') {
      structuredData['@type'] = 'WebPage';
      structuredData.name = finalTitle;
      structuredData.description = finalDescription;
      structuredData.url = canonical;
      structuredData.inLanguage = 'it-IT';
      structuredData.isPartOf = {
        '@type': 'WebSite',
        name: siteName,
        url: baseUrl,
      };
    }

    jsonLdScript.textContent = JSON.stringify(structuredData);
    document.documentElement.lang = 'it';
  }, [path, title, description, keywords, image, type, noindex]);

  return null;
};

export default SEO;
