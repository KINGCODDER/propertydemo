import React, { useState } from "react";
import Rent from "./Rent";
import "../Styles/FilterBox.css";
import search from "../Resource/search.svg";

function FilterBox() {
  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [location, setLocation] = useState("");

  const searchKeyword = (ele) => {
    setKeyword(ele);
  };
  const toggleActive1 = () => {
    setLink1(!link1);
    if (link1 === false) {
      setCategory("flat");
    } else {
      setCategory("all");
    }
    setLink2(false);
    setLink3(false);
    setLink4(false);
    setLink5(false);
  };
  const toggleActive2 = () => {
    setLink1(false);
    setLink2(!link2);
    if (link2 === false) {
      setCategory("luxary");
    } else {
      setCategory("all");
    }
    setLink3(false);
    setLink4(false);
    setLink5(false);
  };
  const toggleActive3 = () => {
    setLink1(false);
    setLink2(false);
    setLink3(!link3);
    if (link3 === false) {
      setCategory("camping");
    } else {
      setCategory("all");
    }
    setLink4(false);
    setLink5(false);
  };
  const toggleActive4 = () => {
    setLink1(false);
    setLink2(false);
    setLink3(false);
    setLink4(!link4);
    if (link4 === false) {
      setCategory("a-frame");
    } else {
      setCategory("all");
    }
    setLink5(false);
  };
  const toggleActive5 = () => {
    setLink1(false);
    setLink2(false);
    setLink3(false);
    setLink4(false);
    setLink5(!link5);
    if (link5 === false) {
      setCategory("lake-view");
    } else {
      setCategory("all");
    }
  };

  return (
    <div className="filter-box-top">
      <ul className="nav my-2">
        <li className="nav-item search-box">
          <input
            className="form-control me-2 input-search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onInput={(e) => searchKeyword(e.target.value)}
          />
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill nav-link-filterBox ${
              link1 === true ? `active-link` : ``
            }`}
            href="#"
            onClick={toggleActive1}
          >
            Flat
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill nav-link-filterBox ${
              link2 === true ? `active-link` : ``
            }`}
            href="#"
            onClick={toggleActive2}
          >
            Luxary
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill nav-link-filterBox ${
              link3 === true ? `active-link` : ``
            }`}
            onClick={toggleActive3}
          >
            Camping
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill nav-link-filterBox ${
              link4 === true ? `active-link` : ``
            }`}
            onClick={toggleActive4}
          >
            A-frame
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link rounded-pill nav-link-filterBox ${
              link5 === true ? `active-link` : ``
            }`}
            onClick={toggleActive5}
          >
            Lake View
          </a>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <a
              className="btn btn-outline-custom rounded-pill dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Location
            </a>

            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setLocation("New York");
                  }}
                >
                  New York
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setLocation("San Fransisco");
                  }}
                >
                  San Francisco
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setLocation("India");
                  }}
                >
                  India
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <a
              className="btn btn-outline-custom rounded-pill dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Price
            </a>

            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setMaxPrice(499);
                    setMinPrice(0);
                  }}
                >
                  &lt;$500
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setMaxPrice(999);
                    setMinPrice(500);
                  }}
                >
                  $500 - $999
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setMaxPrice(1499);
                    setMinPrice(1000);
                  }}
                >
                  $1000 - $1499
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    setMaxPrice(1999);
                    setMinPrice(1500);
                  }}
                >
                  $1500 - $1999
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <Rent
        category={category}
        keyword={keyword.toLowerCase()}
        maxPrice={maxPrice}
        minPrice={minPrice}
        location={location}
      />
    </div>
  );
}

export default FilterBox;
