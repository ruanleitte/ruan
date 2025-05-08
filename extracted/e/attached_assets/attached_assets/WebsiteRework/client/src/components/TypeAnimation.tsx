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
  typingSpeed = 80,  // Faster typing speed
  deletingSpeed = 50,  // Faster deleting speed
  delayBetweenWords = 2000  // Less delay between words
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up any timeouts when component unmounts
  useEffect(() => {
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
          // Finished deleting, move to next word with complete visibility transition
          setIsDeleting(false);
          setIsVisible(false);
          
          // Delay before showing next word
          timeoutRef.current = setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            setIsVisible(true);
          }, 300);
        }
      }
    };

    // Start or continue the typing animation
    if (timeoutRef.current === null) {
      timeoutRef.current = setTimeout(handleTyping, 500);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-primary"
        >
          {currentText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block ml-0.5 w-0.5 h-8 bg-primary"
          />
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default TypeAnimation;