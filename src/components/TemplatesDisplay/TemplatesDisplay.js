import "./TemplatesDisplay.scss";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import { useRef, useState } from "react";
import Template1 from "../../components/Template1/Template1";
import Template2 from "../../components/Template2/Template2";
import Template3 from "../../components/Template3/Template3";
import Template4 from "../../components/Template4/Template4";
import Template5 from "../../components/Template5/Template5";
import Template6 from "../../components/Template6/Template6";
import axios from "axios";
import PdfControls from "../PdfControls/PdfControls";
import API_URL from "../../utils/api"

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
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadError, setUploadError] = useState(false)

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

  const previewFullSizeOption1 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate1(true);
    
  };

  const previewFullSizeOption2 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate2(true);
  };

  const previewFullSizeOption3 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate3(true);
  };

  const previewFullSizeOption4 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate4(true);
  };

  const previewFullSizeOption5 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate5(true);
  };

  const previewFullSizeOption6 = () => {
    setSmallSizePreview(false);
    setDisplayTemplate6(true);
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

  function handleUploadPDF(){
    if (!pdfName){
      setPdfNameError(true)
      return
    }
    const pdfToUpload = docToPrint.current
     worker.from(pdfToUpload).outputPdf("blob").then(result =>{
      const file = new File([result], pdfName, {type:"application/pdf"})

      const formData = new FormData();    
      
      formData.append("file", file, `${pdfName}.pdf`)
      
      const token = sessionStorage.getItem("authToken")
      return axios.post(`${API_URL}/pdf`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
      })
    }).then(response=>{
      setUploadSuccess(true)
    }).catch(error=>{
      setUploadError(true)
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
            </button>          
            </div>
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
        uploadSuccess={uploadSuccess}
        setUploadSuccess={setUploadSuccess}
        uploadError={uploadError}
        setUploadError={setUploadError}
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
        isLoggedIn={isLoggedIn}
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
        isLoggedIn={isLoggedIn}
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
        isLoggedIn={isLoggedIn}
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
        isLoggedIn={isLoggedIn}
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
        isLoggedIn={isLoggedIn}
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
