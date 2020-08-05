import React from "react";
import { Link } from "react-router-dom";
/*
======================================= 
    IMAGES
=======================================
*/
// Logo and Landing image
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

// Icons
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

/*
======================================= 
    STYLES
=======================================
*/
import "./styles.css";

/*
======================================= 
    COMPONENT
=======================================
*/
function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        {/* BEGIN Logo container */}
        <div className="logo-container">
          <img src={logoImg} alt="" />
          <h2>Sua plataforma de estudo online</h2>
        </div>
        {/* END Logo container */}

        {/* BEGIN Landing img */}
        <img src={landingImg} alt="" className="hero-image" />
        {/* END Landing img */}

        {/* BEGIN Buttons container */}
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
        {/* END Buttons container */}

        {/* BEGIN Total connections */}
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
        {/* END Total connections */}
      </div>
    </div>
  );
}

export default Landing;
