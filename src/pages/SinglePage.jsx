import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Gallery from './Gallery';
import Certificates from './Certificates';
import Blog from './Blog';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';
import SkillNetwork from './Skills';

// simple wrapper that renders every "page" sequentially
export default function SinglePage() {
  return (
    <div className="single-page">
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="skills">
        <SkillNetwork />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
