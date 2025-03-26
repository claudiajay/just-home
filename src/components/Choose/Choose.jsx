import React from "react";
import "./Choose.css";
import home from "../../assets/home.png";
import buy from "../../assets/buy.png";
import agent from "../../assets/agent.png";
import property from "../../assets/property.png";

const Choose = () => {
  return (
    <div className="choose container">
      <div className="choice">
        <h2 className="title">Why Choose Us</h2>
        <p className="subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="options">
        <div className="frame">
          <img src={home} className="icon" alt="home" />
          <h5>Find your future home</h5>
          <p>
            We help you find a new home by offering a smart real estate
            experience
          </p>
        </div>
        <div className="frame">
          <img src={agent} className="icon" alt="agent" />
          <h5>Experienced agents</h5>
          <p>Find an experienced agent who knows your market best</p>
        </div>
        <div className="frame">
          <img src={buy} className="icon" alt="buy" />
          <h5>Buy or rent homes</h5>
          <p>Millions of houses and apartments in your favourite cities</p>
        </div>
        <div className="frame">
          <img src={property} className="icon" alt="property" />
          <h5>List your own property</h5>
          <p>Sign up now and sell or rent your own properties</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
