import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { temoignages } from "@/data/temoignages";

const Temoignages = () => {

  const statistiques = [
    { chiffre: "98%", label: "Clients satisfaits" },
    { chiffre: "1200+", label: "Avis positifs" },
    { chiffre: "4.9/5", label: "Note moyenne" },
    { chiffre: "95%", label: "Clients fidèles" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Témoignages clients
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez pourquoi nos clients nous font confiance et partagent 
            leur expérience avec Sengarmi.
          </p>
        </div>

        {/* Statistiques */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistiques.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.chiffre}
                </div>
                <div className="text-lg text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Carousel de témoignages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
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
                    <Card className="h-full hover:shadow-hover transition-all duration-300 animate-fade-in">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Note */}
                        <div className="flex mb-4">
                          {[...Array(temoignage.note)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Avis */}
                        <blockquote className="text-muted-foreground mb-6 italic flex-grow">
                          "{temoignage.avis}"
                        </blockquote>
                        
                        {/* Profil */}
                        <div className="flex items-center mt-auto">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                            {temoignage.photo}
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{temoignage.nom}</div>
                            <div className="text-sm text-muted-foreground">{temoignage.profession}</div>
                          </div>
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
        </section>



        {/* Partagez votre expérience */}
        <section className="text-center bg-primary rounded-lg p-8 lg:p-12 text-primary-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Vous aussi, partagez votre expérience !
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Votre avis compte pour nous et aide d'autres personnes à découvrir nos services. 
            Laissez-nous un commentaire après votre prochaine prestation.
          </p>
          <div className="space-y-4">
            <p className="opacity-75">
              Laissez votre avis directement via notre application mobile 
              ou contactez notre service client.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Temoignages;