import classes from "./contact.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useEffect } from "react";

function Contact() {
  const [showMessage, setShowMessage] = useState(false);

  function sendMail(e) {
    e.preventDefault();
    setShowMessage(true);

    emailjs.sendForm(
      "service_dgza2fa",
      "template_mqudg3r",
      e.target,
      "user_TKpqsH8g4lClfUeZdNIRY"
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  });

  return (
    <div className={classes.contact} id="contact">
      <h2 className={classes.title}>Contact me</h2>
      <div className={classes.containers}>
        <div className={classes.imgContainer}>
          <img src="./img/mail.png" alt="mail" />
        </div>
        <div className={classes.mailContainer}>
          <form onSubmit={sendMail}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={classes.name}
              required
            />
            <label htmlFor="email">Email</label>
            <input type="email" name="clientemail" id="email" required />
            <label htmlFor="emailbody">Message</label>
            <textarea name="emailbody" id="emailbody" required />
            {showMessage && (
              <span>Thanks for your message, I will reply soon 🙂</span>
            )}
            <input type="submit" value="Send" className={classes.submitBtn} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
