interface MedicalClinicSchema {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours: string[];
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string[];
}

interface PhysicianSchema {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  specializesIn: string[];
  knowsAbout: string[];
  award?: string[];
  alumniOf?: string[];
  worksFor: string;
}

interface MedicalProcedureSchema {
  name: string;
  description: string;
  followsRecommendedGuideline?: string;
  preparation?: string;
  howPerformed?: string;
  followup?: string;
  typicalOutcome?: string;
}

export function MedicalClinicStructuredData({
  name,
  description,
  url,
  telephone,
  address,
  geo,
  openingHours,
  priceRange,
  paymentAccepted,
  currenciesAccepted,
}: MedicalClinicSchema) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness'],
    name,
    description,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo,
    },
    openingHours,
    priceRange,
    paymentAccepted,
    currenciesAccepted,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/drdermatology',
      'https://www.instagram.com/drdermatology',
      'https://www.twitter.com/drdermatology',
      'https://www.linkedin.com/company/drdermatology',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function PhysicianStructuredData({
  name,
  jobTitle,
  description,
  url,
  telephone,
  address,
  specializesIn,
  knowsAbout,
  award,
  alumniOf,
  worksFor,
}: PhysicianSchema) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'Person'],
    name,
    jobTitle,
    description,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    specializesIn,
    knowsAbout,
    ...(award && { award }),
    ...(alumniOf && { alumniOf }),
    worksFor: {
      '@type': 'Organization',
      name: worksFor,
    },
    gender: 'https://schema.org/Female', // or Male
    hasOccupation: {
      '@type': 'Occupation',
      description: jobTitle,
      occupationLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          ...address,
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function MedicalProcedureStructuredData({
  name,
  description,
  followsRecommendedGuideline,
  preparation,
  howPerformed,
  followup,
  typicalOutcome,
}: MedicalProcedureSchema) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    ...(followsRecommendedGuideline && { followsRecommendedGuideline }),
    ...(preparation && { preparation }),
    ...(howPerformed && { howPerformed }),
    ...(followup && { followup }),
    ...(typicalOutcome && { typicalOutcome }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BlogPostingStructuredData({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified,
    image,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Dermatology & Aesthetic Centre',
      logo: {
        '@type': 'ImageObject',
        url: 'https://drdermatology.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQPageStructuredData({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbListStructuredData({
  breadcrumbs,
}: {
  breadcrumbs: { name: string; url: string }[];
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}