import React, { useState } from "react";
import "./TemplateSelectionPage.scss";
import Upload from "../../components/Upload/Upload";
import TemplatesDisplay from "../../components/TemplatesDisplay/TemplatesDisplay";
import UploadsSoFar from "../../components/UploadsSoFar/UploadsSoFar";

function TemplateSelectionPage() {
  const [templateContents, setTemplateContents] = useState([]);
  const [uploadFields, setUploadFields] = useState([0]);

  if (!uploadFields) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="select">
      {templateContents.length > 0 && <UploadsSoFar templateContents={templateContents} setTemplateContents={setTemplateContents}/>}
      <div className="select__upload">
        <Upload
          uploadFields={uploadFields}
          setUploadFields={setUploadFields}
          templateContents={templateContents}
          setTemplateContents={setTemplateContents}
        />
      </div>
      {templateContents.length > 0 && <TemplatesDisplay templateContents={templateContents} />}
    </div>
  );
}

export default TemplateSelectionPage;
