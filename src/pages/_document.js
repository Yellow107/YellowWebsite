import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W99KBPB" height="0" width="0" style="display: none; visibility: hidden; pointerEvents: none" />,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
