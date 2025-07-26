import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, FlaskConical, Stethoscope, Scale, Handshake, Star, Users, Award } from "lucide-react";

const NosPartenaires = () => {
  const partenaires = [
    {
      icone: Building,
      titre: "Industries Alimentaires",
      description: "Collaboration avec les industries alimentaires pour des services de nettoyage spécialisés et l'entretien des locaux de production.",
      services: [
        
      ]
    },
    {
      icone: FlaskConical,
      titre: "Industries Chimiques",
      description: "Partenariat avec les industries chimiques pour des services d'entretien adaptés aux environnements sensibles.",
      services: [
        
      ]
    },
    {
      icone: Stethoscope,
      titre: "Médecins",
      description: "Collaboration avec les professionnels de santé pour l'entretien des cabinets médicaux et cliniques.",
      services: [
        
      ]
    },
    {
      icone: Scale,
      titre: "Avocats",
      description: "Partenariat avec les cabinets d'avocats pour l'entretien professionnel des espaces de travail.",
      services: [
        
      ]
    }
  ];

  const avantages = [
    {
      icone: Handshake,
      titre: "Confiance mutuelle",
      description: "Des partenariats basés sur la confiance et l'excellence du service."
    },
    {
      icone: Star,
      titre: "Excellence",
      description: "Des services adaptés aux besoins spécifiques de chaque secteur."
    },
    {
      icone: Users,
      titre: "Expertise partagée",
      description: "Échange de compétences et de bonnes pratiques avec nos partenaires."
    },
    {
      icone: Award,
      titre: "Qualité garantie",
      description: "Engagement qualité et satisfaction client pour tous nos partenaires."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos partenaires
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos partenaires de confiance avec qui nous collaborons pour offrir 
            des services d'excellence dans différents secteurs d'activité.
          </p>
        </div>

        {/* Nos partenaires */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos partenaires de confiance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des collaborations solides avec des acteurs reconnus dans leurs domaines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {partenaires.map((partenaire, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <partenaire.icone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{partenaire.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{partenaire.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Services proposés :</h4>
                    <ul className="space-y-1">
                      {partenaire.services.map((service, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Avantages des partenariats */}
        <section className="mb-20 bg-secondary rounded-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pourquoi nos partenariats ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des collaborations qui bénéficient à tous : nos partenaires, nos clients et notre équipe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <avantage.icone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {avantage.titre}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center bg-primary rounded-lg p-8 lg:p-12 text-primary-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Devenez partenaire SENGARMI
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Vous êtes une entreprise ou un professionnel intéressé par une collaboration ? 
            Contactez-nous pour discuter de nos opportunités de partenariat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:partenariats@sengarmi.fr" 
              className="inline-flex items-center justify-center h-12 px-8 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Nous contacter
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center h-12 px-8 border border-primary-foreground text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NosPartenaires; 