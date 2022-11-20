import "./PdfControls.scss";
import downloadIcon from "../../assets/svg/download.svg";
import uploadIcon from "../../assets/svg/upload.svg";
import closeIcon from "../../assets/svg/close-icon.svg";

function PdfControls({
  handleGetPDF,
  handleUploadPDF,
  pdfName,
  setPdfName,
  setPdfNameError,
  pdfNameError,
  closePrintPreview,
  isLoggedIn,
  uploadSuccess,
  setUploadSuccess,
  uploadError,
  setUploadError
}) {
  const changePdfName = (event) => {
    setPdfNameError(false);
    setPdfName(event.target.value);
  };

  if(uploadSuccess) {
    setTimeout(()=>{
      setUploadSuccess(false)
    }, 3000)
  }
  if(uploadError) {
    setTimeout(()=>{
      setUploadError(false)
    }, 3000)
  }

  return (
    <div className="pdf-controls">
      <div className="pdf-controls__container">
        {uploadSuccess && <p className="pdf-controls__message">Saved! 😀</p>}
        {uploadError && <p className="pdf-controls__message">Something went wrong 😥</p>}
        <div className="pdf-controls__buttons">
          {isLoggedIn && <button className="pdf-controls__button" onClick={handleUploadPDF}>
          <img className="pdf-controls__icon" src={uploadIcon} alt="print" />
          Save</button>}
        
        <button
          className="pdf-controls__button"
          onClick={() => {
            handleGetPDF(pdfName);
          }}
        >
        <img className="pdf-controls__icon" src={downloadIcon} alt="print" />
        Download
        </button>
        </div> 
      </div>
      <div className="pdf-controls__name">
        {pdfNameError && <h2>Pdf needs a name!</h2>}
        <input
          className="pdf-controls__input"
          type="text"
          name="pdf-name"
          value={pdfName}
          onChange={changePdfName}
          placeholder="Name your pdf"
        />
      </div>
      <button className="pdf-controls__button pdf-controls__button--end" onClick={closePrintPreview}>
        <img className="pdf-controls__close" src={closeIcon} alt="print" />
      </button>
    </div>
  );
}

export default PdfControls;
