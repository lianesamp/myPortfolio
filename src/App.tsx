
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton.tsx";

function App() {
  return (
    <div>
      
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;