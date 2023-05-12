import Image from "next/image";
import hero from "../../public/svg/hero.svg";
import style from "../styles/Hero.module.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={style.container}>
      <div className={style.image_box}>
        <Image
          src={hero}
          alt="teacher showing pineapple flashcard to students illustration"
          className={style.image}
        />
      </div>
      <div className={style.text}>
        <div>
          <h2 className={style.greeting}>Welcome to Teacher's Assistant</h2>
          <p className={style.greeting_description}>
            A digital tool for easy and versatile teaching material creation.
          </p>
        </div>
        <div className={style.buttons}>
          <Link href="/" className={`${style.cta} ${style.cta_main}`}>
            Quick Start
          </Link>
          <Link href="/" className={style.cta}>
            Login/Singup
          </Link>
        </div>
      </div>
    </section>
  );
}
