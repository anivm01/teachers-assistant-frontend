import Image from "next/image";
import step1 from "../../public/svg/step1.svg";
import step2 from "../../public/svg/step2.svg";
import step3 from "../../public/svg/step3.svg";
import style from "../styles/Steps.module.scss";
import arrow from "../../public/svg/arrow.svg";
import Link from "next/link";

export default function Steps() {
  return (
    <section className={style.section}>
      <h2 className={style.heading}>How it works!</h2>
      <div className={style.container}>
        <div>
          <Image
            className={style.image}
            src={step1}
            alt="teacher creates word list"
          />
          <h3 className={style.title}>Create a word list</h3>
        </div>
        <Image src={arrow} alt="arrow" className={style.arrow} />
        <div>
          <Image
            className={style.image}
            src={step2}
            alt="teacher chooses a template"
          />
          <h3 className={style.title}>Choose a template</h3>
        </div>
        <Image src={arrow} alt="arrow" className={style.arrow} />
        <div>
          <Image className={style.image} src={step3} alt="teacher celebrates" />
          <h3 className={style.title}>Get your PDF</h3>
        </div>
        <Image src={arrow} alt="arrow" className={style.arrow} />
        <Link href="/" className={`${style.cta}`}>
          Try Now
        </Link>
      </div>
    </section>
  );
}
