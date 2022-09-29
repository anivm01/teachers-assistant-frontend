import React, { useState } from "react";
import "./TemplateSelectionPage.scss";
import Upload from "../../components/Upload/Upload";
import TemplatesDisplay from "../../components/TemplatesDisplay/TemplatesDisplay";
import UploadsSoFar from "../../components/UploadsSoFar/UploadsSoFar";
import Header from "../../components/Header/Header";

function TemplateSelectionPage({isLoggedIn}) {
  const [templateContents, setTemplateContents] = useState([]);
  const [uploadFields, setUploadFields] = useState([0]);

  if (!uploadFields) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="select">
        
        <div className="select__upload">
          <h2 className="select__title">Choose an image and type a word or a phrase</h2>
          <Upload
            uploadFields={uploadFields}
            setUploadFields={setUploadFields}
            templateContents={templateContents}
            setTemplateContents={setTemplateContents}
          />
          <UploadsSoFar
              templateContents={templateContents}
              setTemplateContents={setTemplateContents}
            />
        </div>
        {templateContents.length > 0 && (
          <div className="select__animated">
            <h2 className="select__title">Choose your template</h2>
            <TemplatesDisplay
              className={`${templateContents.length > 0 && "select__animated"}`}
              templateContents={templateContents}
              isLoggedIn={isLoggedIn}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TemplateSelectionPage;
