import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  Building, 
  Sparkles, 
  Clock, 
  Calendar,
  Wrench,
  CheckCircle,
  Star
} from "lucide-react";

const NosServices = () => {
  const servicesParticuliers = [
    {
      icone: Home,
      titre: "Ménage régulier",
      description: "Entretien hebdomadaire ou mensuel de votre domicile selon vos besoins.",
      caracteristiques: [
        "Salon, chambres, cuisine, salle de bain",
        "Aspirateur, serpillière, dépoussiérage",
        "Produits d'entretien fournis",
        "Planning flexible"
      ]
    },
    {
      icone: Sparkles,
      titre: "Grand ménage",
      description: "Nettoyage complet et approfondi de votre logement.",
      caracteristiques: [
        "Nettoyage intensif de toutes les pièces",
        "Intérieur des placards et électroménager",
        "Vitres intérieures",
        "Désinfection complète"
      ]
    },
    {
      icone: Clock,
      titre: "Ménage ponctuel",
      description: "Intervention unique pour des besoins spécifiques.",
      caracteristiques: [
        "Avant ou après événement",
        "Fin de bail, état des lieux",
        "Remise en état rapide",
        "Disponibilité sous 24h"
      ]
    }
  ];

  const servicesProfessionnels = [
    {
      icone: Building,
      titre: "Bureaux et espaces de travail",
      description: "Entretien professionnel de vos locaux commerciaux.",
      caracteristiques: [
        "Espaces de travail et salles de réunion",
        "Sanitaires et espaces communs",
        "Gestion des déchets",
        "Intervention hors horaires de bureau"
      ]
    },
    {
      icone: Wrench,
      titre: "Nettoyage après travaux",
      description: "Remise en état après rénovations ou aménagements.",
      caracteristiques: [
        "Élimination des résidus de chantier",
        "Nettoyage des surfaces et vitres",
        "Dépoussiérage complet",
        "Remise en état opérationnelle"
      ]
    },
    {
      icone: Calendar,
      titre: "Contrats d'entretien",
      description: "Solutions personnalisées pour l'entretien régulier.",
      caracteristiques: [
        "Planning adapté à votre activité",
        "Équipe dédiée et formée",
        "Matériel professionnel inclus",
        "Suivi qualité régulier"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes et personnalisées pour répondre à tous vos besoins 
            de nettoyage et d'entretien, que vous soyez particulier ou professionnel.
          </p>
        </div>

        {/* Services particuliers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pour les particuliers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformez votre domicile en un havre de paix avec nos services adaptés à votre rythme de vie
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesParticuliers.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.caracteristiques.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-slogan mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services professionnels */}
        <section className="mb-20 bg-secondary rounded-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pour les professionnels
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maintenez vos espaces de travail dans des conditions optimales avec nos solutions entreprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesProfessionnels.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-fade-in bg-background">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icone className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.caracteristiques.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-slogan mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Processus de réservation */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un processus simple et transparent pour réserver vos services
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { numero: "1", titre: "Téléchargez l'app", description: "Installez notre application mobile gratuite" },
              { numero: "2", titre: "Choisissez votre service", description: "Sélectionnez le type de ménage adapté" },
              { numero: "3", titre: "Planifiez", description: "Choisissez date, heure et fréquence" },
              { numero: "4", titre: "Profitez", description: "Notre équipe s'occupe de tout" }
            ].map((etape, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground text-xl font-bold mb-4">
                  {etape.numero}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {etape.titre}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {etape.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Garanties */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos garanties
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icone: Star,
                titre: "Satisfaction garantie",
                description: "Service non conforme ? Nous revenons gratuitement dans les 24h."
              },
              {
                icone: CheckCircle,
                titre: "Personnel assuré",
                description: "Tous nos agents sont assurés et couverts par notre responsabilité civile."
              },
              {
                icone: Clock,
                titre: "Ponctualité assurée",
                description: "Respect des horaires convenus avec une tolérance de 15 minutes maximum."
              }
            ].map((garantie, index) => (
              <Card key={index} className="text-center animate-fade-in">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slogan/10 rounded-lg mb-4">
                    <garantie.icone className="h-8 w-8 text-slogan" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {garantie.titre}
                  </h3>
                  <p className="text-muted-foreground">
                    {garantie.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center bg-primary rounded-lg p-8 lg:p-12 text-primary-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à réserver votre service ?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Téléchargez notre application mobile pour découvrir nos tarifs transparents 
            et réserver votre service en quelques clics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/notre-application">
                Télécharger l'app
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NosServices;