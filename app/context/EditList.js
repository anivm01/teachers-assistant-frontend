import { useWordList, useWordListUpdate } from "./WordListContext";

// const wordList = useWordList();
// const updateWordList = useWordListUpdate();

// export const addImagesToList = (event) => {
//   //collect uploaded files
//   const files = event.target.files;

//   //store uploaded files into context
//   const uploads = [];
//   for (let file of files) {
//     const upload = {
//       file: file,
//       file_name: file.name,
//       word: "",
//     };
//     uploads.push(upload);
//   }
//   const update = [...wordList, ...uploads];
//   updateWordList(update);
// };

// export const removeFromList = (index) => {
//   const words = [...wordList];
//   words.splice(index, 1);
//   updateWordList(words);

//   const images = [];

//   for (let i = 0; i < words.length; i++) {
//     const file = words[i].file;

//     //use File Reader object to generate a preview of the files that have just been uploaded
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       images.push(e.target.result);

//       if (images.length === words.length) {
//         setPreviewImages(images);
//       }
//     };

//     reader.readAsDataURL(file);
//   }
// };

// export const addToWordList = (word, index) => {
//   updateWordList((list) => {
//     const updatedList = [...list];
//     updatedList[index] = { ...updatedList[index], word };
//     return updatedList;
//   });
// };
