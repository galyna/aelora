interface SiteConfig {
  url: string;
  name: string;
  description: string;
  links: {
    instagram: string;
    facebook: string;
    email: string;
  };
}

const getSiteUrl = () => {
  if (typeof window !== 'undefined') return window.location.origin;
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
};

export const siteConfig: SiteConfig = {
  url: getSiteUrl(),
  name: 'Aelora',
  description: 'Sensorial skincare line rooted in nature',
  links: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    email: 'hello@aelora.com'
  }
} as const; 