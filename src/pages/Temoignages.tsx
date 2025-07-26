import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Temoignages = () => {
  const temoignages = [
    {
      nom: "BIB",
      profession: "Particulier - Paris 15ème",
      avis: "Le personnel spécialisé est exceptionnel ! Cuisiniers et aides-ménagères très compétents. L'application mobile facilite vraiment la gestion de tous mes services.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Directeur d'entreprise",
      avis: "Services diversifiés parfaits : nettoyage, réceptionnistes, événementiel. L'équipe s'adapte parfaitement à nos besoins. Excellent rapport qualité-prix.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Particulier - Neuilly",
      avis: "Le service 'Bon Linge' est excellent ! Lavage, repassage et couture de qualité. Très satisfait de tous les services proposés.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Gérant de boutique",
      avis: "Services professionnels et fiables. Personnel spécialisé compétent et respect des horaires. L'application permet un suivi en temps réel très pratique.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Particulier - Boulogne",
      avis: "Équipe adorable et très consciencieuse ! Personnel spécialisé compétent et services diversifiés. Le service client est réactif et à l'écoute.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Dirigeant d'association",
      avis: "Nous organisons régulièrement des événements et Sengarmi assure parfaitement tous les services : nettoyage, personnel spécialisé, événementiel. Intervention rapide et efficace.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Particulier - Vincennes",
      avis: "Services exceptionnels ! Ménage, personnel spécialisé et bon linge. Ils ont redonné vie à ma maison. Attention portée aux détails remarquable.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Responsable d'agence",
      avis: "Prestations de qualité professionnelle. Services diversifiés : nettoyage, personnel spécialisé, événementiel. L'équipe est discrète et efficace.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Particulier - Levallois",
      avis: "Services hebdomadaires impeccables depuis plus d'un an. Personnel spécialisé et bon linge. L'équipe connaît nos habitudes. Relation de confiance établie.",
      note: 5,
      photo: "BIB"
    }
  ];

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

        {/* Grille de témoignages */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <Card key={index} className="hover:shadow-hover transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  {/* Note */}
                  <div className="flex mb-4">
                    {[...Array(temoignage.note)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Avis */}
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{temoignage.avis}"
                  </blockquote>
                  
                  {/* Profil */}
                  <div className="flex items-center">
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
            ))}
          </div>
        </section>

        {/* Section vidéo témoignage (placeholder) */}
        <section className="mb-20 bg-secondary rounded-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Témoignage vidéo
            </h2>
            <p className="text-lg text-muted-foreground">
              Écoutez l'expérience de Marie, cliente fidèle depuis 2 ans
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground">Témoignage vidéo disponible prochainement</p>
              </div>
            </div>
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