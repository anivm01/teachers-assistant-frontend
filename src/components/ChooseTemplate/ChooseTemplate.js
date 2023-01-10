import Template1 from "../Template1/Template1";
import "./ChooseTemplate.scss"
import pineapple from "../../assets/svg/pineapple.svg"
import Template2 from "../Template2/Template2";
import Template3 from "../Template3/Template3";
import Template4 from "../Template4/Template4";
import Template5 from "../Template5/Template5";
import Template6 from "../Template6/Template6";
import SmallPreviewBox from "../SmallPreviewBox/SmallPreviewBox";
import LargeFlashcardsTemplate from "../LargeFlashcardsTemplate/LargeFlashcardsTemplate";
import MediumFlashcardsTemplate from "../MediumFlashcardsTemplate/MediumFlashcardsTemplate";
import SmallFlashcardsTemplate from "../SmallFlashcardsTemplate/SmallFlashcardsTemplate";
import LargeWritingTemplate from "../LargeWritingTemplate/LargeWritingTemplate";
import SmallWritingTemplate from "../SmallWritingTemplate/SmallWritingTemplate";
import GameCardsTemplate from "../GameCardsTemplate/GameCardsTemplate";

function ChooseTemplate() {
  const demoArray = [
    {
    image: pineapple,
    word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    },
    {
      image: pineapple,
      word: "pineapple"
    }
]
  const templates = [
    {
      title: "Large Flashcards",
      template: <LargeFlashcardsTemplate wordPairsArray={demoArray} pageStyle={{height: "297px", width: "210px"}} textStyle={{fontSize: "28px"}}/>
    },
    {
      title: "Medium Flashcards",
      template: <MediumFlashcardsTemplate wordPairsArray={demoArray} pageStyle={{height: "148.5px", width: "210px"}} textStyle={{fontSize: "20px"}}/>
    },
    {
      title: "Small Flashcards",
      template: <SmallFlashcardsTemplate wordPairsArray={demoArray} pageStyle={{height: "148.5px", width: "105px"}} textStyle={{fontSize: "16px"}}/>
    },
    {
      title: "Large Writing",
      template: <LargeWritingTemplate wordPairsArray={demoArray} pageStyle={{height: "49.5px", width: "210px"}} textStyle={{fontSize: "12px"}}/>
    },
    {
      title: "Small Writing",
      template: <SmallWritingTemplate wordPairsArray={demoArray} pageStyle={{height: "29.7px", width: "210px"}} textStyle={{fontSize: "8px"}}/>
    },
    {
      title: "Game Cards",
      template: <GameCardsTemplate wordPairsArray={demoArray} pageStyle={{height: "74.25px", width: "70px"}} textStyle={{fontSize: "14px"}}/>
    }
  ]
  
  return (
      <>
      <h2 className="select__title">Choose your template</h2>
      <div className="select__display">
        {templates.map((template,index)=>{
          return <SmallPreviewBox
          title = {template.title}
          cta = "Select"
          key={index}>
            {template.template}
          </SmallPreviewBox>
        })}
        
      </div>
      </>
    )}

export default ChooseTemplate