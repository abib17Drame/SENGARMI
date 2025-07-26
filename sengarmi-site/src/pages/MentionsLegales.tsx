const MentionsLegales = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Mentions légales
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Informations légales</h2>
              <p className="text-muted-foreground mb-4">
                Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 
                pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance 
                des utilisateurs et visiteurs du site les présentes mentions légales.
              </p>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Éditeur du site :</h3>
                <p className="text-muted-foreground">
                  <strong>Sengarmi SAS</strong><br />
                  Capital social : 50 000 €<br />
                  RCS Paris : 123 456 789<br />
                  SIRET : 123 456 789 00012<br />
                  TVA intracommunautaire : FR12345678901<br />
                  Adresse : 123 Avenue des Champs-Élysées, 75008 Paris<br />
                  Téléphone : +33 1 23 45 67 89<br />
                  Email : contact@sengarmi.fr
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Politique de confidentialité</h2>
              <p className="text-muted-foreground mb-4">
                Sengarmi s'engage à protéger la vie privée de ses utilisateurs. Cette politique explique 
                comment nous collectons, utilisons et protégeons vos informations personnelles.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Données collectées</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Informations d'identification (nom, email, téléphone)</li>
                <li>Adresses de service</li>
                <li>Informations de paiement (via prestataires sécurisés)</li>
                <li>Données de géolocalisation (avec votre accord)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Utilisation des données</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Fourniture et amélioration de nos services</li>
                <li>Communication relative à vos réservations</li>
                <li>Support client et assistance</li>
                <li>Respect de nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Vos droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Pour exercer ces droits, contactez-nous à : contact@sengarmi.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Hébergement</h2>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Dernière mise à jour : Décembre 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;