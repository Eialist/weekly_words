import NavbarBoot from "../components/NavbarBoot";
import Footer from "../components/Footer";

export const Infopage = () => {
  return (
    <>
      <NavbarBoot />
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm-6" style={{ backgroundColor: "red" }}>
            Main text?
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Infopage;
