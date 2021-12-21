import data from "./../data/portfolio_data";

export default function Contact() {
  return (
    <section id="contact">
      <h1>Get in touch!</h1>
      <h3>{data.contact.description}</h3>
      <div className="icon-group">
        {data.contact.linkedinUrl ? (
          <div className="icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.contact.linkedinUrl}
            >
              <img
                src={require("../images/linkedin_icon.png")}
                alt="linkedin icon"
              />
            </a>
          </div>
        ) : null}
        {data.contact.githubUrl ? (
          <div className="icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.contact.githubUrl}
            >
              <img
                src={require("../images/github_icon.png")}
                alt="github icon"
              />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
