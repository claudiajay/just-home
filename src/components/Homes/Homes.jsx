import React from "react";
import "./Homes.css";
import kitchen from "../../assets/kitchen.png";
import outside from "../../assets/outside.png";
import seating from "../../assets/seating.png";
import location from "../../assets/location.png";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import sqft from "../../assets/sqft.png";

const homesData = [
  {
    id: 1,
    image: kitchen,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    price: "$280,000",
    badge: "FOR SALE",
    beds: 4,
    baths: 2,
    sgft: 450,
  },
  {
    id: 2,
    image: outside,
    title: "North Dillard Street",
    address: "4330 Bell Shoals Rd",
    price: "$250",
    priceSuffix: "/month",
    badge: "FOR RENT",
    beds: 4,
    baths: 2,
    sgft: 450,
  },
  {
    id: 3,
    image: seating,
    title: "Eaton Garth Penthouse",
    address: "7722 18th Ave, Brooklyn",
    price: "$180,000",
    badge: "FOR SALE",
    featured: true,
    beds: 4,
    baths: 2,
    sgft: 450,
  },
];

const Homes = () => {
  return (
    <div className="homes container">
      <div className="home">
        <h2>Homes For You</h2>
        <p>Based on your view history</p>
        <div className="cards">
          {homesData.map((home) => (
            <div className="card" key={home.id}>
              <div className="badges">
                <span className="badge">{home.badge}</span>
                {home.featured && (
                  <span className="badge featured">FEATURED</span>
                )}
              </div>
              <img src={home.image} className="card-img" alt={home.title} />
              <div className="description">
                <div className="property">
                  <h4>{home.title}</h4>
                  <div className="location">
                    <img src={location} className="vector" alt="location" />
                    <p>{home.address}</p>
                  </div>
                </div> 
                <div className={`price ${home?.badge === "FOR RENT" ? "rent" : "sale"}`}>
                  {home?.price ?? "N/A"}{" "}
                  {home?.priceSuffix && <span>{home.priceSuffix}</span>}
                </div>
              </div>
              <div className="details">
                <div className="attribute">
                  <img src={bed} className="vector" alt="bed" />
                  <p>{home.beds} Beds</p>
                </div>
                <div className="attribute">
                  <img src={bath} className="vector" alt="bath" />
                  <p>{home.baths} Baths</p>
                </div>
                <div className="attribute">
                  <img src={sqft} className="vector" alt="sqft" />
                  <p>{home.sqft} sqft</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homes;
