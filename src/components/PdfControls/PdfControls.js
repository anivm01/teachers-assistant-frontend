import "./PdfControls.scss";
import downloadIcon from "../../assets/svg/download.svg";
import uploadIcon from "../../assets/svg/upload.svg";
import closeIcon from "../../assets/svg/close-icon.svg";



function PdfControls() {
  return (
    <div className="pdf-controls">
            <button className="pdf-controls__button" onClick={handleUploadPDF}>Upload Step 2</button>
            <button
              className="pdf-controls__button"
              onClick={() => {
                handleGetPDF(pdfName);
              }}
            >
              <img className="select__download-icon" src={downloadIcon} alt="print" />
            </button>
            <input
              className="pdf-controls__input"
              type="text"
              name="pdf-name"
              value={pdfName}
              onChange={changePdfName}
              placeholder="Name your pdf"
            />
            <button className="pdf-controls__close" onClick={closePrintPreview}>
              <img className="pdf-controls__icon" src={closeIcon} alt="print" />
            </button>
          </div>
  )
}

export default PdfControls