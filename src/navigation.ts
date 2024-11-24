import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
  actions: [{ text: 'Contact Us', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Sitemap',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  ],
  contactInformation: {
    address: '7901 4th st N STE300, St. Petersburg, FL',
    phone: '+1 (321) 343 - 7472',
  },
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/lydiob7' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/lydiob7' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@lydiob7' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    ©2024 - All rights reserved.
  `,
};
