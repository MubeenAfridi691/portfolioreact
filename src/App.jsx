import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experiences from './components/Experiences';
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Home/>
        <Experiences/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}
