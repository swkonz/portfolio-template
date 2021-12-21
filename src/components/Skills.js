import ProgressBar from "./ProgressBar";
import data from "./../data/portfolio_data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="row">
        {data.skills.groups.map((skillGroup) => {
          return (
            <div className="column">
              <h1 className="skills-group">{skillGroup.title}</h1>
              <ul>
                {skillGroup.items.map((skill) => {
                  return (
                    <li className="skills-item">
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
