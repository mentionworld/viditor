import Download from "./sections/Download";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Reviews from "./sections/Reviews";

export default function Home() {
  return (
    <div className="w-full mx-auto max-w-[1024px]">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Reviews />
      <Download />
      <Footer />
    </div>
  );
}
