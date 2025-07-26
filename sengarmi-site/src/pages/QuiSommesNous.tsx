import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

const QuiSommesNous = () => {
  const valeurs = [
    {
      icone: Heart,
      titre: "Passion du service",
      description: "Nous mettons tout notre cœur dans chaque mission pour vous offrir un service exceptionnel."
    },
    {
      icone: Users,
      titre: "Équipe professionnelle",
      description: "Des agents formés, expérimentés et dévoués à la satisfaction de nos clients."
    },
    {
      icone: Target,
      titre: "Excellence",
      description: "Nous visons l'excellence dans chaque détail pour dépasser vos attentes."
    },
    {
      icone: Award,
      titre: "Fiabilité",
      description: "Une entreprise de confiance qui respecte ses engagements et ses horaires."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez l'histoire et les valeurs qui font de Sengarmi votre partenaire de confiance 
            pour tous vos besoins de ménage et d'entretien.
          </p>
        </div>

        {/* Notre histoire */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Notre histoire</h2>
              <p className="text-lg text-muted-foreground">
                Fondée avec la vision de révolutionner le secteur du nettoyage, Sengarmi 
                est née de la volonté de proposer des services de ménage d'exception, 
                alliant professionnalisme, flexibilité et innovation technologique.
              </p>
              <p className="text-lg text-muted-foreground">
                Depuis nos débuts, nous avons su nous imposer comme une référence dans le domaine, 
                en développant une application mobile intuitive qui facilite la gestion de vos services 
                et en formant une équipe de professionnels passionnés par leur métier.
              </p>
              <p className="text-lg text-muted-foreground">
                Aujourd'hui, nous sommes fiers de servir des milliers de clients, particuliers et 
                professionnels, qui nous font confiance pour maintenir leurs espaces dans un état 
                impeccable.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <Users className="h-32 w-32 text-primary/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission et vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre mission</h3>
                <p className="text-muted-foreground">
                  Faciliter votre quotidien en vous offrant des services de ménage de qualité supérieure, 
                  accessibles et flexibles. Nous nous engageons à transformer vos espaces de vie et de 
                  travail en environnements sains et accueillants.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-lg mb-6">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre vision</h3>
                <p className="text-muted-foreground">
                  Devenir la référence incontournable des services de ménage en France, 
                  en révolutionnant l'expérience client grâce à l'innovation technologique 
                  et un service humain d'exception.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="mb-20 bg-secondary rounded-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((valeur, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <valeur.icone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {valeur.titre}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement qualité */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Notre engagement qualité
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Chez Sengarmi, la qualité n'est pas négociable. Nous nous engageons à vous fournir 
              un service irréprochable grâce à des processus rigoureux et une formation continue 
              de nos équipes.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-lg font-semibold text-foreground">Satisfait ou remboursé</div>
                <div className="text-muted-foreground">Notre garantie qualité</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-lg font-semibold text-foreground">Support client</div>
                <div className="text-muted-foreground">À votre écoute</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">+1000</div>
                <div className="text-lg font-semibold text-foreground">Clients satisfaits</div>
                <div className="text-muted-foreground">Qui nous font confiance</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuiSommesNous;