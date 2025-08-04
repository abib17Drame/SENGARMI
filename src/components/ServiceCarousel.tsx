import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getServiceImages } from "@/data/serviceImages";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

interface ServiceCarouselProps {
  serviceType: 'menage' | 'personnel' | 'linge';
  className?: string;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ serviceType, className = "" }) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Défilement automatique du carousel
  useEffect(() => {
    if (!api || !isAutoPlay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Défilement toutes les 3 secondes

    return () => clearInterval(interval);
  }, [api, isAutoPlay]);

  // Récupérer les images depuis la configuration
  const images = getServiceImages(serviceType);

  if (images.length === 0) {
    return (
      <div className={`w-full ${className} flex items-center justify-center h-48 bg-muted rounded-lg`}>
        <div className="text-muted-foreground text-center">
          <div className="text-sm">Aucune image disponible</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        {/* Bouton de contrôle pause/play */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 z-10">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="bg-background/80 backdrop-blur-sm border-2 shadow-lg hover:bg-accent transition-all duration-200"
            >
              {isAutoPlay ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1">
              <div className="p-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    console.warn(`Erreur de chargement: ${image.src}`);
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {images.length > 1 && (
          <>
            <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 bg-background/80 border-2 shadow-lg hover:bg-accent transition-all duration-200 hover:scale-110" />
            <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 bg-background/80 border-2 shadow-lg hover:bg-accent transition-all duration-200 hover:scale-110" />
          </>
        )}
        
        {/* Indicateurs de position (points) */}
        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors cursor-pointer"
                onClick={() => {
                  if (api) {
                    api.scrollTo(index);
                  }
                }}
              />
            ))}
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default ServiceCarousel; 