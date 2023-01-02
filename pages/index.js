import Introduction from "../components/Introduction";
import PortfolioSection from "../components/PortfolioSection";
import Navbar from "../components/Navbar";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Basar Ureten - Portfolio Page</title>
        <meta
          name="description"
          content="Hi! My name is Basar Ureten. I am a software developer. I am currently focused on web development."
        />
        <meta name="rating" content="General" />
        <meta name="author" content="Basar Ureten" />

        <meta property="og:title" content="Basar Ureten | Portfolio Page" />
        <meta property="og:url" content="https://www.basarureten.dev/" />
        <meta property="og:image" content="/images/ogImage.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Hi! My name is Basar Ureten. I am a software developer. I am currently focused on web development."
        />
        <meta property="og:locale" content="en_GB" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Basar Ureten | Portfolio Page" />
        <meta
          name="twitter:description"
          content="Hi! My name is Basar Ureten. I am a software developer. I am currently focused on web development."
        />
        <meta name="twitter:site" content="@basarureten" />
        <meta name="twitter:image" content="/images/ogImage.png" />
        <meta name="twitter:creator" content="@basarureten" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Introduction />
      <Navbar />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
