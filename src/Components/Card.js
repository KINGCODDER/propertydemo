import React, { useState } from "react";
import "../Styles/Card.css";

function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div
          className="image-container card-img-top"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="card-body">
          <div className="card-description">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.address}</p>
          </div>
          <p className="price"> ${props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
