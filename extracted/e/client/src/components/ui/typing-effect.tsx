import { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterPhrase?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  phrases,
  typingSpeed = 120,
  deletingSpeed = 60,
  delayAfterPhrase = 1500
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const typeNextCharacter = () => {
      if (isDeleting) {
        // Deleting mode
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Typing mode
        const nextText = currentPhrase.substring(0, displayText.length + 1);
        setDisplayText(nextText);
        
        if (nextText === currentPhrase) {
          // Finished typing the phrase
          setIsDeleting(true);
          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            setDisplayText(currentPhrase);
          }, delayAfterPhrase);
          return;
        }
      }
    };
    
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timerId = setTimeout(typeNextCharacter, speed);
    
    return () => {
      clearTimeout(timerId);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentPhraseIndex, displayText, isDeleting, phrases, typingSpeed, deletingSpeed, delayAfterPhrase]);

  return (
    <div className="text-xl font-medium text-secondary inline-flex">
      <span>{displayText}</span>
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
};

export default TypingEffect;
