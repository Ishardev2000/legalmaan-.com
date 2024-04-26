import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TMform from "./Pages/TMform";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import Layout from "./layout.jsx";
import Designform from "./Pages/Designform.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="design" element={<Designform />} />
        <Route path="form" element={<TMform />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
