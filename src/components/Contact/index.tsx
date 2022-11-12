import { FormEvent, useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState<string>("text-animate");
  const refForm = useRef<HTMLFormElement>(null);
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_hdpy0k9",
        refForm.current || "#contactForm",
        "8Pq-n5keHD028dVpT"
      )
      .then(() => {
        alert("Sent successfully");
        // window.location.reload(false);
      })
      .catch((r) => {
        console.error(r);
        alert("Failed to send, please try again");
      });
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              text="Contact me"
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>This is some lame text about me bla bla bla</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} id="contactForm">
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            Ahmed Sameh,
            <br />
            Egypt,
            <br />
            Cairo, Manial
            <br />
            <span>developer.ahmed99@gmail.com</span>
          </div>
          <MapContainer center={[44, 19]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44, 19]}>
              <Popup>هنا يرقد الحزلقوم</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Contact;
