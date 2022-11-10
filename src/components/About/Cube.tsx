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

const Cube = () => {
  const faces: { icon: IconDefinition; color: string }[] = [
    { icon: faNodeJs, color: "#68A063" },
    { icon: faHtml5, color: "#F06529" },
    { icon: faCss3, color: "#28A4D9" },
    { icon: faReact, color: "#5ED4F4" },
    { icon: faJsSquare, color: "#EFD81D" },
    { icon: faGitAlt, color: "#EC4D28" },
  ];

  return <div className="stage-cube-cont">
  <div className="cube-spinner">
    {faces.map(({ icon, color }, index) => (
      <div className={`face${index + 1}`} key={Math.random()}>
        <FontAwesomeIcon icon={icon} color={color} />
      </div>
    ))}
  </div>
</div>
}

export default Cube;