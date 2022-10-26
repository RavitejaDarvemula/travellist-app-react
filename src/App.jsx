import { useState } from "react";
import image from "./images/location.png";
import data from "./data";

import "./App.css";
function Header() {
  return (
    <div className="nav">
      <a className="nav--logo">
        <ion-icon name="earth-outline"></ion-icon>
      </a>
      <h3 className="nav--title">my travel journal.</h3>
    </div>
  );
}
function Card(props) {
  return (
    <div className="content">
      <div className="img-container">
        <img src={props.imageUrl} alt="" className="card-img" />
      </div>
      <div className="text-flap">
        <div className="location-info">
          <img src={image} alt="" className="blip-logo" />
          <span className="location">{props.location}</span>
          <span className="gmap">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <div className="card-title">
          <h2 className="wonder">{props.title}</h2>
          <p className="dates">
            {props.startDate}-{props.endDate}
          </p>
        </div>
        <div className="card-descrp">
          <p className="descrp">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="main">
      <Header />
      <section className="card--lists">{cards}</section>
    </div>
  );
}

export default App;
