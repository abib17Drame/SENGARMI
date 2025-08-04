// Configuration des images pour chaque service
export const serviceImages = {
  menage: [
    { src: `${import.meta.env.BASE_URL}m1.jpg`, alt: 'Service de ménage 1' },
    { src: `${import.meta.env.BASE_URL}m2.jpg`, alt: 'Service de ménage 2' },
  ],
  personnel: [
    { src: `${import.meta.env.BASE_URL}p1.jpg`, alt: 'Personnel spécialisé 1' },
    { src: `${import.meta.env.BASE_URL}p2.jpg`, alt: 'Personnel spécialisé 2' },
    { src: `${import.meta.env.BASE_URL}p3.jpg`, alt: 'Personnel spécialisé 3' },
    { src: `${import.meta.env.BASE_URL}p4.jpg`, alt: 'Personnel spécialisé 4' },
    { src: `${import.meta.env.BASE_URL}p5.jpg`, alt: 'Personnel spécialisé 5' },
  ],
  linge: [
    { src: `${import.meta.env.BASE_URL}bl1.jpg`, alt: 'Bon linge 1' },
    { src: `${import.meta.env.BASE_URL}bl2.jpg`, alt: 'Bon linge 2' },
  ],
};

// Fonction pour ajouter facilement une nouvelle image
export const addServiceImage = (serviceType: 'menage' | 'personnel' | 'linge', imageName: string, altText?: string) => {
  const imagePath = `${import.meta.env.BASE_URL}${imageName}`;
  const defaultAlt = altText || `${serviceType} ${serviceImages[serviceType].length + 1}`;
  
  serviceImages[serviceType].push({
    src: imagePath,
    alt: defaultAlt
  });
};

// Fonction pour obtenir les images d'un service
export const getServiceImages = (serviceType: 'menage' | 'personnel' | 'linge') => {
  return serviceImages[serviceType] || [];
}; 