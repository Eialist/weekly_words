import logo from "../assets/icon-learnica.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Footer = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mv9saro", "template_six2698", form.current, {
        publicKey: "fVcichCyqVk1RD1G7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="card-footer d-flex justify-content-center container">
      <div className="card-footer-textcontainer row">
        <div className="col col-sm">
          <img
            src={logo}
            alt=""
            width="200px"
            style={{ marginLeft: "-47px", marginBottom: "-27px" }}
          />
          <h4 className="footer-title">Learnica</h4>
          <p>Vårt mål är att göra skolan enklare för alla, lärare som elev. </p>
        </div>
        <div className="col col-sm">
          <h4 className="footer-title" style={{ marginTop: "47px" }}>
            Länkar
          </h4>
          <a href="http://eialist.github.io/easter" target="_blank">
            Word Practice - Easter
          </a>
          <a href="https://www.skolmagi.nu/store/elsinoree/" target="_blank">
            Skolmagi - Elsinoree
          </a>
          <a href=""></a>
        </div>
        <div className="col col-sm">
          <h4 className="footer-title" style={{ marginTop: "47px" }}>
            Nyhetsbrev
          </h4>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Skriv din epost"></input>
            {successMessage ? (
              <p style={{ marginTop: "1rem" }}>
                Du kommer att få nästa nyhetsbrev till din epost. Tack för visat
                intresse!
              </p>
            ) : (
              console.log("ops")
            )}
            <button className="footer-btn" type="submit" value="Send">
              Få nästa nyhetsbrev
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
