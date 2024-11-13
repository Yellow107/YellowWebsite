// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Branding & Communication Agency in Dubai - Yellow Agency',
    description: 'Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!',
    additionalMetaTags: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=3.0',
        },
        {
            name: 'google-site-verification',
            content: 'YpkX5Bmr_5_6VKgKXJm-yxvKpnHKzd_tppgvKB7FBnk',
          },
    ],
    additionalLinkTags: [
        {
          rel: 'icon',
          href: '/favicon-150x150.jpg',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/favicon-300x300.jpg',
          sizes: '192x192',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon-300x300.jpg',
        },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Welcome To Yellow Feed',
          href: `https://welcometoyellow.com/feed.xml`
        },
      ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: `https://welcometoyellow.com/assets/images/seo/home.png`,
                width: 1920,
                height: 1016,
                alt: "Yellow Brand Image",
                type: "image/png",
            },
        ],
        url: 'https://welcometoyellow.com',
        siteName: 'Yellow',
    },
    twitter: {
        site: 'Yellow',
        cardType: 'summary_large_image',
    },
};