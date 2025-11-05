import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-semibold">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Connect With
                <span className="block mt-2 text-accent">STA Community</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Have questions? Want to join us? We'd love to hear from you and welcome you to our vibrant community.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, title: "Email", content: "southendteluguassociation@gmail.com", href: "mailto:southendteluguassociation@gmail.com" },
                { icon: Phone, title: "Phone", content: "+44 (0) 7449044513", href: "tel:+4474490445130" },
                { icon: MapPin, title: "Location", content: "Southend-on-Sea, Essex, UK", href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-white/20 group-hover:bg-white/30 transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 font-medium">{item.title}</div>
                    <div className="text-white font-semibold">{item.content}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/share/1AbmamAaWJ/?mibextid=wwXIfr", color: "hover:bg-blue-600" },
                  { icon: Instagram, href: "https://www.instagram.com/southend.telugu.association/", color: "hover:bg-pink-600" },
                  { icon: MessageCircle, href: "https://chat.whatsapp.com/FrbMISYT8Xo8TzIChjL8sk", color: "hover:bg-green-600" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 ${social.color} transition-all duration-300 hover:scale-110 group`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <Card className="p-8 bg-white/95 backdrop-blur-lg shadow-2xl border-2 border-white/50 animate-slide-up">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Full Name</label>
                <Input 
                  placeholder="Your name" 
                  className="border-2 focus:border-primary transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Email Address</label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com" 
                  className="border-2 focus:border-primary transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Phone Number</label>
                <Input 
                  type="tel"
                  placeholder="+44" 
                  className="border-2 focus:border-primary transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us how we can help you..." 
                  className="border-2 focus:border-primary transition-colors min-h-32 resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24-48 hours
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
