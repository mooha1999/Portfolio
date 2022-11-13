import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import RenderPortfolio from "./RenderPortfolio";

import "./index.scss";

const Portofolio = () => {
  const [letterClass, setLetterClass] = useState<string>("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            text="Portfolio"
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <div><RenderPortfolio/></div>
      </div>
      <Loader active={true} type="pacman" />
    </>
  );
};

export default Portofolio;
