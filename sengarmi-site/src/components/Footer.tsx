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
              Votre partenaire de confiance pour tous vos besoins de ménage, 
              que vous soyez particulier ou professionnel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
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
              <li><Link to="/temoignages" className="opacity-90 hover:opacity-100 transition-opacity">Témoignages</Link></li>
              <li><Link to="/faq" className="opacity-90 hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nos services</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Ménage particuliers</li>
              <li className="opacity-90">Ménage bureaux</li>
              <li className="opacity-90">Nettoyage après travaux</li>
              <li className="opacity-90">Entretien régulier</li>
              <li className="opacity-90">Services ponctuels</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="opacity-90">77 777 77 77</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="opacity-90">contact@sengarmi.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="opacity-90">Ziguinchor, Sénégal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; 2024 Sengarmi. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <Link to="/mentions-legales" className="hover:opacity-100 transition-opacity">
                Mentions légales
              </Link>
              <Link to="/mentions-legales" className="hover:opacity-100 transition-opacity">
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