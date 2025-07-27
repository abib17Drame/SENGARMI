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
  Scissors
} from "lucide-react";
import { temoignages } from "@/data/temoignages";
import { useEffect, useRef, useState } from "react";

const Accueil = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      const currentIndex = api.selectedScrollSnap();
      const totalSlides = api.slideNodes().length;
      const nextIndex = (currentIndex + 1) % totalSlides;
      api.scrollTo(nextIndex);
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
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  skipSnaps: false,
                  duration: 20,
                }}
                className="w-full max-w-5xl"
                setApi={setApi}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex justify-center items-center h-96">
                      <img 
                        src="/logo.png" 
                        alt="Logo SENGARMI"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex justify-center items-center h-96">
                      <img 
                        src="/img.png" 
                        alt="Services SENGARMI"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background border-2 shadow-lg hover:bg-accent" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background border-2 shadow-lg hover:bg-accent" />
              </Carousel>
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