
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-base-200">
      <button className="btn btn-accent">Accent</button>
      </div>
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