import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.nom || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset du formulaire
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      sujet: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const infosContact = [
    {
      icone: Phone,
      titre: "Téléphone",
      info: "77 777 77 77",
      detail: "Lun-Dim : 8h-19h"
    },
    {
      icone: Mail,
      titre: "Email",
      info: "contact@sengarmi.com",
      detail: "Réponse sous 24h ouvrées"
    },
    {
      icone: MapPin,
      titre: "Adresse",
      info: "Ziguinchor",
      detail: "Ziguinchor"
    },
    {
      icone: Clock,
      titre: "Horaires",
      info: "7j/7 via l'application",
      detail: "Support 24h/24 pour urgences"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question ? Un devis personnalisé ? Notre équipe est là pour vous accompagner 
            et répondre à tous vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-primary" />
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.fr"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <Input
                    id="sujet"
                    name="sujet"
                    type="text"
                    value={formData.sujet}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande, vos besoins ou posez votre question..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Champs obligatoires. Vos données sont protégées selon notre politique de confidentialité.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                {infosContact.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.titre}</h3>
                      <p className="text-foreground">{info.info}</p>
                      <p className="text-sm text-muted-foreground">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Autres moyens de contact */}
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Autres moyens de nous joindre</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Application mobile</span>
                    <span className="text-foreground font-medium">Chat en direct</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Réseaux sociaux</span>
                    <span className="text-foreground font-medium">@SengarmiOfficiel</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">WhatsApp</span>
                    <span className="text-foreground font-medium">77 777 77 77</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ rapide */}
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Questions fréquentes</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground text-sm">Comment réserver ?</p>
                    <p className="text-xs text-muted-foreground">Via l'application mobile ou en nous contactant directement.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Délai de réponse ?</p>
                    <p className="text-xs text-muted-foreground">Moins de 24h pour les emails, immédiat par téléphone.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Urgence weekend ?</p>
                    <p className="text-xs text-muted-foreground">Service d'urgence disponible via l'application.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Carte Google Maps (placeholder) */}
        <section className="mt-20">
          <Card className="animate-fade-in">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Carte interactive disponible prochainement</p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Engagement service client */}
        <section className="mt-16 text-center bg-secondary rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Notre engagement service client
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary">&lt; 24h</div>
              <div className="text-lg font-semibold text-foreground">Réponse garantie</div>
              <div className="text-muted-foreground">À tous vos messages</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary">7j/7</div>
              <div className="text-lg font-semibold text-foreground">Disponibilité</div>
              <div className="text-muted-foreground">Via l'application mobile</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-lg font-semibold text-foreground">Satisfaction</div>
              <div className="text-muted-foreground">Notre objectif quotidien</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;