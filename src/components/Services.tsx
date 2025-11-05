import { Card } from "@/components/ui/card";
import { Users, Calendar, BookOpen, Heart, Sparkles, Globe } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Community Events",
    description: "Regular gatherings celebrating Telugu culture, festivals, and traditions",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Cultural Programs",
    description: "Dance, music, and theatrical performances showcasing our rich heritage",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: BookOpen,
    title: "Language Classes",
    description: "Telugu language lessons for children and adults to preserve our mother tongue",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Social Support",
    description: "Helping members integrate and thrive in the Southend community",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Youth Programs",
    description: "Activities and mentorship for the next generation of Telugu heritage",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Networking",
    description: "Connect with professionals and families across the Telugu diaspora",
    gradient: "from-indigo-500 to-violet-500",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Building bridges, preserving culture, and fostering community bonds
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-card hover:shadow-2xl transition-all duration-500 transform-3d hover:-translate-y-2 hover:rotate-1 border-2 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
