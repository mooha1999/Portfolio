import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import "./index.scss";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterCLass] = useState<string>("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterCLass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} idx={11} text="Hi," />
            <br />
            <AnimatedLetters letterClass={letterClass} idx={14} text="I'm" />
            <img src={logoTitle} alt="Developer" />
            <AnimatedLetters letterClass={letterClass} idx={17} text="ameh" />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              idx={21}
              text="web engineer"
            />
          </h1>
          <h2>
            Frontend Developer / Backend Developer / Database Administrator
          </h2>
          <Link to="contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" active={true}/>
    </>
  );
};

export default Home;
