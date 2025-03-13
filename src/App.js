import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
function App() {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx(Home, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
