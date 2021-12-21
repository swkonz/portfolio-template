import ProgressBar from "./ProgressBar";
import data from "./../data/portfolio_data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="row">
        {data.skills.groups.map((skillGroup, i) => {
          return (
            <div className="column" key={i}>
              <h1 className="skills-group">{skillGroup.title}</h1>
              <ul>
                {skillGroup.items.map((skill, j) => {
                  return (
                    <li className="skills-item" key={j}>
                      <span className="skills-title">{skill.name}</span>
                      <ProgressBar
                        bgcolor={"#6387c9"}
                        completed={skill.proficiency}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
