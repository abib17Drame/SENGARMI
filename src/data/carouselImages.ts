export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  priority: number;
}

export const carouselImages: CarouselImage[] = [
  {
    id: 'logo-sengarmi',
    src: '/logo.png',
    alt: 'Logo SENGARMI - Votre partenaire de confiance pour tous vos besoins de services',
    title: 'SENGARMI',
    description: 'Logo SENGARMI - Vos Désirs sont des Ordres',
    priority: 1
  },
  {
    id: 'services-overview',
    src: '/img.png',
    alt: 'Aperçu des services SENGARMI - Ménage, personnel spécialisé, bon linge',
    title: 'Nos Services Diversifiés',
    description: 'Ménage à domicile, personnel spécialisé, bon linge et bien plus encore',
    priority: 2
  }
];

// Fonction pour obtenir les images triées par priorité
export const getCarouselImages = (): CarouselImage[] => {
  return carouselImages.sort((a, b) => a.priority - b.priority);
};

// Fonction pour obtenir une image spécifique par ID
export const getCarouselImageById = (id: string): CarouselImage | undefined => {
  return carouselImages.find(image => image.id === id);
}; 