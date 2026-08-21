import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react';
import { DefaultSeo } from "next-seo";
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';
import nextSeoConfig from "../../next-seo.config";
import { SearchProvider } from "@/hooks/use-search";
import 'lenis/dist/lenis.css';
import { LocalBusiness } from "@/lib/json-ld";

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
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    // Defer GTM/GA past the critical rendering path - they're heavy enough
    // to compete for main-thread time with hydration and the hero animation
    // if mounted immediately. Load on first interaction, or idle as a
    // fallback, with a timeout so it never silently skips a real session.
    let settled = false;
    const load = () => {
      if (settled) return;
      settled = true;
      setShouldLoadAnalytics(true);
    };

    const events = ["scroll", "pointerdown", "keydown", "touchstart"];
    events.forEach((event) => window.addEventListener(event, load, { once: true, passive: true }));

    const idleId = "requestIdleCallback" in window
      ? window.requestIdleCallback(load, { timeout: 5000 })
      : setTimeout(load, 3000);

    return () => {
      events.forEach((event) => window.removeEventListener(event, load));
      if ("requestIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <>
      <DefaultSeo {...nextSeoConfig}/>
      <LocalBusiness/>
      <SearchProvider>
        <ReactLenis root options={{ lerp: 0.05 }}>
          <main className={`${outfit.variable} ${satoshi.variable}`}>
            <Component {...pageProps} />
          </main>
        </ReactLenis>
      </SearchProvider>

      <SpeedInsights />
      <Analytics />

      {shouldLoadAnalytics && (
        <>
          <GoogleTagManager gtmId="GTM-W99KBPB" />
          <GoogleAnalytics gaId="G-CSXSBEQKTY" />
        </>
      )}
    </>
  );
}