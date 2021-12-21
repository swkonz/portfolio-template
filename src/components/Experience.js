import data from "../data/portfolio_data";

export default function Skills() {
  return (
    <section id="experience">
      <div className="row">
        {data.experience.groups.map((exp) => {
          return (
            <div className="column experience-group">
              <h1 className="experience-title">{exp.title}</h1>
              <ul className="experience-list">
                {exp.items.map((item) => {
                  return (
                    <li className="experience-item">
                      <div className="exp-column">
                        <div className="exp-content">
                          <div className="exp-year">{item.range}</div>
                          <div className="exp-title">{item.header}</div>
                        </div>
                        <div className="exp-bottom">
                          <h1>{item.title}</h1>
                          <ul>
                            <li className="exp-sub-item">{item.description}</li>
                          </ul>
                        </div>
                      </div>
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
