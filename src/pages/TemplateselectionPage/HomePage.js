import "./HomePage.scss";
import taLogo from "../../assets/svg/teachers-assistant-logo.svg";
import heroImg from "../../assets/svg/hero-img.svg";
import step1 from "../../assets/svg/step1.svg";
import step2 from "../../assets/svg/step2.svg";
import step3 from "../../assets/svg/step3.svg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="home">
      <img className="home__logo" src={taLogo} alt="teachers assistant logo" />
      <h1>Teacher's Assistant</h1>
      <Link className="home__cta" to="/templates">Get Started</Link>
      <section className="home__hero">
        <img
          className="home__img"
          src={heroImg}
          alt="teacher using flashcards with students"
        />
        <div className="home__steps">
        <div className="home__step">
          <h2 className="home__step-text">Upload words and pictures</h2>
          <img
            className="home__step-img"
            src={step1}
            alt="teacher working at computer"
          />
        </div>
        <div className="home__step home__step--align-right">
          <img
            className="home__step-img home__step-img--align-right"
            src={step2}
            alt="teacher working at computer"
          />
          <h2 className="home__step-text home__step-text--align-right">Choose your favorite template</h2>
        </div>
        <div className="home__step home__step--last">
          <h2 className="home__step-text home__step-text--last">Dowload your pdf and print it</h2>
          <img
            className="home__step-img home__step-img--last"
            src={step3}
            alt="teacher celebrating"
          />
        </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;