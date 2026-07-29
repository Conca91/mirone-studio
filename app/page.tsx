import Contact from "@/components/home/Contact";
import FeaturedProject from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import Method from "@/components/home/Method";
import Services from "@/components/home/Services";
import Studio from "@/components/home/Studio";

export default function Home() {
  return (
    <main>
      <Hero />
      <Method />
      <Services />
      <FeaturedProject />
      <Studio />
      <Contact />
    </main>
  );
}