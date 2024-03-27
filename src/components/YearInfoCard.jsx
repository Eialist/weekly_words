import { useNavigate } from "react-router-dom";
import img4 from "../assets/child-smiling.png";
import img5 from "../assets/child-smiling2.png";
import img6 from "../assets/child-smiling3.png";

export const YearInfoCard = () => {
  const navigate = useNavigate();
  const courseInfo = [
    {
      year: "4",
      info: "I årskurs 4 tränar vi på elevnära ord och uttryck för att få en bra grund att fortsätta utveckla vår engelska.",
      link: "/ar4",
      img: img4,
    },
    {
      year: "5",
      info: "I årskurs 5 utvidgas elevernas ordförråd och de får lära sig ord som förbättrar deras förmåga att uttrycka sig. ",
      link: "/ar5",
      img: img5,
    },
    {
      year: "6",
      info: "I årskurs 6 ska eleverna lära sig ord som gör att de bland annat kan kommunicera sina tankar och känslor.",
      link: "/ar6",
      img: img6,
    },
  ];

  return (
    <div className="container boxcard-container d-flex align-items-center justify-content-center">
      <div className="row boxcard-row">
        {courseInfo.map((year) => (
          <div
            className="col-sm col-md card d-flex flex-column align-items-center justify-content-between"
            style={{
              width: "18rem",
              margin: "1rem",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              overflow: "hidden",
              border: "none",
              padding: 0,
            }}
            key={year.year}>
            <img className="year-img" src={year.img} alt="" width="100%" />
            <div
              className="d-flex flex-column align-items-center"
              style={{
                padding: "1rem 2rem 2rem",
                width: "100%",
              }}>
              <h4>Årskurs {year.year}</h4>
              <p>{year.info}</p>
              <button
                className="ww-btn"
                onClick={() => navigate("/weeklywords")}>
                Testa veckans ord
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearInfoCard;
