import "./HomePage.scss";
import heroImg from "../../assets/svg/hero-img.svg";
import step1 from "../../assets/svg/step1.svg";
import step2 from "../../assets/svg/step2.svg";
import step3 from "../../assets/svg/step3.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function HomePage({ isNavVisible, setIsNavVisible }) {
  useEffect(() => {
    if (isNavVisible) {
      setIsNavVisible(false);
    }
  }, []);

  return (
    <>
      <main className="home">
        <section className="home__hero">
          <div className="home__hook">
            <Link className="home__cta" to="/templates">
              Get Started
            </Link>
            <img
              className="home__img"
              src={heroImg}
              alt="teacher using flashcards with students"
            />
          </div>
          <div className="home__steps">
            <h2 className="home__title">
              What can the Teacher's Assistant do for you?
            </h2>
            <div className="home__step">
              <h3 className="home__step-text">
                You can upload any words and pictures you want to use
              </h3>
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
              <h3 className="home__step-text home__step-text--align-right">
                You can choose from a selection of template for worksheets or
                flashcards
              </h3>
            </div>
            <div className="home__step home__step--last">
              <h3 className="home__step-text home__step-text--last">
                You can dowload your pdf or login to save it to your account
              </h3>
              <img
                className="home__step-img home__step-img--last"
                src={step3}
                alt="teacher celebrating"
              />
            </div>
            {/* <Link className="home__cta" to="/templates">Let's Go!</Link> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
