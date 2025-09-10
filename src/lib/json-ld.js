// lib/json-ld.jsx
import Head from "next/head";
import config from "../../package.json"; // adjust relative path if needed
import { authorPathByName } from "./users";
import { postPathBySlug } from "./posts";

function JsonLd({ json }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </Head>
  );
}

export function ArticleJsonLd({ post = {} }) {
  const { homepage = "", faviconPath = "/favicon-300x300.jpg" } = config || {};
  const {
    title,
    slug,
    date,
    author,
    categories = [],
    modified,
    featuredImage,
    metaDescription,
  } = post;

  const path = postPathBySlug(slug);
  const datePublished = date ? new Date(date) : undefined;
  const dateModified = modified ? new Date(modified) : datePublished;

  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${homepage}${path}` },
    headline: title,
    image:
      featuredImage && featuredImage.sourceUrl
        ? [featuredImage.sourceUrl]
        : undefined,
    datePublished: datePublished && datePublished.toISOString(),
    dateModified: dateModified && dateModified.toISOString(),
    description: metaDescription,
    keywords: categories.map((c) => c.name).join(", "),
    copyrightYear: datePublished && datePublished.getFullYear(),
    author: { "@type": "Person", name: author && author.name },
    publisher: {
      "@type": "Organization",
      name: "Yellow Agency",
      logo: { "@type": "ImageObject", url: `${homepage}${faviconPath}` },
    },
  };

  return <JsonLd json={json} />;
}

export function OrganizationJsonLd() {
  const { homepage = "" } = config || {};

  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${homepage}/#organization`,
    name: "Yellow Branding Agency",
    description:
      "Yellow is a leading branding, creative design & advertising agency serving Dubai, Abu Dhabi & GCC. We provide brand strategy, naming, identity and marketing services that achieve our client's objectives.",
    url: homepage,
    telephone: "+971 54 517 8971",
    email: "hello@welcometoyellow.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971 54 517 8971",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: "English",
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "Loft offices 2, Office 107 - Dubai Media City",
      addressLocality: "Dubai",
      // addressRegion: "Dubai",
      postalCode: "25314",
      addressCountry: "AE",
    },
    logo: `${homepage}/favicon-300x300.jpg`,
    sameAs: [
      "https://in.pinterest.com/Yellowbranding/",
      "https://www.behance.net/welcometoyellow",
      "https://www.instagram.com/welcometoyellow/",
      "https://www.linkedin.com/company/yellow-branding",
    ],
  };

  return <JsonLd json={json} />;
}

export function WebsiteJsonLd() {
  const { homepage = "" } = config || {};

  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${homepage}/#website`,
    name: "Yellow",
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    inLanguage: "en-US",
    publisher: { "@id": `${homepage}/#organization` },
  };

  return <JsonLd json={json} />;
}

export function ImageObjectJsonLd() {
  const { homepage = "" } = config || {};
  const url = `${homepage}/assets/images/seo/home.png`;

  const json = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": url,
    url,
    width: "1920",
    height: "1016",
    inLanguage: "en-US",
  };

  return <JsonLd json={json} />;
}

export function WebpageJsonLd({ metadata = {} }) {
  const { homepage = "", faviconPath = "/favicon.ico" } = config || {};
  const {
    title,
    slug = "",
    description,
    date_published,
    date_modified,
  } = metadata;

  const pageUrl = slug ? `${homepage}/${slug}`.replace(/\/+$/, "") : homepage;

  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    datePublished: date_published,
    dateModified: date_modified || date_published,
    publisher: {
      "@type": "Organization",
      name: "Yellow",
      logo: { "@type": "ImageObject", url: `${homepage}${faviconPath}` },
    },
    about: { "@id": `${homepage}/#organization` }, // root IDs for cross-refs
    isPartOf: { "@id": `${homepage}/#website` },
    inLanguage: "en-US",
  };

  return <JsonLd json={json} />;
}

export function LocalBusiness() {
  const json = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Yellow Branding Agency",
    image: "https://welcometoyellow.com/assets/images/seo/home.png",
    url: "https://welcometoyellow.com/",
    telephone: "+971 54 517 8971",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Loft offices 2, Office 107 - Dubai Media City",
      addressLocality: "Dubai",
      postalCode: "25314",
      // addressRegion: 'Dubai',
      addressCountry: "AE", // fixed
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "41",
    },
    priceRange: "$1000-$10000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "17:30",
      },
    ],

    sameAs: [
      "https://in.pinterest.com/Yellowbranding/",
      "https://www.behance.net/welcometoyellow",
      "https://www.instagram.com/welcometoyellow/",
      "https://www.linkedin.com/company/yellow-branding",
    ],
  };

  return <JsonLd json={json} />;
}

export function AuthorJsonLd({ author = {} }) {
  const { homepage = "" } = config || {};
  const { name, avatar, description } = author;
  const path = authorPathByName(name);

  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    image: avatar && avatar.url,
    url: `${homepage}${path}`,
    description,
  };

  return <JsonLd json={json} />;
}

export function ServicesJsonLd({
  services = [],
  catalogName = "Yellow — Services",
}) {
  const { homepage = "" } = config || {};

  // simple slug helper for stable @id’s
  const slugify = (s = "") =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // Normalize input so you can pass strings or objects
  const items = services.map((s) => (typeof s === "string" ? { name: s } : s));

  const json = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${homepage}/what-we-do`,
    name: catalogName,
    url: homepage,
    itemListElement: items.map((s, i) => {
      const id = `${homepage}/what-we-do/${slugify(s.name)}`;
      const url = s.url
        ? s.url.startsWith("http")
          ? s.url
          : `${homepage}${s.url}`
        : `${homepage}/what-we-do#${slugify(s.name)}`;

      return {
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          "@id": id,
          name: s.name,
          ...(s.description ? { description: s.description } : {}),
          serviceType: s.serviceType || s.name,
          url,
          provider: { "@id": `${homepage}/what-we-do` }, // ties to your OrganizationJsonLd
          ...(s.areaServed
            ? { areaServed: s.areaServed } // e.g. ['UAE','GCC'] or structured Country objects
            : { areaServed: ["UAE", "GCC"] }),
          ...(s.category ? { category: s.category } : {}),
          // If you price services, you can include an Offer:
          ...(s.price
            ? {
                offers: {
                  "@type": "Offer",
                  price: String(s.price.value),
                  priceCurrency: s.price.currency || "AED",
                  url,
                },
              }
            : {}),
        },
      };
    }),
  };

  return <JsonLd json={json} />;
}
