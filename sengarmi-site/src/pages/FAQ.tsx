import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const categories = [
    {
      titre: "Réservation et tarifs",
      questions: [
        {
          question: "Comment puis-je réserver un service ?",
          reponse: "Vous pouvez réserver directement via notre application mobile Sengarmi, disponible sur iOS et Android. Il vous suffit de sélectionner le type de service, choisir une date et confirmer votre réservation."
        },
        {
          question: "Quels sont vos tarifs ?",
          reponse: "Nos tarifs varient selon le type de service, la superficie et la fréquence. Vous trouverez tous les prix détaillés dans notre application mobile. Nous proposons également des devis personnalisés pour les professionnels."
        },
        {
          question: "Puis-je modifier ou annuler ma réservation ?",
          reponse: "Oui, vous pouvez modifier ou annuler votre réservation jusqu'à 24h avant l'intervention via l'application. Pour les annulations tardives, des frais peuvent s'appliquer."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          reponse: "Non, nos tarifs sont transparents. Tous les coûts sont affichés clairement lors de la réservation. Le matériel et les produits d'entretien sont inclus dans le prix."
        }
      ]
    },
    {
      titre: "Services et prestations",
      questions: [
        {
          question: "Quels types de ménage proposez-vous ?",
          reponse: "Nous proposons du ménage régulier, ponctuel, grand ménage, nettoyage après travaux, entretien de bureaux et services personnalisés selon vos besoins spécifiques."
        },
        {
          question: "Fournissez-vous le matériel et les produits ?",
          reponse: "Oui, nous apportons tout le matériel professionnel nécessaire ainsi que les produits d'entretien. Nous utilisons des produits respectueux de l'environnement sur demande."
        },
        {
          question: "Combien de temps dure une intervention ?",
          reponse: "La durée varie selon la superficie et le type de service : 1h30 à 3h pour un appartement, 3h à 5h pour une maison. Le temps exact est indiqué lors de la réservation."
        },
        {
          question: "Intervenez-vous pendant les weekends et jours fériés ?",
          reponse: "Oui, nous proposons des créneaux le weekend et certains jours fériés. Les tarifs peuvent varier selon les créneaux choisis."
        }
      ]
    },
    {
      titre: "Équipe et sécurité",
      questions: [
        {
          question: "Vos agents sont-ils formés et assurés ?",
          reponse: "Absolument ! Tous nos agents sont formés aux techniques de nettoyage professionnel, assurés et couverts par notre responsabilité civile professionnelle."
        },
        {
          question: "Puis-je demander la même équipe à chaque fois ?",
          reponse: "Nous essayons de maintenir la continuité avec la même équipe pour les services réguliers. Cela permet un service personnalisé et une meilleure connaissance de vos préférences."
        },
        {
          question: "Que se passe-t-il en cas de dégât ?",
          reponse: "En cas de dommage accidentel, notre assurance responsabilité civile prend en charge les réparations. Signalez tout incident immédiatement via l'application."
        },
        {
          question: "Dois-je être présent pendant l'intervention ?",
          reponse: "Non, ce n'est pas obligatoire. Beaucoup de nos clients nous confient leurs clés. Nous proposons aussi des boîtiers à codes sécurisés pour plus de flexibilité."
        }
      ]
    },
    {
      titre: "Application et suivi",
      questions: [
        {
          question: "L'application est-elle gratuite ?",
          reponse: "Oui, l'application Sengarmi est entièrement gratuite et disponible sur iOS et Android. Elle vous permet de gérer tous vos services facilement."
        },
        {
          question: "Comment puis-je suivre ma prestation en temps réel ?",
          reponse: "L'application vous envoie des notifications en temps réel : arrivée de l'équipe, début et fin de prestation, avec possibilité de communiquer directement avec nos agents."
        },
        {
          question: "Puis-je laisser des instructions spéciales ?",
          reponse: "Oui, vous pouvez ajouter des notes et instructions spéciales lors de la réservation ou via la messagerie de l'application pour personnaliser votre service."
        },
        {
          question: "Comment payer mes prestations ?",
          reponse: "Le paiement se fait automatiquement via l'application par carte bancaire après chaque prestation. Vous recevez une facture détaillée par email."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Questions fréquentes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services, 
            tarifs et fonctionnement. Besoin d'aide supplémentaire ? Contactez-nous !
          </p>
        </div>

        {/* FAQ par catégories */}
        <div className="space-y-12">
          {categories.map((categorie, categoryIndex) => (
            <section key={categoryIndex} className="animate-fade-in">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
                {categorie.titre}
              </h2>
              
              <div className="space-y-4 max-w-4xl mx-auto">
                {categorie.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 100 + index;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={index} className="overflow-hidden">
                      <button
                        className="w-full text-left"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <div className="p-6 hover:bg-secondary/50 transition-colors flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <CardContent className="px-6 pb-6 pt-0">
                          <div className="border-t border-border pt-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.reponse}
                            </p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Contact pour autres questions */}
        <section className="mt-20 text-center bg-secondary rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions spécifiques. 
            N'hésitez pas à nous contacter !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@sengarmi.fr" 
              className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Nous envoyer un email
            </a>
            <a 
              href="tel:+33123456789" 
              className="inline-flex items-center justify-center h-12 px-8 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Nous appeler
            </a>
          </div>
        </section>

        {/* Aide rapide */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Aide rapide
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Support dans l'app
                </h3>
                <p className="text-muted-foreground text-sm">
                  Chat en direct disponible 7j/7 dans l'application mobile
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Urgence
                </h3>
                <p className="text-muted-foreground text-sm">
                  Ligne d'urgence disponible 24h/24 pour les clients professionnels
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slogan/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Réseaux sociaux
                </h3>
                <p className="text-muted-foreground text-sm">
                  Suivez-nous et contactez-nous via nos réseaux sociaux
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;