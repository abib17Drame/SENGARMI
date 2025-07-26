import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <img 
              src="/logo.png" 
              alt="Logo Sengarmi"
              className="h-8 w-auto"
            />
            <p className="text-sm opacity-90">
              Votre partenaire de confiance pour tous vos besoins de services, 
              que vous soyez particulier ou professionnel.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1FTAJPQ9qX/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/sengarmi09?igsh=MWZ5dWF4b3J3bTRyOA==" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/sengarmi-sengarmi-42b17b377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">Accueil</Link></li>
              <li><Link to="/qui-sommes-nous" className="opacity-90 hover:opacity-100 transition-opacity">Qui sommes-nous ?</Link></li>
              <li><Link to="/nos-services" className="opacity-90 hover:opacity-100 transition-opacity">Nos services</Link></li>
              <li><Link to="/nos-partenaires" className="opacity-90 hover:opacity-100 transition-opacity">Nos partenaires</Link></li>
              <li><Link to="/temoignages" className="opacity-90 hover:opacity-100 transition-opacity">Témoignages</Link></li>
              <li><Link to="/faq" className="opacity-90 hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nos services</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Services de ménage</li>
              <li className="opacity-90">Personnel spécialisé</li>
              <li className="opacity-90">Bon linge</li>
              <li className="opacity-90">Événementiel</li>
              <li className="opacity-90">Services diversifiés</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="opacity-90">71 038 40 40</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="opacity-90">33 881 71 73</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="opacity-90">sengarmi09@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="opacity-90">1436 Boucote Sud LYNDIANE Ziguinchor</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; 2025 Sengarmi. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <Link to="/mentions-legales" className="hover:opacity-100 transition-opacity">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:opacity-100 transition-opacity">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;