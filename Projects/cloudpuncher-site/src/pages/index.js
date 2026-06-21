// src/pages/index.js
import React from "react";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
    </main>
  );
}