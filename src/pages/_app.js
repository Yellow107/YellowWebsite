import NextApp from "next/app";
import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react';
import { DefaultSeo } from "next-seo";
import { getSiteMetadata } from '@/lib/site';
import { SiteContext, useSiteContext } from '@/hooks/use-site';
// import { AnimatePresence } from "framer-motion";
import { ImageObjectJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";
import { useEffect } from "react";
import config from "../../package.json";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { SearchProvider } from "@/hooks/use-search";
export default function App({ Component, pageProps = {}, metadata }) {

  const { homepage = "" } = config;

  const site = useSiteContext({
    metadata,
  });

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo
        title="Branding & Communication Agency in Dubai - Yellow Agency"
        description="Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!"
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
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
            href: `${homepage}/feed.xml`
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: "Branding & Communication Agency in Dubai - Yellow Agency",
          description: "Welcome to Yellow: your trusted branding, marketing, & design agency in Dubai. We specialize in crafting brand stories & innovative marketing strategies. Let your brand shine with expert services. Contact today!",
          url: homepage,
          images: [
            {
              url: `${homepage}/assets/images/seo/home.png`,
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
      <SiteContext.Provider value={site}>
        <SearchProvider>
          <ReactLenis root>
            {/* <AnimatePresence mode="wait"> */}
              <Component {...pageProps} />
            {/* </AnimatePresence> */}
          </ReactLenis>
        </SearchProvider>
      </SiteContext.Provider>
      <GoogleTagManager gtmId="GTM-W99KBPB" />
      <GoogleAnalytics gaId="G-CSXSBEQKTY" />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  return {
    ...appProps,
    metadata: await getSiteMetadata(),
  };
};
