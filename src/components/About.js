import data from "./../data/portfolio_data";

export default function About() {
  return (
    <section id="about" className="row">
      <div className="column">
        <h1>About me</h1>
      </div>
      <div className="column center-description">
        <div className="paragraph-dark">
          <p>{data.aboutDescription}</p>
        </div>
      </div>
    </section>
  );
}
