import { AvatarSVG, Dribble, Email, Figma, Linkedin } from "../../assets/image";
import { FaEnvelope, FaPhone, FaLocationDot, FaLink } from "react-icons/fa6";
import Info from "./Info";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarSVG} alt="avatar" className="avatar" />
              <h1 className="header-name text-white">
                Pankaj Kumar, <br /> UI/Frontend Developer{" "}
              </h1>
            </div>
            <p className="header-text text text-white">
            Passionate Frontend Developer dedicated to transforming visions into
            captivating and intuitive digital experiences. Leveraging expertise
            in HTML, CSS, JavaScript, React, React-native and Solid, I blend
            creativity with technical proficiency to design visually stunning,
            responsive, and user-centric websites. With a keen eye for detail
            and a commitment to staying at the forefront of emerging
            technologies, I consistently deliver cutting-edge solutions that not
            only meet but exceed client expectations. Let's collaborate to bring
            your digital presence to life and engage your audience with an
            exceptional user interface.
          </p>
          </div>
          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <Info
                Icon={FaEnvelope}
                property="Email:  "
                value="pankaj51999@gmail.com"
              />
              <Info
                Icon={FaPhone}
                property="Phone: "
                value="+91 (85) 4424-7026"
              />
              <Info
                Icon={FaLocationDot}
                property="Address: "
                value="Noida, India"
                size={14}
              />
              <Info
                Icon={FaLink}
                property="Website: "
                value="https://www.github.com/reelinfinity"
                size={15}
              />
            </ul>
            <ul className="contact-social-list flex items-center">
              <li className="social-item">
                <Link to="/">
                  <img src={Dribble} />
                  <span className="tooltip text">Dribble</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Linkedin} />
                  <span className="tooltip text">Linkedin</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Email} />
                  <span className="tooltip text">Email</span>
                </Link>
              </li>
              <li className="social-item">
                <Link to="/">
                  <img src={Figma} />
                  <span className="tooltip text">Figma</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
