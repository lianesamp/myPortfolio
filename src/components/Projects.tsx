import React from "react";

// Definição da estrutura dos projetos
interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
}

// Lista de projetos
const projects: Project[] = [
  {
    title: "Ar Shelving",
    image: "./assets/ar-shelving.png",
    link: "https://www.ar-shelving.com/",
    description:
      "I developed this project in WordPress, based on the design that the client made available in Adobe XD...",
  },
  {
    title: "Rotuling",
    image: "./assets/rotuling.euss.png",
    link: "https://www.rotuling.eus/",
    description:
      "I developed the design of this project in Adobe XD, following the client's inspirations...",
  },
  {
    title: "La Sinsorga",
    image: "./assets/lasinsorga.png",
    link: "https://lasinsorga.com/",
    description:
      "In this project, I assisted with specific administrative tasks, such as integrating the newsletter form...",
  },
  {
    title: "SESI",
    image: "./assets/sesi.png",
    link: "https://www.sesi-ce.org.br/para-empresa/sesi-clinica",
    description:
      "I was part of the team that created this project, where we developed the pages using Vue.js...",
  },
];

// Componente Projects
const Projects: React.FC = () => {
  return (
    <section id="projects">
      <p className="section__text__p1__center">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <div className="details-container" key={index}>
              <div className="artile-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-color-2 project-btn">See Project</button>
                </a>
              </div>
              <div className="description-project">
                <p className="section__text__p1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => (window.location.href = './#contact')} />
    </section>
  );
};

export default Projects;
