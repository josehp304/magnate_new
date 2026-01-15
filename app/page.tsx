import Menu from "@/components/ui/menu/Menu";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import WhoWeAre from "@/components/who-we-are/WhoWeAre";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-blue-100 selection:text-blue-900">
      <Menu />
      <Hero />
      <WhoWeAre />
      <Stats />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
