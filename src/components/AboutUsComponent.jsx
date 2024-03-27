import img from "../assets/classroom1.png";
import { useNavigate } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const AboutUsComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="container boxcard-container">
      <div className="row mb-5 pb-3 pt-3">
        <div
          className="col col-sm-8 m-auto d-flex flex-column justify-content-around align-items-center pt-5 pb-5"
          style={{
            minHeight: "70vh",
            width: "100%",
          }}>
          <h2 className="text-center mb-5 pb-3">Vilka är vi?</h2>
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ gap: "2rem" }}>
            <div className="col-sm text-center">
              <AnimationOnScroll animateIn="animate-rotate">
                <img src={img} alt="" className="about-us-img" />
              </AnimationOnScroll>
            </div>
            <div className="col-sm d-flex flex-column justify-content-between">
              <h3 className="font-title">Learnica</h3>
              <p className="infobox-text">
                Efter att ha gått från att vara lärare till att bli
                frontendutvecklare, startade jag mitt företag med målet att
                förena min passion för undervisning med mina nya kunskaper inom
                teknik. Jag vill skapa webbplatser som underlättar lärande och
                undervisning för både elever och lärare. Med min bakgrund som
                lärare förstår jag utmaningarna i traditionella klassrum och
                potentialen i tekniken att förändra utbildning. Genom mitt
                företag strävar jag efter att utveckla användarvänliga
                plattformar som stärker elever och lärare, vilket gör lärandet
                mer tillgängligt, engagerande och effektivt för alla.
              </p>
              <span>
                <button
                  className="ww-btn"
                  onClick={() => navigate("/information")}>
                  Läs mer
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
