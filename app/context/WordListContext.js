"use client";
import React, { useContext, useState } from "react";

const WordListContext = React.createContext();
const WordListUpdateContext = React.createContext();

//handles the word list state
export const useWordList = () => {
  return useContext(WordListContext);
};

//handles updating the word list state
export const useWordListUpdate = () => {
  return useContext(WordListUpdateContext);
};

export const WordListProvider = ({ children }) => {
  const [wordList, setWordList] = useState([]);

  const changeWordList = (newWordList) => {
    setWordList(newWordList);
  };

  const addImagesToList = (event) => {
    //collect uploaded files
    const files = event.target.files;
    //store uploaded files into context
    const uploads = [];
    for (let file of files) {
      const upload = {
        file: file,
        file_name: file.name,
        word: "",
        src: URL.createObjectURL(file),
      };
      uploads.push(upload);
    }
    const update = [...wordList, ...uploads];
    setWordList(update);
  };

  const removeFromList = (index) => {
    const words = [...wordList];
    words.splice(index, 1);
    setWordList(words);
  };

  const addToWordList = (word, index) => {
    setWordList((list) => {
      const updatedList = [...list];
      updatedList[index] = { ...updatedList[index], word };
      return updatedList;
    });
  };

  return (
    <WordListContext.Provider value={wordList}>
      <WordListUpdateContext.Provider
        value={{
          addImagesToList,
          addToWordList,
          removeFromList,
          changeWordList,
        }}
      >
        {children}
      </WordListUpdateContext.Provider>
    </WordListContext.Provider>
  );
};
