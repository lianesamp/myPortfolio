import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Elemento #root não encontrado no DOM.");
}
const root = ReactDOM.createRoot(rootElement);
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
