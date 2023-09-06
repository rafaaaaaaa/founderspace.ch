import "./../index.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterLink from "./FooterLink";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="backdrop-blur-sm md:mt-24">
      <footer className="flex flex-wrap items-center justify-between mx-auto">
        <div className="grid grid-cols-1 gap-12 justify-items-start md:grid-cols-3 md:gap-4 md:justify-items-center">
          <div>
            <a href="/" className="logo d-flex align-items-center">
              <img
                src={require("../founderspace-logo.png")}
                className="h-10"
                alt="FounderSpace Logo"
              />
            </a>
            <p className="text-white text-sm font-italic text-justify">
              Your student initiative club connects the startup industry with
              the University of Zurich by providing a platform for students to
              learn about and engage with the startup community.
            </p>
            <div className="mt-3 flex flex-row gap-2">
              <a href="https://www.linkedin.com/company/founderspace-the-entrepreneurship-club-at-uzh">
                <FaLinkedin className="social-icon" color="white" size={24} />
              </a>
              <a href="https://www.instagram.com/founderspace.ch/">
                <FaInstagram className="social-icon" color="white" size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-highlight1 mb-4 font-medium">USEFUL LINKS</h4>
            <ul>
              <li>
                <FooterLink title="Events" href="events" />
              </li>
              <li className="flex flex-row  items-center mb-1">
                <FooterLink title="Partnerships" href="partnerships" />
              </li>
              <li className="flex flex-row  items-center mb-1">
                <FooterLink title="Board" href="board" />
              </li>
              <li className="flex flex-row  items-center mb-1">
                <FooterLink title="Join Us" href="join" />
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-highlight1 mb-4 font-medium">CONTACT</h4>
            <p className="text-white text-sm font-light">
              FounderSpace at the University of Zurich <br />
              c/o Impulsfabrik <br />
              Rämistrasse 3<br />
              8005 Zürich <br />
              <br />
              <a className="underline" href="mailto:contact@founderspace.ch">
                contact@founderspace.ch
              </a>
              <br />
            </p>
          </div>
        </div>
        <div className="w-full py-8 md:py-16 flex items-center justify-center text-white font-light text-sm">
          <p>
            &copy; {currentYear} FounderSpace, All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
