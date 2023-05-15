import Image from "next/image";
import style from "./styles/page.module.scss";
import Hero from "./components/Hero";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <main className={style.main}>
      <Hero />
      <Steps />
    </main>
  );
}
