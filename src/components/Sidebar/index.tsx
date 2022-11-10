import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import logoS from "../../assets/images/logo-s.png";
import logoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  const greyColor = "#4d4d4e";

  const contacts: {
    href: string;
    icon: IconDefinition;
  }[] = [
    {
      href: "https://www.linkedin.com/in/ahmed-sameh-6a2113189/",
      icon: faLinkedin,
    },
    { href: "https://github.com/mooha1999", icon: faGithub },
  ];

  const navLinks: {
    to: string;
    icon: IconDefinition;
    className?: string;
  }[] = [
    { to: "/", icon: faHome },
    { to: "/about", icon: faUser, className: "about-link" },
    { to: "/contact", icon: faEnvelope, className: "contact-link" },
  ];

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="logo subtitle" />
      </Link>
      <nav>
        {navLinks.map(({ to, icon, className }) => (
          <NavLink to={to} className={className || ""} key={Math.random()}>
            <FontAwesomeIcon icon={icon} color={greyColor} />
          </NavLink>
        ))}
      </nav>
      <ul>
        {contacts.map((link) => (
          <li key={Math.random()}>
            <a target="_blank" rel="noreferrer" href={link.href}>
              <FontAwesomeIcon icon={link.icon} color={greyColor} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
