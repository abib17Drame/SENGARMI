import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { 
  Sparkles, 
  Shield, 
  Clock, 
  Users, 
  Building, 
  Home, 
  Star,
  Download,
  Smartphone,
  Calendar,
  MapPin,
  Hotel,
  Hospital,
  User,
  Utensils,
  Car,
  Shirt,
  Wrench,
  Scissors,
  Phone,
  Mail
} from "lucide-react";
import { temoignages } from "@/data/temoignages";
import { getCarouselImages } from "@/data/carouselImages";
import { ImageCarousel } from "@/components/ImageCarousel";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

const Accueil = () => {
  // Récupération des images du carousel depuis la structure de données
  const carouselImages = getCarouselImages();
  
  // État pour le carousel des témoignages
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Défilement automatique du carousel des témoignages
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);
  


  const services = [
    {
      icone: Home,
      titre: "Services de Ménage",
      description: "Ménage à domicile, bureaux, hôtels, hôpitaux et événementiel. Des solutions complètes pour tous vos besoins d'entretien."
    },
    {
      icone: Users,
      titre: "Personnel Spécialisé",
      description: "Cuisiniers, aides-ménagères, réceptionnistes, maîtres de cérémonie et agents d'entretien qualifiés."
    },
    {
      icone: Shirt,
      titre: "Bon Linge",
      description: "Lavage, repassage et couture. Confiez-nous l'entretien complet de votre linge et vêtements."
    }
  ];

  const avantages = [
    {
      icone: Shield,
      titre: "Fiabilité garantie",
      description: "Personnel formé, assuré et contrôlé pour votre tranquillité d'esprit."
    },
    {
      icone: Clock,
      titre: "Flexibilité totale",
      description: "Planification selon vos disponibilités, modification facile via l'app."
    },
    {
      icone: Users,
      titre: "Équipe professionnelle",
      description: "Agents expérimentés et équipés du matériel professionnel adapté."
    }
  ];



  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Sengarmi
              </h1>
              <p className="text-xl lg:text-2xl text-slogan font-medium">
                Vos Désirs sont des Ordres
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Votre partenaire de confiance pour tous vos besoins de services. 
                Des particuliers aux professionnels, nous répondons à tous vos besoins 
                avec excellence et professionnalisme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/notre-application">
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger l'app
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                  <Link to="/nos-services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                              <ImageCarousel  
                images={carouselImages}
                className="w-full max-w-5xl"
                autoPlay={true}
                autoPlayInterval={5000}
                showNavigation={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu des services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions adaptées à tous vos besoins de services et d'entretien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              let anchor = "#menage";
              if (service.titre === "Personnel Spécialisé") anchor = "#personnel";
              if (service.titre === "Bon Linge") anchor = "#linge";
              const Icon = service.icone;
              // Couleurs différentes pour chaque catégorie
              let cardStyle = "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20";
              let iconStyle = "bg-primary/10 text-primary";
              if (service.titre === "Personnel Spécialisé") {
                cardStyle = "bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20";
                iconStyle = "bg-accent/10 text-accent";
              } else if (service.titre === "Bon Linge") {
                cardStyle = "bg-gradient-to-br from-slogan/5 to-slogan/10 border-slogan/20";
                iconStyle = "bg-slogan/10 text-slogan";
              }
              return (
                <Card key={index} className={`group hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in border-2 ${cardStyle}`}>
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl mb-6 group-hover:scale-110 transition-all duration-300 ${iconStyle}`}>
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {service.titre}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link to={`/nos-services${anchor}`} className="inline-block">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                      >
                        Détails
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/nos-services">Voir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L'excellence et la confiance au cœur de notre service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                  <avantage.icone className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {avantage.titre}
                </h3>
                <p className="text-muted-foreground">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Application mobile */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Notre application mobile
              </h2>
              <p className="text-lg text-muted-foreground">
                Gérez tous vos services en toute simplicité depuis votre smartphone. 
                Réservation, suivi, communication avec l'équipe, tout à portée de main.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Réservation en quelques clics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Suivi en temps réel de vos services</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Communication directe avec l'équipe</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Gestion de vos factures et paiements</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="hover:bg-white hover:text-primary border-2 border-primary hover:border-white transition-colors" asChild>
                  <Link to="/notre-application">
                    <Smartphone className="mr-2 h-5 w-5" />
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              {/* Mockup téléphone avec aperçu app mobile */}
              <div className="relative w-64 h-[500px] bg-gradient-to-br from-primary/80 to-accent/80 rounded-[2.5rem] shadow-2xl flex flex-col items-center p-4">
                {/* Encoche */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-2 bg-white/40 rounded-full"></div>
                {/* Écran */}
                <div className="relative w-full h-full bg-white rounded-2xl mt-8 flex flex-col items-center p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-2">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <div className="font-bold text-xl text-primary mb-1">SENGARMI</div>
                    <div className="text-sm text-muted-foreground">Services diversifiés</div>
                  </div>
                  <div className="space-y-4 w-full">
                    <button className="w-full flex items-center gap-3 bg-primary/10 hover:bg-primary/20 transition rounded-xl py-4 px-4 text-primary font-semibold text-base cursor-default">
                      <Calendar className="h-5 w-5" />
                      Réserver un service
                    </button>
                    <button className="w-full flex items-center gap-3 bg-accent/10 hover:bg-accent/20 transition rounded-xl py-4 px-4 text-accent font-semibold text-base cursor-default">
                      <MapPin className="h-5 w-5" />
                      Suivi en temps réel
                    </button>
                    <button className="w-full flex items-center gap-3 bg-secondary hover:bg-secondary/80 transition rounded-xl py-4 px-4 text-foreground font-semibold text-base cursor-default">
                      <Smartphone className="h-5 w-5" />
                      Mes réservations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus belle récompense
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {temoignages.map((temoignage, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full animate-fade-in">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex mb-4">
                          {[...Array(temoignage.note)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-muted-foreground mb-4 italic flex-grow">
                          "{temoignage.avis}"
                        </blockquote>
                        <div className="mt-auto">
                          <div className="font-semibold text-foreground">{temoignage.nom}</div>
                          <div className="text-sm text-muted-foreground">{temoignage.profession}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Boutons de navigation - visibles sur tous les écrans */}
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background border-2 shadow-lg hover:bg-accent" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background border-2 shadow-lg hover:bg-accent" />
              
              {/* Indicateurs de position (points) */}
              <div className="flex justify-center mt-6 space-x-2">
                {temoignages.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors cursor-pointer"
                    onClick={() => {
                      // Logique pour naviguer vers le slide spécifique
                      console.log(`Naviguer vers le témoignage ${index + 1}`);
                    }}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/temoignages">Voir tous les témoignages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contactez-nous
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une question ? Un devis personnalisé ? Notre équipe est là pour vous accompagner
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Téléphone</h3>
                      <p className="text-foreground">71 038 40 40</p>
                      <p className="text-sm text-muted-foreground">33 881 71 73</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-foreground">sengarmi09@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Adresse</h3>
                      <p className="text-foreground">1436 Boucote Sud LYNDIANE</p>
                      <p className="text-sm text-muted-foreground">Ziguinchor</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Horaires</h3>
                      <p className="text-foreground">Lun-Jeu : 9h-16h</p>
                      <p className="text-sm text-muted-foreground">Ven : 9h-13h30</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Réseaux sociaux */}
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Suivez-nous</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://www.instagram.com/sengarmi09?igsh=MWZ5dWF4b3J3bTRyOA==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  
                  <a href="https://www.facebook.com/share/1FTAJPQ9qX/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                  
                  <a href="https://www.tiktok.com/@sengarmi1?_r=1&_d=eldke8mmbe7kkc&sec_uid=MS4wLjABAAAAuh_9DMc7512Yw3wl9t2Xp1cRJKMZvLbrcwHoBaF802cJGmOFEzhLFUQ_7mQmewak&share_author_id=7529957532175008788&sharer_language=fr&source=h5_m&u_code=eldkedhj656k80&timestamp=1753473428&user_id=7529957532175008788&sec_user_id=MS4wLjABAAAAuh_9DMc7512Yw3wl9t2Xp1cRJKMZvLbrcwHoBaF802cJGmOFEzhLFUQ_7mQmewak&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7529957459056051975&share_link_id=5064a7b7-f4b2-4f83-b473-0b07fd137b99&share_app_id=1233&ugbiz_name=ACCOUNT&social_share_type=5&enable_checksum=1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">TikTok</span>
                  </a>
                  <a href="https://wa.me/221710384040" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                </div>
              </Card>
            </div>
            
            {/* Carte Google Maps */}
            <div className="space-y-6">
              <Card className="p-0 overflow-hidden">
                <div className="h-64">
                  <iframe
                    title="Carte Sengarmi"
                    src="https://www.google.com/maps?q=12.56233,-16.28770&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Notre engagement</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">&lt; 24h</div>
                    <div className="text-sm text-muted-foreground">Réponse garantie</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">7j/7</div>
                    <div className="text-sm text-muted-foreground">Disponibilité</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to action final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à transformer vos espaces ?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez les milliers de clients satisfaits qui nous font confiance 
            pour tous leurs besoins de services et d'entretien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-white hover:text-primary border-2 border-primary hover:border-white"
              asChild
            >
              <Link to="/notre-application">
                <Download className="mr-2 h-5 w-5" />
                Télécharger l'app
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;