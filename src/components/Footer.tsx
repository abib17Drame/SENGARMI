import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Footer = () => {
  const { theme, resolvedTheme } = useTheme();

  const getThemeIcon = () => {
    if (theme === 'system') return Monitor;
    return resolvedTheme === 'dark' ? Moon : Sun;
  };

  const getThemeText = () => {
    if (theme === 'system') return 'Système';
    return resolvedTheme === 'dark' ? 'Sombre' : 'Clair';
  };

  const ThemeIcon = getThemeIcon();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
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
              <a href="https://wa.me/221710384040" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="WhatsApp">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@sengarmi1?_r=1&_d=eldke8mmbe7kkc&sec_uid=MS4wLjABAAAAuh_9DMc7512Yw3wl9t2Xp1cRJKMZvLbrcwHoBaF802cJGmOFEzhLFUQ_7mQmewak&share_author_id=7529957532175008788&sharer_language=fr&source=h5_m&u_code=eldkedhj656k80&timestamp=1753473428&user_id=7529957532175008788&sec_user_id=MS4wLjABAAAAuh_9DMc7512Yw3wl9t2Xp1cRJKMZvLbrcwHoBaF802cJGmOFEzhLFUQ_7mQmewak&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7529957459056051975&share_link_id=5064a7b7-f4b2-4f83-b473-0b07fd137b99&share_app_id=1233&ugbiz_name=ACCOUNT&social_share_type=5&enable_checksum=1" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs">
                <ThemeIcon className="h-3 w-3" />
                <span>Thème : {getThemeText()}</span>
              </div>
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
      </div>
    </footer>
  );
};

export default Footer;