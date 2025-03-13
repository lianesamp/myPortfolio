import React, { useState, useEffect } from "react";

// Componente de botão de subir
const ScrollToTopButton: React.FC = () => {
  // Estado para controlar a visibilidade do botão
  const [isVisible, setIsVisible] = useState(false);

  // Função para mostrar ou esconder o botão com base no scroll da página
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Mostrar o botão se o scroll for maior que 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Suaviza o movimento de rolagem
    });
  };

  // Usando useEffect para adicionar o evento de scroll na página
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility); // Adiciona o ouvinte de evento de scroll
    return () => {
      window.removeEventListener("scroll", toggleVisibility); // Remove o ouvinte de evento de scroll quando o componente for desmontado
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top-button"
        title="Scroll to Top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
