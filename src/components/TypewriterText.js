import React, { useState, useEffect } from "react";

const TypewriterText = ({ words, elementType: Element = "span", className = "", loop = true }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting && displayedText.length < currentWord.length) {
        // Typing forward
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        // Deleting
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      } else if (displayedText.length === currentWord.length) {
        // Word fully typed, initiate delete after pause
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedText.length === 0) {
        // Word fully deleted, move to next word or stop if loop is false
        setIsDeleting(false);
        if (currentWordIndex + 1 < words.length) {
          setCurrentWordIndex(currentWordIndex + 1);
        } else if (loop) {
          setCurrentWordIndex(0);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, currentWordIndex, words, loop]);

  return (
    <Element className={className}>
      {displayedText}
    </Element>
  );
};

export default TypewriterText;
