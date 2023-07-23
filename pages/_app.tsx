import "../styles/globals.css";
import "../v1/styles/home.css";
import "../v1/styles/topbar.css";
import "../v1/styles/skills.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
