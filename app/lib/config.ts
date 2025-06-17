export const siteConfig = {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: 'Aelora',
    description: 'Sensorial skincare line rooted in nature',
    links: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      email: 'hello@aelora.com'
    }
  } as const; 