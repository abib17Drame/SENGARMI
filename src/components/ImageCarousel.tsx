import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselImage } from "@/data/carouselImages";

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNavigation?: boolean;
  className?: string;
}

export const ImageCarousel = ({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showNavigation = true,
  className = "w-full"
}: ImageCarouselProps) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || !autoPlay) return;

    const interval = setInterval(() => {
      const currentIndex = api.selectedScrollSnap();
      const totalSlides = api.slideNodes().length;
      const nextIndex = (currentIndex + 1) % totalSlides;
      api.scrollTo(nextIndex);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlayInterval]);

  if (!images || images.length === 0) {
    return (
      <div className={`flex justify-center items-center h-96 bg-muted rounded-lg ${className}`}>
        <p className="text-muted-foreground">Aucune image disponible</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          duration: 20,
        }}
        className={className}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
              <CarouselItem key={image.id}>
               <div className="flex flex-col">
                 <div className="text-center px-6 py-4 bg-gradient-to-b from-background/95 to-transparent">
                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-foreground">
                     {image.title}
                   </h2>
                   <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                     {image.description}
                   </p>
                 </div> 
                 <div className="flex justify-center items-center h-80">
                   <img 
                     src={image.src} 
                     alt={image.alt}
                     className="max-w-full max-h-full object-contain"
                   />
                 </div>
               </div>
              </CarouselItem>
          ))}
        </CarouselContent>
        
        {showNavigation && (
          <>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background border-2 shadow-lg hover:bg-accent z-20" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background border-2 shadow-lg hover:bg-accent z-20" />
          </>
        )}
      </Carousel>

      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current 
                  ? "bg-primary" 
                  : "bg-muted hover:bg-primary/50"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}; 