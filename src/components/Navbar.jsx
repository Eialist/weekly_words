import logo from "../assets/weekly-words-logo.png";
import getTime from "../hooksAndUtils/time";

export const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-center nav-container">
        <nav className="navbar navbar-expand-lg navbar-light navbar-align">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-center"
              alt=""></img>
            <p className="nav-logo">Weekly Words</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <p style={{ margin: "0", padding: "8px" }}>{getTime()}</p>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Hem <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/weeklywords">
                  Veckans ord
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Information
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
