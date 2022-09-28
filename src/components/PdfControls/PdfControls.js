import "./PdfControls.scss";
import downloadIcon from "../../assets/svg/download.svg";
import uploadIcon from "../../assets/svg/upload.svg";
import closeIcon from "../../assets/svg/close-icon.svg";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
const worker = html2pdf();

function PdfControls({
  handleGetPDF,
  handleUploadPDF,
  pdfName,
  setPdfName,
  setPdfNameError,
  pdfNameError,
  closePrintPreview,
  isLoggedIn
}) {
  const changePdfName = (event) => {
    setPdfNameError(false);
    setPdfName(event.target.value);
  };

  return (
    <div className="pdf-controls">
        <div className="pdf-controls__buttons">
          {isLoggedIn && <button className="pdf-controls__button" onClick={handleUploadPDF}>
      <img className="pdf-controls__icon" src={uploadIcon} alt="print" />
      Save
      </button>}
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
