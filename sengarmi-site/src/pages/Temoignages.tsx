import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Temoignages = () => {
  const temoignages = [
    {
      nom: "BIB",
      profession: "Particulier - Paris 15ème",
      avis: "Service impeccable ! L'équipe de Sengarmi est ponctuelle, professionnelle et très minutieuse. Mon appartement n'a jamais été aussi propre. L'application mobile facilite vraiment la gestion des rendez-vous.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Directeur d'entreprise",
      avis: "Nous faisons appel à Sengarmi pour l'entretien de nos bureaux depuis 6 mois. Le travail est irréprochable et l'équipe s'adapte parfaitement à nos horaires. Excellent rapport qualité-prix.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Particulier - Neuilly",
      avis: "Après des travaux de rénovation, Sengarmi a fait des miracles ! Ils ont réussi à enlever toute la poussière et les résidus. Résultat parfait en un temps record. Je recommande sans hésitation.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Gérant de boutique",
      avis: "Service professionnel et fiable. L'équipe respecte toujours les horaires convenus et le niveau de propreté est constant. L'application permet un suivi en temps réel très pratique.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Particulier - Boulogne",
      avis: "Équipe adorable et très consciencieuse ! Ils prennent soin de mes affaires et utilisent des produits respectueux de l'environnement. Le service client est réactif et à l'écoute.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Dirigeant d'association",
      avis: "Nous organisons régulièrement des événements et Sengarmi assure parfaitement le nettoyage avant et après. Intervention rapide, efficace et tarifs transparents.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Particulier - Vincennes",
      avis: "Service de grand ménage exceptionnel ! Ils ont redonné vie à ma maison après plusieurs mois d'absence. Attention portée aux détails remarquable. Je suis devenue cliente régulière.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Responsable d'agence",
      avis: "Prestation de qualité professionnelle. L'équipe est discrète, efficace et très bien organisée. Le contrat d'entretien nous convient parfaitement et les tarifs sont compétitifs.",
      note: 5,
      photo: "BIB"
    },
    {
      nom: "BIB",
      profession: "Particulier - Levallois",
      avis: "Ménage hebdomadaire impeccable depuis plus d'un an. L'équipe connaît maintenant parfaitement nos habitudes et nos préférences. Relation de confiance établie. Excellent service !",
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