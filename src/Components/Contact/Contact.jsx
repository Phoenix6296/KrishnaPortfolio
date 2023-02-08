import React, { useState, useContext, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../Context";
import Click from "../../Assets/Sounds/mouse-click.mp3";
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const captchaRef = useRef(null);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const audio = new Audio(Click);
  //Removing input from form after send button is pressed.
  useEffect(() => {
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    console.log(token);
    setEmail("");
    setName("");
    setMessage("");
    setTimeout(() => {
      setDone(false);
    }, 5000);
  }, [done]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!captcha) return;
    audio.play();
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

  const validateEmail = () => {
    if (validator.isEmail(email)) return true;
    else return false;
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
        <form ref={form} onSubmit={onSubmitHandler}>
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
          <ReCAPTCHA
            sitekey="6LfInF4kAAAAAL3hBvD77kIpvOA1lQneD2oFZaUJ"
            ref={captchaRef}
            onChange={() => setCaptcha(true)}
          />
          <button type="submit" className="button">
            Send
          </button>
          {captcha && done ? <span>{"Thanks for contacting!"}</span> : null}
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
