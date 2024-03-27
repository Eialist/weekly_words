import Jumbotron from "../components/Jumbotron.jsx";
import WordsComponent from "../components/WordsComponent.jsx";
import { Footer } from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export const Frontpage = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div
          className="row"
          style={{
            padding: "1rem 1rem 2rem",
            width: "100%",
            margin: "0 auto",
          }}></div>
        <div className="row ww-container">
          <div className="col-sm">
            <WordsComponent />
          </div>
          <div className="col-sm" style={{ margin: "0" }}>
            <Jumbotron />
          </div>
        </div>
        <div
          className="row"
          style={{
            padding: "1rem 1rem 2rem",
            width: "100%",
            margin: "0 auto",
          }}></div>
      </div>
      <Footer />
    </>
  );
};

export default Frontpage;
