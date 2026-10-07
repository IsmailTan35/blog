import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#06071a" />
      </Head>
      <body>
        {/* Lets CSS hide scroll-reveal content only when JS will reveal it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
