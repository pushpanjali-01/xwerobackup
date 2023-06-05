import React from "react";
import "./style.css";
import serachlogo from "../../asserts/images/searchlogo.svg";

const CustomerDetailsSearchInput = () => {
  return (
    <div className="search-col-input">
      <img src={serachlogo} alt="Placeholder" className="placeholder-image" />
      <input
        className="input-with-image-placeholder"
        type="text"
        placeholder="Mobile, Name or Company"
      />
    </div>
  );
};

export default CustomerDetailsSearchInput;
