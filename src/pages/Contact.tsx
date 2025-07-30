import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { usePopup } from "@/hooks/usePopup";
import AnimatedPopup from "@/components/AnimatedPopup";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { popup, showSuccess, showError, hidePopup } = usePopup();

  // Configuration EmailJS
  const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    DESTINATION_EMAIL: import.meta.env.VITE_SENGARMI_EMAIL
  };

  // Initialisation d'EmailJS au chargement du composant
  useEffect(() => {
    if (typeof window !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  // Fonctions de validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {

    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
    return phone === "" || phoneRegex.test(phone);
  };

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
  };

  const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10;
  };

  const validateSubject = (subject: string): boolean => {
    return subject.trim().length >= 3;
  };

  // Validation en temps réel
  const validateField = (name: string, value: string) => {
    let error = "";
    
    switch (name) {
      case "nom":
        if (!validateName(value)) {
          error = "Le nom doit contenir au moins 2 caractères";
        }
        break;
      case "email":
        if (!validateEmail(value)) {
          error = "Veuillez entrer une adresse email valide";
        }
        break;
      case "telephone":
        if (value && !validatePhone(value)) {
          error = "Format de téléphone invalide";
        }
        break;
      case "sujet":
        if (value && !validateSubject(value)) {
          error = "Le sujet doit contenir au moins 3 caractères";
        }
        break;
      case "message":
        if (!validateMessage(value)) {
          error = "Le message doit contenir au moins 10 caractères";
        }
        break;
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validation en temps réel
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation complète avant envoi
    const newErrors = {
      nom: "",
      email: "",
      telephone: "",
      sujet: "",
      message: ""
    };

    if (!validateName(formData.nom)) {
      newErrors.nom = "Le nom doit contenir au moins 2 caractères";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }
    if (formData.telephone && !validatePhone(formData.telephone)) {
      newErrors.telephone = "Format de téléphone invalide";
    }
    if (formData.sujet && !validateSubject(formData.sujet)) {
      newErrors.sujet = "Le sujet doit contenir au moins 3 caractères";
    }
    if (!validateMessage(formData.message)) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);

    // Vérifier s'il y a des erreurs
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (hasErrors) {
      showError(
        "Erreur de validation",
        "Veuillez corriger les erreurs dans le formulaire."
      );
      return;
    }

    // Vérification de la configuration EmailJS
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      showError(
        "Configuration manquante",
        "Veuillez configurer EmailJS dans le fichier .env.local"
      );
      return;
    }

    setIsLoading(true);

    try {
      // Génération de la date et heure actuelles
      const now = new Date();
      const date = now.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const time = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
      });

      // Préparation des paramètres pour EmailJS
      const templateParams = {
        from_name: formData.nom,
        from_email: formData.email,
        from_phone: formData.telephone || "Non renseigné",
        subject: formData.sujet || "Message depuis le site web Sengarmi",
        message: formData.message,
        to_email: EMAILJS_CONFIG.DESTINATION_EMAIL,
        reply_to: formData.email,
        date: date,
        time: time
      };

      // Envoi de l'email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        showSuccess(
          "Message envoyé avec succès !",
          "Nous vous répondrons dans les plus brefs délais."
        );

        // Reset du formulaire
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          sujet: "",
          message: ""
        });
        setErrors({
          nom: "",
          email: "",
          telephone: "",
          sujet: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      showError(
        "Erreur d'envoi",
        "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const infosContact = [
    {
      icone: Phone,
      titre: "Téléphone",
      info: "71 038 40 40 / 33 881 71 73",
      detail: "Lun-Dim : 8h-19h"
    },
    {
      icone: Mail,
      titre: "Email",
      info: "sengarmi09@gmail.com",
      detail: "Réponse sous 24h ouvrées"
    },
    {
      icone: MapPin,
      titre: "Adresse",
      info: "1436 Boucote Sud LYNDIANE Ziguinchor",
      detail: "Ziguinchor"
    },
    {
      icone: Clock,
      titre: "Horaires",
      info: "Lun-Jeu : 9h-16h | Ven : 9h-13h30",
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
                      className={errors.nom ? "border-red-500" : ""}
                      required
                    />
                    {errors.nom && (
                      <p className="text-red-500 text-xs mt-1">{errors.nom}</p>
                    )}
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
                      placeholder="Votre numéro de téléphone"
                      className={errors.telephone ? "border-red-500" : ""}
                    />
                    {errors.telephone && (
                      <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>
                    )}
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
                    placeholder="votre.email@exemple.sn"
                    className={errors.email ? "border-red-500" : ""}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
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
                    className={errors.sujet ? "border-red-500" : ""}
                  />
                  {errors.sujet && (
                    <p className="text-red-500 text-xs mt-1">{errors.sujet}</p>
                  )}
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
                    className={errors.message ? "border-red-500" : ""}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isLoading ? "Envoi en cours..." : "Envoyer le message"}
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
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors">
                    <span className="text-muted-foreground flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </span>
                    <a href="https://www.instagram.com/sengarmi09?igsh=MWZ5dWF4b3J3bTRyOA==" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center">
                      @sengarmi09
                      <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors">
                    <span className="text-muted-foreground flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </span>
                    <a href="https://www.linkedin.com/in/sengarmi-sengarmi-42b17b377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center">
                      Sengarmi
                      <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors">
                    <span className="text-muted-foreground flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </span>
                    <a href="https://www.facebook.com/share/1FTAJPQ9qX/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center">
                      Sengarmi
                      <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors">
                    <span className="text-muted-foreground flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                      TikTok
                    </span>
                    <a href="https://www.tiktok.com/@sengarmi1?_r=1&_d=eldke8mmbe7kkc&sec_uid=MS4wLjABAAAAuh_9DMc7512Yw3wl9t2Xp1cRJKMZvLbrcwHoBaF802cJGmOFEzhLFUQ_7mQmewak&share_author_id=7529957532175008788&sharer_language=fr&source=h5_m&u_code=eldkedhj656k80&timestamp=1753473428&user_id=7529957532175008788&sec_user_id=MS4wLjABAAAAuh_9DMc7512Yw3wl9t2Xp1cRJKMZvLbrcwHoBaF802cJGmOFEzhLFUQ_7mQmewak&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7529957459056051975&share_link_id=5064a7b7-f4b2-4f83-b473-0b07fd137b99&share_app_id=1233&ugbiz_name=ACCOUNT&social_share_type=5&enable_checksum=1" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center">
                      @sengarmi1
                      <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors">
                    <span className="text-muted-foreground flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp
                    </span>
                    <a href="https://wa.me/221710384040" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center">
                      71 038 40 40
                      <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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
                    <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Délai de réponse ?</p>
                    <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Urgence weekend ?</p>
                    <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Carte Google Maps interactive */}
        <section className="mt-20">
          <Card className="animate-fade-in">
            <CardContent className="p-0">
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  title="Carte Sengarmi"
                  src="https://www.google.com/maps?q=12.56233,-16.28770&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
      
      {/* Popup animé */}
      <AnimatedPopup
        isOpen={popup.isOpen}
        onClose={hidePopup}
        title={popup.title}
        message={popup.message}
        type={popup.type}
        duration={popup.duration}
      />
    </div>
  );
};

export default Contact;