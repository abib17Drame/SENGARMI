import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award, BookOpen } from "lucide-react";

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
            pour tous vos besoins de services et d'entretien.
          </p>
        </div>

        {/* Notre histoire */}
        <section className="mb-20">
          <Card className="max-w-2xl mx-auto animate-fade-in">
            <CardContent className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3 justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
                Notre histoire
              </h2>
              <p className="text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget consequat massa enim nec sem.
              </p>
              <p className="text-lg text-muted-foreground">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mission et vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre mission</h3>
                <p className="text-muted-foreground mb-4">
                  SENGARMI est une initiative de l’entreprise AFRO BTECH, basée à Ziguinchor. Le projet a pour mission de recruter, former, placer et protéger les femmes et les hommes dans le secteur des services domestiques et d’entretien. En intégrant un dispositif d’assurance médicale et une assistance juridique, SENGARMI entend réformer le regard porté sur les agents de ménage et offrir un cadre structuré, sécurisé et digne.
                </p>
                <p className="text-muted-foreground">
                  Notre ambition : redonner à ce métier sa noblesse (Garmi = noble en Wolof) et impulser un développement durable, inclusif et local à Ziguinchor dans un premier temps, puis dans tout le pays.
                </p>
              </CardContent>
            </Card>
            {/* Vision */}
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-lg mb-6">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre vision</h3>
                <p className="text-muted-foreground mb-4 font-semibold">
                  Notre vision pour le secteur et au-delà. Pionniers d'un avenir meilleur : ensemble, créons une vision commune.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground">La satisfaction client</h4>
                    <p className="text-muted-foreground text-sm">
                      Devenir la référence nationale en matière de placement de personnel domestique protégé, formé et digne. Chez SENGARMI, la satisfaction du client n’est pas un simple objectif commercial, c’est une responsabilité partagée entre l’agent, la structure et le partenaire d’accueil. Nous visons l’excellence dans le service rendu, car un client satisfait est le meilleur ambassadeur de notre modèle.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">L’innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      Faire du métier de ménager(e)(ère) un vrai emploi reconnu, structuré, encadré et valorisé. Mais il faut noter que l’innovation ne se fera pas simplement sur le plan technologique, elle est : humaine, sociale et organisationnelle. Nous innovons parce que le secteur dans lequel nous intervenons est souvent figé dans des pratiques informelles, archaïques ou injustes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">La durabilité</h4>
                    <p className="text-muted-foreground text-sm">
                      La durabilité ne se limite pas seulement à la longévité de notre activité. Elle est pour nous la création d’emplois stables, qui résistent au temps, à la précarité et à l’informel. Promouvoir un changement durable des mentalités, en valorisant ce métier.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">L’adaptabilité</h4>
                    <p className="text-muted-foreground text-sm">
                      Nous rêvons d’un Sénégal où les <span className="font-semibold">Garmi</span> sont accueillis comme des alliés du bien-être, non comme des esclaves invisibles et insignifiants. L’adaptabilité est au cœur de notre démarche, car chaque foyer, chaque entreprise a des besoins spécifiques : nous adaptons le profil, les horaires et le type de service de chaque agent.
                    </p>
                  </div>
                </div>
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