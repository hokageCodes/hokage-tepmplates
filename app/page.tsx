import Hero from "../components/sections/Hero";
import TemplateGrid from "../components/sections/TemplateGrid";
import WhatYouGet from "../components/sections/WhatYouGet";
import WhoItsFor from "../components/sections/WhoItsFor";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-16 py-12">
      <Hero />
      <TemplateGrid />
      <WhatYouGet />
      <WhoItsFor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
