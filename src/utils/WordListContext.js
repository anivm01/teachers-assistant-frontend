import React, { useContext, useState } from "react";

const WordListContext = React.createContext();
const WordListUpdateContext = React.createContext();

//handles the language state
export const useWordList = () => {
  return useContext(WordListContext);
};

//handles updating the language state
export const useWordListUpdate = () => {
  return useContext(WordListUpdateContext);
};

export const WordListProvider = ({ children }) => {
  const [wordList, setWordList] = useState("en");

  const changeWordList = (newWordList) => {
    setWordList(newWordList);
  };

  return (
    <WordListContext.Provider value={wordList}>
      <WordListUpdateContext.Provider value={changeWordList}>
        {children}
      </WordListUpdateContext.Provider>
    </WordListContext.Provider>
  );
};
