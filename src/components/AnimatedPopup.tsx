import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimatedPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
}

const AnimatedPopup = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = "success",
  duration = 5000 
}: AnimatedPopupProps) => {
  
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case "error":
        return <XCircle className="h-8 w-8 text-red-500" />;
      case "warning":
        return <AlertCircle className="h-8 w-8 text-yellow-500" />;
      case "info":
        return <Info className="h-8 w-8 text-blue-500" />;
      default:
        return <CheckCircle className="h-8 w-8 text-green-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "info":
        return "bg-blue-50 border-blue-200";
      default:
        return "bg-green-50 border-green-200";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "success":
        return "text-green-800";
      case "error":
        return "text-red-800";
      case "warning":
        return "text-yellow-800";
      case "info":
        return "text-blue-800";
      default:
        return "text-green-800";
    }
  };

  // Auto-close après la durée spécifiée
  React.useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay avec effet de flou */}
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Popup principal */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            initial={{ 
              opacity: 0, 
              scale: 0.5, 
              y: -50,
              rotateX: -90
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.5, 
              y: 50,
              rotateX: 90
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <div className={`relative max-w-md w-full mx-4 p-6 rounded-2xl shadow-2xl border-2 ${getBgColor()} ${getTextColor()}`}>
              
              {/* Particules de confetti pour le succès */}
              {type === "success" && (
                <motion.div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'][i % 5],
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      initial={{ 
                        scale: 0, 
                        opacity: 0,
                        y: 0
                      }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [-20, -100, -150]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: i * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </motion.div>
              )}

              {/* Contenu du popup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10"
              >
                {/* Icône animée */}
                <motion.div
                  className="flex justify-center mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {getIcon()}
                </motion.div>

                {/* Titre avec animation de typewriter */}
                <motion.h3
                  className="text-xl font-bold text-center mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {title}
                </motion.h3>

                {/* Message */}
                <motion.p
                  className="text-center mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {message}
                </motion.p>

                {/* Bouton de fermeture */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Button
                    onClick={onClose}
                    className="relative overflow-hidden group"
                    variant="default"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">Fermer</span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Effet de bordure animée */}
              <motion.div
                className="absolute inset-0 border-2 border-current rounded-2xl"
                animate={{ 
                  borderColor: ["transparent", "currentColor", "transparent"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AnimatedPopup; 