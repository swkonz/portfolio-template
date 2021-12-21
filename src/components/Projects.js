import ProjectPopup from "./ProjectPopup";
import projectImages from "../data/projectImages";
import { useState } from "react";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const toggleVisible = (index) => {
    setProjectIndex(index || 0);
    setVisible(!visible);
  };

  return (
    <section id="projects">
      <div className="row group">
        <div className="column">
          <div
            className="project"
            onClick={() => {
              toggleVisible(0);
            }}
          >
            <img src={projectImages[0]} alt="Project 0"></img>
          </div>
        </div>
        <div className="column">
          <div
            className="project"
            onClick={() => {
              toggleVisible(1);
            }}
          >
            <img src={projectImages[1]} alt="Project 1"></img>
          </div>
        </div>
        <div className="column">
          <div
            className="project"
            onClick={() => {
              toggleVisible(2);
            }}
          >
            <img src={projectImages[2]} alt="Project 2"></img>
          </div>
        </div>
        <div className="column">
          <div
            className="project"
            onClick={() => {
              toggleVisible(3);
            }}
          >
            <img src={projectImages[3]} alt="Project 3"></img>
          </div>
        </div>
      </div>
      {visible ? (
        <ProjectPopup toggle={toggleVisible} projectIndex={projectIndex} />
      ) : null}
    </section>
  );
}
