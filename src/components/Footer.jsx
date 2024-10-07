import "./FooterStyles.css"

import React from 'react'
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="left">
            <h1> LET'S CONNECT.</h1>
            <p>Say hello</p>
          <div className="location">
            <a
              href="https://www.linkedin.com/in/temilola-oguntamu-7bb691152/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/Temilola-Oguntamu/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
        <div className="left"></div>
      </div>
    </div>
  );
}

export default Footer