import React, { useState, useContext, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../Context";
import Click from "../../Assets/Sounds/mouse-click.mp3";
import validator from "validator";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(false);
      setEmail("");
      setName("");
      setMessage("");
    }, 2000);
  }, [done]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "phoenix",
        "phoenix-template",
        form.current,
        "lzx8H569iloDlauMD"
      )
      .then(() => {
        if (validateEmail()) setDone(true);
      });
  };

  //Removing input from form after send button is pressed.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = () => {
    if (validator.isEmail(email)) return true;
    else return false;
  };

  let audio = new Audio(Click);
  const submitForm = () => {
    if (name !== "" && validateEmail(email) !== false && message !== "") {
      audio.play();
      setDone(true);
    }
  };
  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            type="message"
            name="message"
            className="user"
            placeholder="Message"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input
            type="submit"
            value="Send"
            className="button"
            onClick={submitForm}
          />
          {done ? <span>{"Thanks for contacting!"}</span> : null}

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
