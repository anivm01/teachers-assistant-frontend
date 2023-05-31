"use client";
import style from "../styles/TemplatePage.module.scss";
import demoArray from "../data/templateContent.json";
import GameCardsDoc from "../components/GameCardsDoc";
import { useWordList } from "../context/WordListContext";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import LargeFlashcardsDoc from "../components/LargeFlashcardsDoc";
import LargeWritingDoc from "../components/LargeWritingDoc";
import MediumFlashcardsDoc from "../components/MediumFlashcardsDoc";
import SmallFlashcardsDoc from "../components/SmallFlashcardsDoc";
import SmallWritingDoc from "../components/SmallWritingDoc";

export default function ChooseTemplate() {
  let wordList = useWordList();
  if (wordList.length === 0) {
    wordList = demoArray;
  }
  return (
    <main className={style.gallery}>
      <div>
        <PDFDownloadLink
          document={<LargeFlashcardsDoc wordList={wordList} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer height="400">
          <LargeFlashcardsDoc wordList={wordList} />
        </PDFViewer>
      </div>
      <div>
        <PDFDownloadLink
          document={<MediumFlashcardsDoc wordList={wordList} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer height="400">
          <MediumFlashcardsDoc wordList={wordList} />
        </PDFViewer>
      </div>
      <div>
        <PDFDownloadLink
          document={<SmallFlashcardsDoc wordList={wordList} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer height="400">
          <SmallFlashcardsDoc wordList={wordList} />
        </PDFViewer>
      </div>
      <div>
        <PDFDownloadLink
          document={<LargeWritingDoc wordList={wordList} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer height="400">
          <LargeWritingDoc wordList={wordList} />
        </PDFViewer>
      </div>
      <div>
        <PDFDownloadLink
          document={<SmallWritingDoc wordList={wordList} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer height="400">
          <SmallWritingDoc wordList={wordList} />
        </PDFViewer>
      </div>
      <div>
        <PDFDownloadLink
          document={<GameCardsDoc wordList={wordList} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
        <PDFViewer height="400">
          <GameCardsDoc wordList={wordList} />
        </PDFViewer>
      </div>
    </main>
  );
}
