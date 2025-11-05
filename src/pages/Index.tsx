import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Events } from "@/components/Events";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
