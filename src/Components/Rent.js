import React, { useState } from "react";
import data from "../Dummy Data/data";
import Card from "./Card";
import "../Styles/Rent.css";

function Rent(props) {
  const [details, setDetails] = useState(data);
  return (
    <div className="rent-container py-3 pt-0">
      <div className="container my-5 mt-2">
        <h2 className="py-4">My Rent Dashboard</h2>
        <div className="row gy-5" id="row">
          {details.map((ele) => {
            let { price, image, title, category, address } = ele;

            if (
              (category === props.category || props.category === "all") &&
              (address.toLowerCase().includes(props.keyword) ||
                props.keyword === "") &&
              ((ele.price <= props.maxPrice && ele.price >= props.minPrice) ||
                props.maxPrice === 0) &&
              (title === props.location || props.location === "")
            ) {
              return (
                <div className="col-4">
                  <Card
                    image={image}
                    price={price}
                    title={title}
                    address={address}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Rent;
