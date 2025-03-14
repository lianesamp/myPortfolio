import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Definindo os caminhos para as imagens
import arShelvingImg from '/src/assets/ar-shelving.png';
import rotulingImg from '/src/assets/rotuling.euss.png';
import laSinsorgaImg from '/src/assets/lasinsorga.png';
import sesiImg from '/src/assets/sesi.png';
import arrowImg from '/src/assets/arrow.png';
// Lista de projetos
const projects = [
    {
        title: "Ar Shelving",
        image: arShelvingImg, // Usando a importação direta
        link: "https://www.ar-shelving.com/",
        description: "I developed this project in WordPress, based on the design that the client made available in Adobe XD...",
    },
    {
        title: "Rotuling",
        image: rotulingImg, // Usando a importação direta
        link: "https://www.rotuling.eus/",
        description: "I developed the design of this project in Adobe XD, following the client's inspirations...",
    },
    {
        title: "La Sinsorga",
        image: laSinsorgaImg, // Usando a importação direta
        link: "https://lasinsorga.com/",
        description: "In this project, I assisted with specific administrative tasks, such as integrating the newsletter form...",
    },
    {
        title: "SESI",
        image: sesiImg, // Usando a importação direta
        link: "https://www.sesi-ce.org.br/para-empresa/sesi-clinica",
        description: "I was part of the team that created this project, where we developed the pages using Vue.js...",
    },
];
// Componente Projects
const Projects = () => {
    return (_jsxs("section", { id: "projects", children: [_jsx("p", { className: "section__text__p1__center", children: "Browse My Recent" }), _jsx("h1", { className: "title", children: "Projects" }), _jsx("div", { className: "experience-details-container", children: _jsx("div", { className: "about-containers", children: projects.map((project, index) => (_jsxs("div", { className: "details-container", children: [_jsx("div", { className: "artile-container", children: _jsx("img", { src: project.image, alt: project.title, className: "project-img" }) }), _jsx("h2", { className: "experience-sub-title project-title", children: project.title }), _jsx("div", { className: "btn-container", children: _jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { className: "btn btn-color-2 project-btn", children: "See Project" }) }) }), _jsx("div", { className: "description-project", children: _jsx("p", { className: "section__text__p1", children: project.description }) })] }, index))) }) }), _jsx("img", { src: arrowImg, alt: "Arrow icon", className: "icon arrow", onClick: () => (window.location.href = './#contact') })] }));
};
export default Projects;
