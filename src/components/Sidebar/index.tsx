import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import logoS from "../../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  IconDefinition,
  faSuitcase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Sidebar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleShowNav = () => setShowNav(!showNav);

  const greyColor = "#4d4d4e";

  const contacts: {
    href: string;
    icon: IconDefinition;
  }[] = [
    { href: "https://www.linkedin.com/in/ahmed-sameh-6a2113189/", icon: faLinkedin },
    { href: "https://github.com/mooha1999", icon: faGithub },
    { href: "https://twitter.com/developer_sameh", icon: faTwitter}
  ];

  const navLinks: {
    to: string;
    icon: IconDefinition;
    className?: string;
  }[] = [
    { to: "/", icon: faHome },
    { to: "/about", icon: faUser, className: "about-link" },
    { to: "/portfolio", icon: faSuitcase, className: "portfolio-link" },
    { to: "/contact", icon: faEnvelope, className: "contact-link" },
  ];

  return (
    <div className="nav-bar">
      <Link className="logo" to="/contact">
        <img src={logoS} alt="logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        {navLinks.map(({ to, icon, className }) => (
          <NavLink
            to={to}
            end={true}
            className={className || ""}
            onClick={toggleShowNav}
            key={Math.random()}
          >
            <FontAwesomeIcon icon={icon} color={greyColor} />
          </NavLink>
        ))}
        <FontAwesomeIcon
          icon={faClose}
          size="3x"
          color="#ffd700"
          onClick={toggleShowNav}
          className="close-icon"
        />
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
      <FontAwesomeIcon
        onClick={toggleShowNav}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
