import React, { useEffect, useState } from "react";

const letters = ["S", "K"];

export default function Navbar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((index) => 1 - index);
    }, 1000);
  }, []);

  return (
    <section className="container primary-nav">
      <h1 className="nav-icon">{letters[index]}</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="#landing">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
