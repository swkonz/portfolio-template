import data from "../data/portfolio_data";
import resume from "../resume.pdf";

export default function Landing() {
  return (
    <section id="landing" className="container">
      <div className="profile-pic">
        <img src={require("../images/seankonz.jpg")} alt={data.name} />
      </div>
      <div className="profile-body">
        <h3>{data.title}</h3>
        <h1>{data.name}</h1>
        <p className="core-text">{data.shortBio}</p>
        <div className="btn-group">
          <a
            className="btn-alt"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a className="btn" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
