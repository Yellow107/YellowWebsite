import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react';
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';
import nextSeoConfig from "../../next-seo.config";
import { SearchProvider } from "@/hooks/use-search";

const outfit = localFont({
  src: [
    {
      path: './fonts/Outfit-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Outfit-Medium.woff',
      weight: '500',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-outfit'
});

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Satoshi-Medium.woff',
      weight: '500',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-satoshi'
});

export default function App({ Component, pageProps = {}, }) {

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      
      <SearchProvider>
        <ReactLenis root options={{ lerp: 0.05 }}>
          <main className={`${outfit.variable} ${satoshi.variable}`}>
            <Component {...pageProps} />
          </main>
        </ReactLenis>
      </SearchProvider>

      <SpeedInsights />
      <Analytics />

      <GoogleTagManager gtmId="GTM-W99KBPB" />
      <GoogleAnalytics gaId="G-CSXSBEQKTY" />
    </>
  );
}
