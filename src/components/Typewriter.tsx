import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  repeat?: boolean;
  repeatDelay?: number;
  letterSpacing?: string;
}

const Typewriter = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "",
  showCursor = true,
  repeat = false,
  repeatDelay = 2000,
  letterSpacing = "0.1em"
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText("");
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Effet de répétition
  useEffect(() => {
    if (repeat && currentIndex === text.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText("");
      }, repeatDelay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text.length, repeat, repeatDelay]);

  return (
    <motion.div
      className={`${className} overflow-hidden`}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      style={{ 
        letterSpacing: typeof letterSpacing === 'string' && letterSpacing.includes(' ') 
          ? undefined 
          : letterSpacing 
      }}
    >
      <motion.span
        className="inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.03,
              ease: "easeOut",
              type: "spring",
              stiffness: 200
            }}
            className="inline-block"
            style={{
              color: char === ' ' ? 'transparent' : 'inherit',
              textShadow: char === ' ' ? 'none' : '0 0 12px currentColor, 0 0 20px currentColor',
              marginRight: char === ' ' ? '0.3em' : '0.05em',
              transformStyle: 'preserve-3d'
            }}
            whileHover={{ 
              scale: 1.2, 
              y: -5,
              textShadow: char === ' ' ? 'none' : '0 0 20px currentColor, 0 0 30px currentColor'
            }}
          >
            {char}
          </motion.span>
        ))}
        
        {showCursor && (
          <motion.span
            animate={{ 
              opacity: [1, 0.3, 1],
              scale: [1, 1.3, 1],
              y: [0, -2, 0]
            }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block w-0.5 h-6 bg-gradient-to-b from-current to-transparent ml-1 rounded-full"
            style={{
              boxShadow: '0 0 12px currentColor, 0 0 20px currentColor'
            }}
          />
        )}
      </motion.span>
      
      {/* Effet de particules lors de la frappe */}
      {isTyping && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0.8,
                scale: 0
              }}
              animate={{ 
                x: Math.random() * 20 - 10,
                y: Math.random() * -20 - 10,
                opacity: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Typewriter; 