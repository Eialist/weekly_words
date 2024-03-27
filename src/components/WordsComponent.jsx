import { useState } from "react";
import pickWordsOfTheWeek from "../hooksAndUtils/generateWords";
import { words } from "../db/wordList";
import generateNewWeekList from "../hooksAndUtils/newWeekWordList";

let wordsis = generateNewWeekList();
console.log(wordsis);
console.log(words);
let newWords = pickWordsOfTheWeek(wordsis);

export const WordsComponent = () => {
  const [inputValues, setInputValues] = useState({});
  const [wordsOfTheWeek, setWordsOfTheWeek] = useState(newWords);
  const [lang, setLang] = useState(false);

  const checkWord = (e, wordId) => {
    e.preventDefault();
    let enteredWord = e.target.value.toLowerCase();
    setInputValues({ ...inputValues, [wordId]: enteredWord });
    console.log(inputValues);
  };

  const changeLanguage = () => {
    setLang((prevState) => !prevState);
    setInputValues("");
  };

  const inputStyle = (wordId) => {
    if (inputValues[wordId]) {
      let word = wordsOfTheWeek.find((w) => w.id === wordId);
      console.log(inputValues[wordId]);
      console.log(word);
      if (lang === false && inputValues[wordId] === word.en.toLowerCase()) {
        console.log("Rättstavat");
        return { border: "2px solid rgb(87, 187, 137)" };
      } else if (lang && inputValues[wordId] === word.sv.toLowerCase()) {
        return { border: "2px solid rgb(87, 187, 137)" };
      }
    }
    return {};
  };

  const setNewWords = () => {
    newWords = pickWordsOfTheWeek(wordsis);
    setWordsOfTheWeek(newWords);
    setInputValues("");
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        {wordsOfTheWeek.map((word) => (
          <div key={word.id} className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                {!lang ? word.sv.toLowerCase() : word.en.toLowerCase()}
              </span>
            </div>
            <input
              key={word.sv}
              type="text"
              value={inputValues[word.id] || ""}
              className="form-control"
              onChange={(e) => checkWord(e, word.id)}
              style={inputStyle(word.id)}></input>
          </div>
        ))}
        <div className="d-flex" style={{ gap: "2rem", marginBottom: "2rem" }}>
          <button
            type="button"
            className="ww-btn"
            onClick={() => setNewWords()}>
            Nya ord
          </button>
          <button
            type="button"
            className="ww-btn"
            onClick={() => changeLanguage()}>
            Ändra språk
          </button>
        </div>
      </div>
    </>
  );
};

export default WordsComponent;
