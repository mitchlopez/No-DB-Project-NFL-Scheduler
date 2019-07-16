import React from "react";
import CoverUp from "./CoverUp";
import Axios from "axios";

const EachTeam = props => {
  // console.log(props);
  const Baseurl = "https://a.espncdn.com/i/teamlogos/nfl/500/";

  const handleClick = () => {
    const { name, abv, games, week } = props;
    Axios.post("/api/favorites", { name, abv, games, week }).then(response =>
      console.log(response)
    );
  };
  return (
    <div className="each-team">
      <button onClick={() => handleClick()}>Add</button>
      <img className="tiny-logo" src={Baseurl + props.abv + ".png"} />
      <a className="team-name">{props.name}:</a>
      <a className="opponent">{props.games}</a>
    </div>
  );
};

export default EachTeam;
