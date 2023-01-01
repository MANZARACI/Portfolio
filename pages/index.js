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
        <title>Basar Ureten</title>
        <meta name="description" content="Portfolio page of Basar Ureten" />
        <meta name="rating" content="General" />
      </Head>
      <Introduction />
      <Navbar />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
