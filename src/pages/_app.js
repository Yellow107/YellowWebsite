import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react';
import { DefaultSeo } from "next-seo";
import { ImageObjectJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { SearchProvider } from "@/hooks/use-search";

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps = {}, }) {

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  // // Load Google Tag Manager and Google Analytics based on user interaction
  // useEffect(() => {
  //   const loadScripts = () => {
  //     // Load Google Tag Manager
  //     const gtmScript = document.createElement('script');
  //     gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=GTM-W99KBPB`;
  //     gtmScript.async = true;
  //     document.body.appendChild(gtmScript);

  //     // Load Google Analytics
  //     const gaScript = document.createElement('script');
  //     gaScript.src = `https://www.googletagmanager.com/gtag/js?id=G-CSXSBEQKTY`;
  //     gaScript.async = true;
  //     document.body.appendChild(gaScript);

  //     gaScript.onload = () => {
  //       window.dataLayer = window.dataLayer || [];
  //       // eslint-disable-next-line no-undef
  //       function gtag() { dataLayer.push(arguments); }
  //       gtag('js', new Date());
  //       gtag('config', 'G-CSXSBEQKTY');
  //     };

  //     // Remove event listeners after the scripts are loaded
  //     window.removeEventListener('scroll', loadScripts);
  //     window.removeEventListener('click', loadScripts);
  //   };

  //   // Add event listeners for scroll and click to load Google Tag Manager and Google Analytics
  //   window.addEventListener('scroll', loadScripts);
  //   window.addEventListener('click', loadScripts);

  //   // Clean up event listeners if the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', loadScripts);
  //     window.removeEventListener('click', loadScripts);
  //   };
  // }, []);

  return (
    <>
      <DefaultSeo
        title="Branding & Communication Agency in Dubai - Yellow Agency"
        description="Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!"
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=3.0',
          },
          {
            name: 'google-site-verification',
            content: 'YpkX5Bmr_5_6VKgKXJm-yxvKpnHKzd_tppgvKB7FBnk',
          },
        ]}
        additionalLinkTags={[
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
            rel: 'preload',
            href: '/assets/fonts/Outfit-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: '/assets/fonts/Satoshi-Medium.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'alternate',
            type: 'application/rss+xml',
            title: 'Welcome To Yellow Feed',
            href: `https://welcometoyellow.com/feed.xml`
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: "Branding & Communication Agency in Dubai - Yellow Agency",
          description: "Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!",
          url: "https://welcometoyellow.com",
          images: [
            {
              url: `https://welcometoyellow.com/assets/images/seo/home.png`,
              width: 1920,
              height: 1016,
              alt: "Yellow Brand Image",
              type: "image/png",
            },
          ],
          siteName: "Yellow",
        }}
        twitter={{
          site: 'Yellow',
          cardType: 'summary_large_image',
        }}
      />

      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ImageObjectJsonLd />

      <SearchProvider>
        <ReactLenis root options={{ duration: 2 }}>
          <Component {...pageProps} />
        </ReactLenis>
      </SearchProvider>

      <SpeedInsights />
      <Analytics />

      <GoogleTagManager gtmId="GTM-W99KBPB" />
      <GoogleAnalytics gaId="G-CSXSBEQKTY"/>

    </>
  );
}