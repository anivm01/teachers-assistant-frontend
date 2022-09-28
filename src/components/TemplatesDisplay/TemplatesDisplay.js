import "./TemplatesDisplay.scss";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import { useRef, useState } from "react";
import closeIcon from "../../assets/svg/close-icon.svg";
import Template1 from "../../components/Template1/Template1";
import Template2 from "../../components/Template2/Template2";
import Template3 from "../../components/Template3/Template3";
import Template4 from "../../components/Template4/Template4";
import Template5 from "../../components/Template5/Template5";
import Template6 from "../../components/Template6/Template6";
import printIcon from "../../assets/svg/printer-icon.svg";
import downloadIcon from "../../assets/svg/download.svg";
import uploadIcon from "../../assets/svg/upload.svg";
import axios from "axios";
import PdfControls from "../PdfControls/PdfControls";

function TemplatesDisplay({ templateContents, isLoggedIn }) {
  const docToPrint = useRef(null);
  const worker = html2pdf();

  const [displayTemplate1, setDisplayTemplate1] = useState(false);
  const [displayTemplate2, setDisplayTemplate2] = useState(false);
  const [displayTemplate3, setDisplayTemplate3] = useState(false);
  const [displayTemplate4, setDisplayTemplate4] = useState(false);
  const [displayTemplate5, setDisplayTemplate5] = useState(false);
  const [displayTemplate6, setDisplayTemplate6] = useState(false);
  const [smallSizePreview, setSmallSizePreview] = useState(true);
  const [pdfName, setPdfName] = useState("yourPDF");
  const [pdfNameError, setPdfNameError] = useState(false)
  const [pdfFile, setPdfFile] = useState(null)
  const [twoLines, setTwoLines] = useState(false);

  const closePrintPreview = () => {
    setSmallSizePreview(true);
    setDisplayTemplate1(false);
    setDisplayTemplate2(false);
    setDisplayTemplate3(false);
    setDisplayTemplate4(false);
    setDisplayTemplate5(false);
    setDisplayTemplate6(false);
    setPdfName("");
  };

  const changeNumberOfLines = () => {
    setTwoLines((current) => !current);
  };

  const previewFullSizeOption1 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate1(true);
    let pdf = docToPrint.current
    worker.from(pdf).outputPdf("blob").then(result =>{
      setPdfFile(result)
    })
  };

  const previewFullSizeOption2 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate2(true);
    let pdf = docToPrint.current
    worker.from(pdf).outputPdf("blob").then(result =>{
      setPdfFile(result)
    })
  };

  const previewFullSizeOption3 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate3(true);
    let pdf = docToPrint.current
    worker.from(pdf).outputPdf("blob").then(result =>{
      setPdfFile(result)
    })
  };

  const previewFullSizeOption4 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate4(true);
    let pdf = docToPrint.current
    worker.from(pdf).outputPdf("blob").then(result =>{
      setPdfFile(result)
    })
  };

  const previewFullSizeOption5 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate5(true);
    let pdf = docToPrint.current
    worker.from(pdf).outputPdf("blob").then(result =>{
      setPdfFile(result)
    })
  };

  const previewFullSizeOption6 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate6(true);
    let pdf = docToPrint.current
    worker.from(pdf).outputPdf("blob").then(result =>{
      setPdfFile(result)
    })
  };


  

  function handleGetPDF() {
    let pdf = docToPrint.current;
    const opt = {
      margin: 0,
      filename: pdfName,
      html2canvas: { scale: 3 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    worker.from(pdf).set(opt).save();
    setPdfName("");
  }

  function handleUploadPDF({isLoggedIn}){
    if (!pdfName){
      setPdfNameError(true)
      return
    }
    const file = new File([pdfFile], pdfName)
    console.log(file)
      const formData = new FormData();      
      formData.append("file", file)
      axios.post("http://localhost:5000/pdf", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjQzMjg4ODd9.uniE3DpM8Jb_pbIXHwPBiCJKdrMcj_SF6nQjynRGePk`
      }
    }).then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })
       
  }

  return (
    <>
      {smallSizePreview && (
        <div className="select__display">
          <div className="select__wrapper">
          <h3 className="select__description">Large Flashcards</h3>
            <div className="select__blur select__blur--top"></div>
            <div className="select__option">
              <div className="select__container1">
                {templateContents.map((single, index) => {
                  return (
                    <Template1
                      image={single.image}
                      key={index}
                      word={single.word}
                      templateClass={"template1-preview"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="select__blur select__blur--bottom"></div>
            <button className="select__button" onClick={previewFullSizeOption1}>
              Preview Template
            </button>
          </div>
          <div className="select__wrapper">
          <h3 className="select__description">Medium Flashcards</h3>
            <div className="select__blur select__blur--top"></div>
            <div className="select__option">
              <div className="select__container2">
                {templateContents.map((single, index) => {
                  return (
                    <Template2
                      image={single.image}
                      key={index}
                      word={single.word}
                      templateClass={"template2-preview"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="select__blur select__blur--bottom"></div>
            <button className="select__button" onClick={previewFullSizeOption2}>
              Preview Template
            </button>          
            </div>
          <div className="select__wrapper">
          <h3 className="select__description">Small Flashcards</h3>
            <div className="select__blur select__blur--top"></div>
            <div className="select__option">
              <div className="select__container3">
                {templateContents.map((single, index) => {
                  return (
                    <Template3
                      image={single.image}
                      key={index}
                      word={single.word}
                      templateClass={"template3-preview"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="select__blur select__blur--bottom"></div>
            <button className="select__button" onClick={previewFullSizeOption3}>
              Preview Template
            </button>          </div>
          <div className="select__wrapper">
          <h3 className="select__description">Writing Large</h3>
            <div className="select__blur select__blur--top"></div>
            <div className="select__option">
              <div className="select__container4">
                {templateContents.map((single, index) => {
                  return (
                    <Template4
                      image={single.image}
                      key={index}
                      word={single.word}
                      templateClass={"template4-preview"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="select__blur select__blur--bottom"></div>
            <button className="select__button" onClick={previewFullSizeOption4}>
              Preview Template
            </button>
          </div>
          <div className="select__wrapper">
          <h3 className="select__description">Writing Small</h3>
            <div className="select__blur select__blur--top"></div>
            <div className="select__option">
              <div className="select__container5">
                {templateContents.map((single, index) => {
                  return (
                    <Template5
                      image={single.image}
                      key={index}
                      word={single.word}
                      templateClass={"template5-preview"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="select__blur select__blur--bottom"></div>
            <button className="select__button" onClick={previewFullSizeOption5}>
              Preview Template
            </button>
          </div>
          <div className="select__wrapper">
          <h3 className="select__description">Game Cards</h3>
            <div className="select__blur select__blur--top"></div>
            <div className="select__option">
              <div className="select__container6">
                {templateContents.map((single, index) => {
                  return (
                    <Template6
                      image={single.image}
                      key={index}
                      word={single.word}
                      templateClass={"template6-preview"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="select__blur select__blur--bottom"></div>
            <button className="select__button" onClick={previewFullSizeOption6}>
              Preview Template
            </button>
          </div>
        </div>
      )}
      {displayTemplate1 && (
        <>
        <PdfControls 
        handleGetPDF={handleGetPDF}
        handleUploadPDF={handleUploadPDF}
        pdfName={pdfName}
        setPdfName={setPdfName}
        setPdfNameError={setPdfNameError}
        pdfNameError={pdfNameError}
        closePrintPreview={closePrintPreview}
        isLoggedIn={isLoggedIn}
        />
          <div className="select__preview">
            <div ref={docToPrint} className="select__full-view">
              {templateContents.map((single, index) => {
                return (
                  <Template1
                    image={single.image}
                    key={index}
                    word={single.word}
                    templateClass={"template1"}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
      {displayTemplate2 && (
        <>
        <PdfControls 
        handleGetPDF={handleGetPDF}
        handleUploadPDF={handleUploadPDF}
        pdfName={pdfName}
        setPdfName={setPdfName}
        setPdfNameError={setPdfNameError}
        pdfNameError={pdfNameError}
        closePrintPreview={closePrintPreview}
        />
          <div className="select__preview">
            <div ref={docToPrint} className="select__full-view">
              {templateContents.map((single, index) => {
                return (
                  <Template2
                    image={single.image}
                    key={index}
                    word={single.word}
                    templateClass={"template2"}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
      {displayTemplate3 && (
        <>
        <PdfControls 
        handleGetPDF={handleGetPDF}
        handleUploadPDF={handleUploadPDF}
        pdfName={pdfName}
        setPdfName={setPdfName}
        setPdfNameError={setPdfNameError}
        pdfNameError={pdfNameError}
        closePrintPreview={closePrintPreview}
        />
          <div className="select__preview">
            <div
              ref={docToPrint}
              className="select__full-view select__full-view--3"
            >
              {templateContents.map((single, index) => {
                return (
                  <Template3
                    image={single.image}
                    key={index}
                    word={single.word}
                    templateClass={"template3"}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
      {displayTemplate4 && (
        <>
        <PdfControls 
        handleGetPDF={handleGetPDF}
        handleUploadPDF={handleUploadPDF}
        pdfName={pdfName}
        setPdfName={setPdfName}
        setPdfNameError={setPdfNameError}
        pdfNameError={pdfNameError}
        closePrintPreview={closePrintPreview}
        />
          <div className="select__preview">
            <div ref={docToPrint} className="select__full-view">
              {templateContents.map((single, index) => {
                return (
                  <Template4
                    image={single.image}
                    key={index}
                    word={single.word}
                    templateClass={"template4"}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
      {displayTemplate5 && (
        <>
        <PdfControls 
        handleGetPDF={handleGetPDF}
        handleUploadPDF={handleUploadPDF}
        pdfName={pdfName}
        setPdfName={setPdfName}
        setPdfNameError={setPdfNameError}
        pdfNameError={pdfNameError}
        closePrintPreview={closePrintPreview}
        />
          <div className="select__preview">
            <div ref={docToPrint} className="select__full-view">
              {templateContents.map((single, index) => {
                return (
                  <Template5
                    image={single.image}
                    key={index}
                    word={single.word}
                    templateClass={"template5"}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
      {displayTemplate6 && (
        <>
        <PdfControls 
        handleGetPDF={handleGetPDF}
        handleUploadPDF={handleUploadPDF}
        pdfName={pdfName}
        setPdfName={setPdfName}
        setPdfNameError={setPdfNameError}
        pdfNameError={pdfNameError}
        closePrintPreview={closePrintPreview}
        />
          <div className="select__preview">
            <div ref={docToPrint} className="select__full-view select__full-view--6">
              {templateContents.map((single, index) => {
                return (
                  <Template6
                    image={single.image}
                    key={index}
                    word={single.word}
                    templateClass={"template6"}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TemplatesDisplay;
