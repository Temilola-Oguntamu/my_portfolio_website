import "./HeroSectionStyles.css"

import React from 'react'
import introoImg from "../assets/introoImg.jpeg"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="heroImg" src={introoImg} alt="bgImg" />
      </div>
      <div className="content">
        <p>HI, I AM TEMILOLA.</p>
        <h1>Front-End Developer</h1>
        <div>
          <Link to="/project" className="btn">
            projects
          </Link>
          <Link to="/contact" className="btnLight">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection