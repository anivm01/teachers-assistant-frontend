import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.home__hero}>
        <div className={styles.home__hook}>
          <Link className={styles.home__cta} href="/templates">
            Get Started
          </Link>
          <Image
            className={styles.home__img}
            src="/assets/svg/hero-img.svg"
            alt="teacher using flashcards with students"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.home__steps}>
          <h2 className={styles.home__title}>
            What can the Teacher's Assistant do for you?
          </h2>
          <div className={styles.home__step}>
            <h3 className={styles.home__steptext}>
              You can upload any words and pictures you want to use
            </h3>
            <Image
              className={styles.home__stepimg}
              src="/assets/svg/step1.svg"
              alt="teacher working at computer"
              height={500}
              width={500}
            />
          </div>
          <div className={styles.home__stepimg}>
            <Image
              className="home__step-img home__step-img--align-right"
              src="/assets/svg/step2.svg"
              alt="teacher working at computer"
              height={500}
              width={500}
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
            <Image
              className="home__step-img home__step-img--last"
              src="/assets/svg/step3.svg"
              alt="teacher celebrating"
              height={500}
              width={500}
            />
          </div>
          {/* <Link className="home__cta" to="/templates">Let's Go!</Link> */}
        </div>
      </section>
    </main>
  );
}
