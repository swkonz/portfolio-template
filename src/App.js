import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
