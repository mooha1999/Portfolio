import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState<string>("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const faces: { icon: IconDefinition; color: string }[] = [
    { icon: faNodeJs, color: "#68A063" },
    { icon: faHtml5, color: "#F06529" },
    { icon: faCss3, color: "#28A4D9" },
    { icon: faReact, color: "#5ED4F4" },
    { icon: faJsSquare, color: "#EFD81D" },
    { icon: faGitAlt, color: "#EC4D28" },
  ];

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters text="About me" idx={15} letterClass={letterClass} />
        </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cube-spinner">
          {faces.map(({ icon, color }, index) => (
            <div className={`face${index + 1}`} key={Math.random()}>
              <FontAwesomeIcon icon={icon} color={color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
