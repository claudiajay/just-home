import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} className="logo" alt="" />
      <ul>
        <li>Home</li>
        <li>Listings</li>
        <li>Members</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>

      <div className="nav-end">
        <img src={phone} className="phone" />
        <p>+68 685 88666</p>
        <img src={user} className="user" />
        <button className="add-button">Add Property</button>
      </div>
    </nav>
  );
};

export default Navbar;
