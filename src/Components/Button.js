import React from "react";

const Button = props => {
  return (
    <div>
      <button className="search-button" onClick={props.handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Button;
