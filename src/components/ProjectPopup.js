import React from "react";
import data from "./../data/portfolio_data";
import projectImages from "../data/projectImages";

const ProjectPopup = (props) => {
  const { toggle, projectIndex } = props;

  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close-icon" onClick={toggle}>
          x
        </span>

        <div className="project-header">
          {data.projects[projectIndex].includeImage ? (
            <img src={projectImages[projectIndex]} alt="Project image" />
          ) : null}
          <h1>{data.projects[projectIndex].title}</h1>
        </div>
        <div className="project-body">
          <p>{data.projects[projectIndex].description}</p>
          <div>
            {data.projects[projectIndex].tags.map((tag) => {
              return <span className="project-tag">{tag}</span>;
            })}
          </div>
          <a
            className="project-link btn-alt"
            href={data.projects[projectIndex].link}
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
