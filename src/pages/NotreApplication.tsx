import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Calendar, 
  MessageSquare, 
  CreditCard, 
  Bell, 
  MapPin,
  Star,
  Shield,
  Clock,
  Download
} from "lucide-react";

const NotreApplication = () => {
  const fonctionnalites = [
    {
      icone: Calendar,
      titre: "Réservation facile",
      description: "Planifiez vos services en quelques clics selon vos disponibilités."
    },
    {
      icone: MessageSquare,
      titre: "Communication directe",
      description: "Échangez en temps réel avec votre équipe de services."
    },
    {
      icone: CreditCard,
      titre: "Paiement sécurisé",
      description: "Payez facilement par carte bancaire avec reçu automatique."
    },
    {
      icone: Bell,
      titre: "Notifications en temps réel",
      description: "Suivez l'avancement de votre service avec des alertes personnalisées."
    },
    {
      icone: MapPin,
      titre: "Suivi géolocalisé",
      description: "Localisez votre équipe et estimez l'heure d'arrivée."
    },
    {
      icone: Star,
      titre: "Évaluation et retours",
      description: "Notez vos prestations et aidez-nous à améliorer nos services."
    }
  ];

  const avantages = [
    {
      icone: Clock,
      titre: "Gain de temps",
      description: "Plus besoin d'appeler ! Gérez tout depuis votre smartphone en quelques secondes."
    },
    {
      icone: Shield,
      titre: "Tranquillité d'esprit",
      description: "Suivi en temps réel, équipes assurées et service client réactif."
    },
    {
      icone: Smartphone,
      titre: "Simplicité d'usage",
      description: "Interface intuitive pensée pour tous les âges et niveaux technologiques."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/logo.png" 
              alt="Logo Sengarmi"
              className="h-12 w-auto mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              L'application Sengarmi
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Gérez tous vos services depuis votre smartphone. 
              Simple, rapide et sécurisé.
            </p>
            
            {/* Mockup de l'app */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-64 h-96 bg-gradient-to-br from-primary to-accent rounded-3xl p-4 shadow-hover">
                  <div className="bg-background rounded-2xl h-full flex flex-col">
                    <div className="p-4 border-b border-border">
                    </div>
                    <div className="flex-1 p-4 space-y-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <div className="text-sm font-semibold">Prochain service</div>
                        <div className="text-xs text-muted-foreground">Demain 14h00</div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-secondary h-8 rounded"></div>
                        <div className="bg-secondary h-8 rounded"></div>
                        <div className="bg-secondary h-8 rounded"></div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="bg-accent rounded-lg h-10 flex items-center justify-center">
                        <span className="text-accent-foreground text-sm font-semibold">Réserver</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Boutons de téléchargement */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-6 bg-primary text-primary-foreground rounded-lg shadow hover:bg-primary/90 transition-colors"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-left">
                  <span className="block text-xs">Télécharger sur</span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-6 bg-primary text-primary-foreground rounded-lg shadow hover:bg-primary/90 transition-colors"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-5.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-5.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997"/>
                </svg>
                <span className="text-left">
                  <span className="block text-xs">Disponible sur</span>
                  <span className="block text-sm font-semibold">Google Play</span>
                </span>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Compatible iOS 12+ et Android 8.0+
            </p>
          </div>
        </section>

        {/* Fonctionnalités principales */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Fonctionnalités principales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une application complète pour simplifier la gestion de tous vos services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fonctionnalites.map((fonctionnalite, index) => (
              <Card key={index} className="text-center hover:shadow-hover transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                    <fonctionnalite.icone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {fonctionnalite.titre}
                  </h3>
                  <p className="text-muted-foreground">
                    {fonctionnalite.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pourquoi choisir l'app */}
        <section className="mb-20 bg-secondary rounded-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Pourquoi choisir notre application ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une expérience utilisateur pensée pour votre confort et votre tranquillité
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
                  <avantage.icone className="h-10 w-10 text-accent-foreground" />
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
        </section>

        {/* Captures d'écran */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Aperçu de l'application
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'interface simple et intuitive de Sengarmi
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {["Accueil", "Réservation", "Suivi", "Profil"].map((screen, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-48 h-80 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="h-16 w-16 text-primary/30" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{screen}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Témoignage utilisateur */}
        <section className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-muted-foreground mb-6 italic">
                "L'application Sengarmi a révolutionné ma façon de gérer le ménage. 
                Je peux tout planifier depuis mon canapé et suivre l'équipe en temps réel. 
                C'est exactement ce dont j'avais besoin !"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                  BIB
                </div>
                <div>
                  <div className="font-semibold text-foreground">BIB</div>
                  <div className="text-sm text-muted-foreground">Utilisatrice depuis 1 an</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to action final */}
        <section className="text-center bg-primary rounded-lg p-8 lg:p-12 text-primary-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à simplifier votre quotidien ?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Téléchargez l’application Sengarmi dès maintenant et découvrez une nouvelle façon de gérer tous vos services du quotidien : ménage, assistance, entretien, et bien plus encore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                          <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-6 bg-white text-primary rounded-lg shadow hover:bg-gray-50 transition-colors"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-left">
                  <span className="block text-xs">Télécharger sur</span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-6 bg-white text-primary rounded-lg shadow hover:bg-gray-50 transition-colors"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-5.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-5.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997"/>
                </svg>
                <span className="text-left">
                  <span className="block text-xs">Disponible sur</span>
                  <span className="block text-sm font-semibold">Google Play</span>
                </span>
              </a>
          </div>
          <p className="text-sm opacity-75">
            Gratuit • Disponible sur iOS et Android
          </p>
        </section>
      </div>
    </div>
  );
};

export default NotreApplication;