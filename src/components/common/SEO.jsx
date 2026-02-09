import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Manages all page metadata for search engines and social sharing
 * @param {Object} props
 * @param {string} props.title - Page title (max 60 chars)
 * @param {string} props.description - Meta description (max 160 chars)
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} props.canonical - Canonical URL
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.ogType - Open Graph type (website, article)
 * @param {string} props.twitterCard - Twitter card type (summary, summary_large_image)
 * @param {string} props.schema - JSON-LD schema markup
 */
function SEO({
  title = 'Kloudz Computing - Global IT Services & Engineering Teams',
  description = 'Kloudz Computing helps startups and enterprises build world-class products and scale engineering teams. Software development, AI automation, and cloud DevOps services.',
  keywords = 'software development, IT services, engineering teams, AI automation, cloud DevOps, dedicated developers',
  canonical = 'https://kloudzcomputing.com',
  ogImage = 'https://kloudz.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema = null,
  noindex = false,
}) {
  const siteTitle = title.includes('Kloudz') ? title : `${title} | Kloudz Computing`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kloudz Computing" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta */}
      <meta name="author" content="Kloudz Computing" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* JSON-LD Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
