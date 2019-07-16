import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header className="navbar">
      <div className="left-navbar">
        <a className="week" onClick={props.changeWeek}>
          Week
        </a>
        <a className="team" onClick={props.changeTeam}>
          Team
        </a>
        <a className="favorites" onClick={props.changeFavorites}>
          Favorite Games
        </a>
      </div>
      <img
        className="nfl-logo"
        src="https://www.stickpng.com/assets/images/5895deb9cba9841eabab6099.png"
      />
    </header>
  );
};

export default Header;
