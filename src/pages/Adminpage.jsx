import { useState } from "react";
// import { usePost } from "../hooksAndUtils/useFetch";
import { post } from "../hooksAndUtils/fetchUtil";
import { useGet } from "../hooksAndUtils/useFetch";
// import { useGet } from "../hooksAndUtils/useFetch";

export const Adminpage = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [listWords, setListWords] = useState([]);
  const [newWord, setNewWord] = useState({
    sv: "",
    en: "",
    week: "",
  });
  let printWords, printWords1;

  useGet("/api/year4", setListWords);
  //   const printWords = listWords[0].words;
  console.log(listWords);
  for (let i = 0; i < listWords.length; i++) {
    if (listWords[0]) {
      printWords = listWords[i].words;
      console.log(printWords);
    } else if (listWords[1]) {
      printWords1 = listWords[i].words;
      console.log(printWords1);
    }
  }

  const handleClick = async () => {
    console.log(newWord);
    let res = await post("/api/addWord", newWord);
    console.log(res);
    setSuccessMessage(res.msg);
    setNewWord({
      sv: "",
      en: "",
      week: "",
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 m-5">
          <select
            value={newWord.week}
            name=""
            id=""
            onChange={(e) => setNewWord({ ...newWord, week: e.target.value })}
            className="form-control mb-3">
            <option value="">Välj lista att lägga ordet i</option>
            <option value="week1">Gloslista 1</option>
            <option value="week2">Gloslista 2</option>
          </select>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="svenska"
            onChange={(e) => setNewWord({ ...newWord, sv: e.target.value })}
          />
          <input
            className="form-control"
            type="text"
            placeholder="engelska"
            onChange={(e) => setNewWord({ ...newWord, en: e.target.value })}
          />
          <button className="ww-btn" onClick={() => handleClick()}>
            Lägg till
          </button>
          {successMessage ? <p>{successMessage}</p> : console.log("nopes")}
        </div>
        <div>
          {newWord.week === "week1"
            ? printWords?.map((word) => (
                <div key={word.sv}>
                  <p>
                    {word.sv} - {word.en}
                  </p>
                </div>
              ))
            : console.log("ok")}
        </div>
      </div>
    </div>
  );
};
