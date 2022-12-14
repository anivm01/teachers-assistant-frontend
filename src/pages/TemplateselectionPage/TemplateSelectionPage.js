import React, { useEffect, useState } from "react";
import "./TemplateSelectionPage.scss";
import Upload from "../../components/Upload/Upload";
import TemplatesDisplay from "../../components/TemplatesDisplay/TemplatesDisplay";
import UploadsSoFar from "../../components/UploadsSoFar/UploadsSoFar";
import visibilityOn from "../../assets/svg/visibility_on.svg";
import visibilityOff from "../../assets/svg/visibility_off.svg";

function TemplateSelectionPage({isLoggedIn, isNavVisible, setIsNavVisible}) {
  const [templateContents, setTemplateContents] = useState([]);
  // const [uploadFields, setUploadFields] = useState([0]);
  const [isListVisible, setIsListVisible] = useState(true)
  useEffect(()=>{
    if(isNavVisible){
      setIsNavVisible(false)
    }
  }, [])

  // if (!uploadFields) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <>
      <div className="select">
        <div className="select__upload">
          <h2 className="select__title">Choose an image and type a word or a phrase</h2>
          <Upload
            // uploadFields={uploadFields}
            // setUploadFields={setUploadFields}
            templateContents={templateContents}
            setTemplateContents={setTemplateContents}
          />
          <button className="select__list" 
          onClick={()=>{setIsListVisible((current)=>!current)}}>
            {isListVisible ? `Hide List` : "Show List"}
            <img className="select__visibility" src={isListVisible ? visibilityOff : visibilityOn} />
            </button>
          {isListVisible && <UploadsSoFar
              templateContents={templateContents}
              setTemplateContents={setTemplateContents}
            />}
        </div>
      </div>
        {templateContents.length > 0 && (
            <TemplatesDisplay
              className={`${templateContents.length > 0 && "select__animated"}`}
              templateContents={templateContents}
              isLoggedIn={isLoggedIn}
            />
        )}
    </>
  );
}

export default TemplateSelectionPage;
