import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle, MobileThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { nom: "Accueil", lien: "/" },
    { nom: "Qui sommes-nous ?", lien: "/qui-sommes-nous" },
    { nom: "Nos services", lien: "/nos-services" },
    { nom: "Nos partenaires", lien: "/nos-partenaires" },
    { nom: "Témoignages", lien: "/temoignages" },
    { nom: "FAQ", lien: "/faq" },
    { nom: "Notre app", lien: "/notre-application" },
    { nom: "Contact", lien: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary shadow-card sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
                src="/public/logo.png" 
                alt="Sengarmi"
                className="h-10 w-auto"
            />
          </Link>
          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.lien}
                to={item.lien}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.lien) 
                    ? "text-accent border-b-2 border-accent" 
                    : "text-primary-foreground"
                }`}
              >
                {item.nom}
              </Link>
            ))}
            <ThemeToggle />
            <Button variant="cta" size="sm" asChild>
              <Link to="/notre-application">Télécharger l'app</Link>
            </Button>
          </div>

          {/* Contrôles mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Bouton de thème mobile */}
            <MobileThemeToggle />
            {/* Menu burger */}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-accent hover:bg-accent/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-primary-foreground/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.lien}
                  to={item.lien}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-accent ${
                    isActive(item.lien) 
                      ? "text-accent bg-accent/10" 
                      : "text-primary-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.nom}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <Link to="/notre-application" onClick={() => setIsMenuOpen(false)}>
                    Télécharger l'app
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;