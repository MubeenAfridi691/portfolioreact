import React from "react";
import '../index.css'

export default function Navbar() {
  return (
    <>
      <div  className="navbar container"
      data-aos="fade-down"
       data-aos-duration="1000"
      >
      <div className="left nav_items">Portfolio</div>
      <div className="right">
        <a href="#home" className="nav_items">Home</a>
        <a href="#experience" className="nav_items">Experience</a>
        <a href="#skills" className="nav_items">Skills</a>
        <a href="#projects" className="nav_items">Projects</a>
        <a href="#contact" className="nav_items">Conatct</a>
      </div>
      </div>
    </>
  );
}
