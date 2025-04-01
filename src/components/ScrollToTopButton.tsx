import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // Ícone de seta para cima

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300); // Se passou 300px, mostra o botão
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top-button btn-primary fixed bottom-5 right-5 rounded-full p-3 shadow-lg"
        title="Voltar ao topo"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
