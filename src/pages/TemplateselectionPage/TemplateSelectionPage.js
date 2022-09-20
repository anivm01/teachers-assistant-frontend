import React, { useState } from "react";
import './TemplateSelectionPage.scss'
import Template1 from "../../components/Template1/Template1";
import Template2 from "../../components/Template2/Template2";
import Template3 from "../../components/Template3/Template3";
import Template4 from "../../components/Template4/Template4";
import Template5 from "../../components/Template5/Template5";
import Template6 from "../../components/Template6/Template6";
import Upload from "../../components/Upload/Upload";

function TemplateSelectionPage() {
  const [templateContents, setTemplateContents] = useState([]);
  const [uploadFields, setUploadFields] = useState([0]);

  if (!uploadFields) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div>
        {uploadFields.map((single, index) => {
          return (
            <Upload
              key={index}
              uploadFields={uploadFields}
              setUploadFields={setUploadFields}
              templateContents={templateContents}
              setTemplateContents={setTemplateContents}
              index={index}
            />
          );
        })}
      </div>
      <div className="select__display">
        <div className="select__option select__option--1">
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
        <div className="select__option select__option--2">
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
        <div className="select__option select__option--3">
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
        <div className="select__option select__option--4">
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
        <div className="select__option select__option--5">
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
        <div className="select__option select__option--6">
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
    </>
  );
}

export default TemplateSelectionPage;
