import React, { useState } from "react";
import flyingPlane from "../assets/images/flyingPlane.svg";
import destinationIcon from "../assets/images/destinationIcon.svg";
import calenderIcon from "../assets/images/calenderIcon.png";
import peopleIcon from "../assets/images/peopleIcon.svg";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
const SearchPannel = () => {
  const [isRoundWayTrip, setRoundWayTrip] = useState("roundTrip");

  const handleOnChange = (event) => {
    setRoundWayTrip(event.target.value);
  };
  return (
    <form
      action="#"
      className="container p-4 rounded-2 bg-white"
      id="searchPanel"
    >
      {/* first row of search panel */}
      <div className="row mb-3 trip-options">
        <div className="col-md-6 trip-type">
          {/* bootstrap input */}
          <div className="radio-inputs d-flex">
            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="oneWay"
                value="oneway"
                checked={isRoundWayTrip == "oneway"}
                onChange={handleOnChange}
              />
              <label className="form-check-label" htmlFor="oneWay">
                One Way
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="roundTrip"
                value="roundTrip"
                checked={isRoundWayTrip == "roundTrip"}
                onChange={handleOnChange}
              />
              <label className="form-check-label" htmlFor="roundTrip">
                Round Trip
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-3 offset-md-3 mt-2 select-trip px-0">
          {/* selection menu */}
          <select className="form-select" id="flight_type">
            <option value="economy">Economy</option>
            <option value="economy_premium">Economy Premium</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </div>
      </div>

      {/* second row user details */}
      <div className="row gy-2 user-details">
        <div className="col-md-3 border p-0 me-2 rounded-2">
          <div className="flying-from bar d-flex p-2">
            <img src={flyingPlane} />
            <div className="content mx-2">
              <strong className="text-black-50">Flying From</strong>
              <br />
              <span>Select City</span>
            </div>
            <span className="bar-button ms-auto me-3 ">
              <IoIosArrowDown />
            </span>
          </div>
          <div className="switch-content-btn ">
            <FaLongArrowAltRight />
            <FaLongArrowAltLeft />
          </div>
        </div>

        <div className="col-md-3 border p-0 me-2 rounded-2">
          <div className="destination bar  d-flex p-2">
            <img src={destinationIcon} className="ps-1" />
            <div className="content mx-2">
              <strong className="text-black-50">Destination</strong>
              <br />
              <span>Select City</span>
            </div>
            <span className="bar-button ms-auto me-2">
              <IoIosArrowDown />
            </span>
          </div>
        </div>
        <div className="col-md border p-0 me-2 rounded-2">
          <div className="depart-date bar   p-2">
            <div className="head-content d-flex">
              <img src={calenderIcon} />
              <strong className="text-black-50">Depart Date</strong>
            </div>
            <span className="ms-1 date">05-08-2023</span>
          </div>
        </div>
        {isRoundWayTrip === "roundTrip" && (
          <div className="col-md border p-0 me-2 rounded-2">
            <div className="depart-date bar   p-2">
              <div className="head-content d-flex">
                <img src={calenderIcon} />
                <strong className="text-black-50">Return Date</strong>
              </div>
              <span className="ms-1 date">07-08-2023</span>
            </div>
          </div>
        )}
        <div className="col-md-2 border p-0 me-2 rounded-2">
          <div className="traveller bar p-2 d-flex">
            <img src={peopleIcon} />
            <div className="content mx-2 mt-2">Travellers 1</div>
            <span className="bar-button ms-auto me-2">
              <IoIosArrowDown />
            </span>
          </div>
        </div>
        <div className="col-md-1 p-0  rounded-2">
          <button
            type="submit"
            className="search-btn btn btn-danger w-100 h-100"
          >
            <IoSearchSharp size={24} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchPannel;
