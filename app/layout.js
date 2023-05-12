import Header from "./components/Header";
import "./styles/globals.scss";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Teachers's Assistant",
  description:
    "A tool for teachers and parents to create printable worksheets and flashcards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lilita.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
