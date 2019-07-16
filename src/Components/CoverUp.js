import React from "react";

const CoverUp = props =>
  props.name == undefined ? (
    <img
      className="cover-up"
      src="https://static.nfl.com/static/content/public/static/img/share/shield.jpg"
    />
  ) : null;

export default CoverUp;
