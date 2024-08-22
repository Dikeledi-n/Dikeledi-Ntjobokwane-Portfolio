export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dikeledi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend Developer</span>
          </h1>
          <p className="hero--section-description">
          As a passionate frontend developer, I bring together code and creativity to craft engaging web experiences that captivate and inspire. 
          With a strong foundation in HTML, CSS, and JavaScript, I expertly balance functionality and aesthetics to create seamless interactions and stunning visuals.
          </p>
        </div>
      <div className="hero--section--img">
        <img src="./img/IMG_5870.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
