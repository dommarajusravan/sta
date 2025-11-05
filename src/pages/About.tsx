import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

// Admin/Committee members data
const admins = [
  { name: "Sravan Dommaraju", role: "Committee Member", image: "/admin-images/sravan.webp" },
  { name: "Balaji", role: "Committee Member", image: "/admin-images/balaji.webp" },
  { name: "Srihari", role: "Committee Member", image: "/admin-images/srihari.webp" },
  { name: "Dr Srikanth", role: "Committee Member", image: "/admin-images/srikanth.webp" },
  { name: "Sunil", role: "Committee Member", image: "/admin-images/sunil.webp" },
  { name: "Rupesh", role: "Committee Member", image: "/admin-images/rupesh.webp" },
  { name: "Nandu", role: "Committee Member", image: "/admin-images/nandu.webp" },
  { name: "Bramha", role: "Committee Member", image: "/admin-images/bramha.webp" },
  { name: "Naveen", role: "Committee Member", image: "/admin-images/naveen.webp" },
  { name: "Karunakar Reddy", role: "Committee Member", image: "/admin-images/karna.webp" },
];

const values = [
  {
    icon: Heart,
    title: "Unity",
    description: "Bringing together Telugu families across Southend and Essex",
  },
  {
    icon: Users,
    title: "Community",
    description: "Fostering strong bonds and lasting friendships",
  },
  {
    icon: Target,
    title: "Heritage",
    description: "Preserving and celebrating our rich cultural traditions",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering high-quality events and programs",
  },
];

export default function About() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scatterImages = () => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const items = Array.from(gallery.querySelectorAll(".admin-item")) as HTMLElement[];
      const imageSize = window.innerWidth < 768 ? 140 : 180;
      const margin = window.innerWidth < 768 ? 30 : 50;
      const positions: { x: number; y: number }[] = [];

      // Increase height to provide more space
      const cols = window.innerWidth < 768 ? 2 : 3;
      const rows = Math.ceil(items.length / cols);
      const estimatedHeight = Math.max(1200, rows * (imageSize + margin * 3));
      gallery.style.minHeight = `${estimatedHeight}px`;

      const minX = margin;
      const minY = margin;
      const maxX = gallery.clientWidth - imageSize - margin;
      const maxY = estimatedHeight - imageSize - margin;

      const checkOverlap = (x: number, y: number) => {
        return positions.some((pos) => {
          const dx = x - pos.x;
          const dy = y - pos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < imageSize + margin;
        });
      };

      items.forEach((item, index) => {
        let x = 0,
          y = 0,
          isValidPosition = false;
        let attempts = 0;
        const maxAttempts = 1000;

        // Try random positioning first
        while (!isValidPosition && attempts < maxAttempts) {
          x = Math.random() * (maxX - minX) + minX;
          y = Math.random() * (maxY - minY) + minY;

          if (!checkOverlap(x, y)) {
            isValidPosition = true;
            positions.push({ x, y });
          }
          attempts++;
        }

        // Fallback to grid positioning if random fails
        if (!isValidPosition) {
          const col = index % cols;
          const row = Math.floor(index / cols);
          x = minX + col * (imageSize + margin * 2);
          y = minY + row * (imageSize + margin * 2);
          positions.push({ x, y });
        }

        // Always position and show the item
        item.style.width = `${imageSize}px`;
        item.style.height = `${imageSize}px`;
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        item.style.visibility = "visible";
        item.style.opacity = "0";
        item.style.transform = "scale(0.8)";

        // Animate in with delay
        setTimeout(() => {
          item.style.transition = "all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }, index * 100);
      });
    };

    scatterImages();
    window.addEventListener("resize", scatterImages);
    return () => window.removeEventListener("resize", scatterImages);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto relative z-10 text-center space-y-6 animate-slide-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            About <span className="text-accent">STA</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Building bridges between tradition and modernity, bringing the Telugu community together in Southend since 2024
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Southend Telugu Association exists to celebrate and preserve Telugu culture, language, and traditions 
              while fostering a sense of belonging and community among Telugu-speaking families in the UK. We provide 
              a platform for cultural exchange, social support, and meaningful connections that transcend generations.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Meet Our Committee
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated volunteers working tirelessly to serve our community
            </p>
          </div>

          {/* Scattered Images Gallery */}
          <div
            ref={galleryRef}
            className="relative w-full perspective-1000"
            style={{ minHeight: "800px" }}
          >
            {admins.map((admin, index) => (
              <div
                key={index}
                className="admin-item absolute group cursor-pointer transform-3d"
                style={{
                  visibility: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1) rotateZ(0deg)";
                  e.currentTarget.style.zIndex = "100";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.zIndex = "10";
                }}
              >
                <Card className="p-4 h-full bg-white hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="relative mb-3">
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img
                        src={admin.image}
                        alt={admin.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-sm mb-1 text-foreground">{admin.name}</h3>
                    <p className="text-xs text-primary font-semibold">{admin.role}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
