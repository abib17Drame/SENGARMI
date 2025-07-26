import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Building, Hotel, Hospital, Calendar, User, Utensils, Sparkles, Car, Users, Scissors, Shirt, Star, Smile, Wrench } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const servicesMenage = [
  {
    icone: Home,
    titre: "Ménage à domicile",
    description: "Entretien régulier ou ponctuel de votre maison ou appartement."
  },
  {
    icone: Building,
    titre: "Entretien de bureaux",
    description: "Nettoyage professionnel de vos espaces de travail et locaux commerciaux."
  },
  {
    icone: Hotel,
    titre: "Nettoyage d’hôtels",
    description: "Services d’entretien pour chambres, parties communes et espaces d’accueil."
  },
  {
    icone: Hospital,
    titre: "Nettoyage hospitalier",
    description: "Hygiène et propreté dans les établissements de santé et hôpitaux."
  },
  {
    icone: Calendar,
    titre: "Entretien événementiel",
    description: "Nettoyage avant, pendant et après vos événements privés ou professionnels."
  }
];

const personnelSpecialise = [
  {
    icone: Utensils,
    titre: "Cuisinier",
    description: "Préparation de repas à domicile ou pour vos événements."
  },
  {
    icone: User,
    titre: "Aide-ménagère",
    description: "Assistance complète pour l’entretien de votre intérieur."
  },
  {
    icone: Smile,
    titre: "Réceptionniste",
    description: "Accueil et gestion de vos visiteurs ou clients."
  },
  {
    icone: Star,
    titre: "Maître de cérémonie",
    description: "Organisation et coordination de vos événements."
  },
  {
    icone: Sparkles,
    titre: "Agent de nettoyage",
    description: "Spécialiste du nettoyage pour tous types d’environnements."
  },
  {
    icone: Car,
    titre: "Agent d’entretien de véhicules",
    description: "Nettoyage et entretien intérieur/extérieur de vos véhicules."
  }
];

const bonLinge = [
  {
    icone: Shirt,
    titre: "Lavage",
    description: "Prise en charge et nettoyage de votre linge."
  },
  {
    icone: Wrench, // Remplacement de Iron par Wrench
    titre: "Repassage",
    description: "Repassage soigné de vos vêtements et textiles."
  },
  {
    icone: Scissors,
    titre: "Couture (tailleur)",
    description: "Retouches et réparations de vos vêtements."
  }
];

const NosServices = () => {
  const location = useLocation();

  useEffect(() => {
    // Si il y a une ancre dans l'URL, faire défiler vers cette section
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l’ensemble des services proposés par l’agence SENGARMI, organisés en grandes catégories pour répondre à tous vos besoins.
          </p>
        </div>

        {/* Services de Ménage */}
        <section id="menage" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Services de Ménage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ménage à domicile, entretien de bureaux, nettoyage d’hôtels, nettoyage hospitalier, entretien événementiel…
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesMenage.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personnel Spécialisé */}
        <section id="personnel" className="mb-20 bg-secondary rounded-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Personnel Spécialisé
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuisinier, aide-ménagère, réceptionniste, maître de cérémonie, agent de nettoyage, agent d’entretien de véhicules…
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personnelSpecialise.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-fade-in bg-background">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icone className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bon Linge */}
        <section id="linge" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Bon Linge
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lavage, repassage, couture (tailleur) : confiez-nous l’entretien complet de votre linge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bonLinge.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NosServices;