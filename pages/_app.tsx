import type { AppProps } from "next/app";
import { Inter, JetBrains_Mono, Poppins, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import "../v1/styles/background.css";
import "../v1/styles/topbar.css";
import "../v1/styles/home.css";
import "../v1/styles/marquee.css";
import "../v1/styles/skills.css";
import "../v1/styles/projects.css";
import "../v1/styles/contact.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "latin-ext"] });
// Only used by the TİSO logo, which keeps its original typeface.
const poppins = Poppins({ subsets: ["latin", "latin-ext"], weight: "700" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-space-grotesk: ${spaceGrotesk.style.fontFamily};
          --font-jetbrains-mono: ${jetbrainsMono.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
