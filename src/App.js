import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
function App() {
    return (_jsxs("div", { children: [_jsx("div", { className: "flex items-center justify-center bg-base-200", children: _jsx("button", { className: "btn btn-accent", children: "Accent" }) }), _jsx(Navbar, {}), _jsx(Home, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {}), _jsx(ScrollToTopButton, {})] }));
}
export default App;
