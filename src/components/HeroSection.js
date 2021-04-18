import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="../assets/videos/video-1" autoPlay loop muted />
      <h1>Misael Villaverde</h1>
      <p>Software Developer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          See Prices <i class="far fa-money-bill-alt"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
