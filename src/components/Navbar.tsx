import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/#events" },
  { name: "Contact", path: "/#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    if (path === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path.includes("#")) {
      const [route, hash] = path.split("#");
      if (location.pathname !== route) {
        navigate(route);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  const handleJoinNow = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background via-card to-background backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-full" />
              <img 
                src="/images/STA-logo.webp" 
                alt="STA Logo" 
                className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden lg:flex flex-col justify-center items-center gap-1">
              <div className="font-bold text-sm tracking-wider text-foreground group-hover:text-primary transition-colors leading-tight">
                SOUTHEND TELUGU ASSOCIATION
              </div>
              <div 
                className="text-lg font-semibold text-secondary group-hover:text-secondary-glow transition-colors leading-tight tracking-wider" 
                style={{ fontFamily: 'Noto Sans Telugu, sans-serif' }}
              >
                సౌతెండ్ తెలుగు అసోసియేషన్
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                onClick={() => handleNavClick(item.path)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary via-primary-glow to-secondary rounded-full" />
                )}
              </Button>
            ))}
            <Button 
              onClick={handleJoinNow} 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-primary via-primary-glow to-secondary hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 font-semibold"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-3 animate-fade-in border-t border-border/50">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                onClick={() => handleNavClick(item.path)}
                className={`w-full justify-start text-base font-medium transition-all duration-300 rounded-lg ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Button>
            ))}
            <Button 
              onClick={handleJoinNow} 
              className="w-full mt-4 bg-gradient-to-r from-primary via-primary-glow to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all font-semibold"
            >
              Join Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
