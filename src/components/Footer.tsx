import { Heart, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Southend Telugu Association</h3>
            <p className="text-white/70 text-sm">Celebrating culture, building community</p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-2 text-white/70 text-sm">
              <a href="mailto:southendteluguassociation@gmail.com" className="flex items-center justify-center md:justify-end gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>southendteluguassociation@gmail.com</span>
              </a>
              <a href="tel:+4474490445130" className="flex items-center justify-center md:justify-end gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+44 (0) 7449044513</span>
              </a>
            </div>
          </div>
        </div>

        {/* Made With Love */}
        <div className="flex justify-center items-center gap-2 text-white/90 mb-6">
          <span className="text-sm">Made with</span>
          <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
          <span className="text-sm">by STA Team</span>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Southend Telugu Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
