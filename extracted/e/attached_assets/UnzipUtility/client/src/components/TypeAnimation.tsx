import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypeAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const TypeAnimation: React.FC<TypeAnimationProps> = ({
  words,
  typingSpeed = 40,  // Typing speed - faster
  deletingSpeed = 20,  // Deleting speed - faster 
  delayBetweenWords = 1500  // Delay between words - longer to read
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cycleCompleted = useRef(false);

  // Clean up any timeouts when component unmounts
  useEffect(() => {
    // Iniciar com o estado limpo
    setCurrentText('');
    setIsDeleting(false);
    cycleCompleted.current = false;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Main typing/deleting effect
  useEffect(() => {
    if (!words || words.length === 0) return;
    
    const currentWord = words[currentWordIndex];
    
    // Function to handle typing and deleting
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing, wait before deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          const nextIndex = (currentWordIndex + 1) % words.length;
          setCurrentWordIndex(nextIndex);
          
          // Se completou um ciclo, reiniciar
          if (nextIndex === 0) {
            cycleCompleted.current = true;
          }
          
          // Delay before showing next word - shorter to feel more responsive
          timeoutRef.current = setTimeout(handleTyping, 200);
        }
      }
    };

    // Start or continue the typing animation
    if (timeoutRef.current === null) {
      timeoutRef.current = setTimeout(handleTyping, 300);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="text-primary font-medium">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="inline-block ml-0.5 w-0.5 h-6 bg-primary"
      />
    </span>
  );
};

export default TypeAnimation;