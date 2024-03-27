import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import img1 from "../assets/skate-kid.png";
import img2 from "../assets/laugh-kid.png";
import img3 from "../assets/read-kid.png";
import message from "../assets/comment-alt-middle -white.png";

export const ContactComponent = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x45e91z", "template_069t7xi", form.current, {
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
    <div
      className="container contact-container pattern-background orange-bg"
      style={{ margin: 0 }}>
      <div className="row" style={{ gap: "3rem" }}>
        <div className="col-sm m-4 d-flex justify-content-center flex-column">
          <img src={message} alt="" width={40} className="mb-4" />
          <h4 className="font-title">Kontakta oss</h4>
          {!successMessage ? (
            <p className="mb-4">
              Har du några tankar eller frågor, skicka gärna ett meddelande så
              återkommer vi så snart vi kan!
            </p>
          ) : (
            <p className="mb-4">
              Tack för visat intresse. <br></br>
              Ditt meddelande har skickats!
            </p>
          )}
          <form
            className="d-flex flex-column"
            style={{ gap: "1.6rem" }}
            action=""
            ref={form}
            onSubmit={sendEmail}>
            <input
              className="form-control"
              type="text"
              name="user_name"
              placeholder="Namn"
            />
            <input
              className="form-control"
              type="email"
              name="user_email"
              placeholder="E-post"
            />
            <textarea
              className="form-control"
              type="text"
              name="user_message"
              placeholder="Meddelande..."
              style={{ minHeight: "8rem" }}></textarea>
            <div className="d-flex justify-content-end">
              <button className="ww-btn" type="submit" value="Send">
                Skicka meddelande
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm img-stack m-4">
          <img src={img1} alt="kid laughing" className="contact-img1" />
          <img src={img2} alt="kid skating" className="contact-img2" />
          <img src={img3} alt="kid reading" className="contact-img3" />
        </div>
      </div>
    </div>
  );
};
