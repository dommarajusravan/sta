import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight, History } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const events = [
  {
    title: "Sankranthi Festival Event 2026",
    date: "January 18, 2026",
    time: "11:00 AM - 6:00 PM",
    location: "Runnymede Hall",
    description: "Let this Sankranti bring harmony, wealth, and endless reasons to smile.",
    image: "/images/sankranthi-2026.png",
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Southend Summer Party 2025",
    date: "June 29, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Cromwell Manor, Pitsea, Basildon",
    description: "Join us for a fun-filled summer celebration with barbecue, biryani, games, mini cricket for kids, and many more exciting activities for the whole family",
    image: "/images/summer-party-2025.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Women's and Kid's Badminton Tournament 2025",
    date: "June 1, 2025",
    time: "12:00 PM - 4:00 PM",
    location: "Shoeburyness Leisure Center",
    description: "Exciting badminton tournament for women and kids featuring doubles matches. Entry £5 per person. Organized by STA Women's Team",
    image: "/images/badminton-2025.png",
    color: "from-blue-500 to-pink-600",
  },
  {
    title: "Telugu New Year - Ugadi 2025",
    date: "March 30, 2025",
    time: "11:00 AM onwards",
    location: "Runnymede Hall, Kiln Rd, Thundersley",
    description: "Welcome the Telugu New Year with Ugadi pachadi, cultural programs, traditional folk dances, and celebrations. Mother's Day Special: Moms get tickets at kid's prices!",
    image: "/images/ugadi-2025.png",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Sankranthi Festival 2025",
    date: "January 18, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Runnymede Hall, Kiln Rd, Thundersley",
    description: "Celebrate the harvest festival Sankranthi with traditional muggu (rangoli), bogillu (bonfire), cultural programs, delicious food, and family entertainment",
    image: "/images/sankranthi-2025.jpg",
    color: "from-orange-500 to-yellow-600",
  },
];

export const Events = () => {
  const [showAll, setShowAll] = useState(false);
  const [eventType, setEventType] = useState<"upcoming" | "previous">("upcoming");

  const currentDate = new Date();
  
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const previousEvents = events.filter(event => new Date(event.date) < currentDate);
  
  const selectedEvents = eventType === "upcoming" ? upcomingEvents : previousEvents;
  const displayedEvents = showAll ? selectedEvents : selectedEvents.slice(0, 3);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Join Our Celebrations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the vibrancy of Telugu culture through our exciting events
          </p>
          
          {/* Event Type Toggle */}
          <Tabs value={eventType} onValueChange={(value) => {
            setEventType(value as "upcoming" | "previous");
            setShowAll(false);
          }} className="mx-auto">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
              <TabsTrigger value="upcoming" className="text-sm font-semibold">
                <Calendar className="w-4 h-4 mr-2" />
                Upcoming Events ({upcomingEvents.length})
              </TabsTrigger>
              <TabsTrigger value="previous" className="text-sm font-semibold">
                <History className="w-4 h-4 mr-2" />
                Previous Events ({previousEvents.length})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-2">
                  {event.description}
                </p>

                {/* Details */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full mt-4 group/btn bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        {selectedEvents.length > 3 && (
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              {showAll ? "Show Less" : `View All ${eventType === "upcoming" ? "Upcoming" : "Previous"} Events`}
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
          </div>
        )}
        
        {selectedEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No {eventType} events at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
