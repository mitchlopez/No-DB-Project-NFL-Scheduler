import React from "react";
import "./WeeklyTeamReturns.css";
import { placeholder } from "@babel/types";
import EachTeam from "./EachTeam";

const WeeklyTeamReturns = props => {
  console.log(props);
  return (
    <div className="week-display">
      <section className="column-1">
        <EachTeam
          week={props.week}
          name="Arizona Cardinals"
          abv="ari"
          games={props.games[0]}
        />
        <EachTeam
          week={props.week}
          name="Atlanta Falcons"
          abv="atl"
          games={props.games[1]}
        />
        <EachTeam
          week={props.week}
          name="Baltimore Ravens"
          abv="bal"
          games={props.games[2]}
        />
        <EachTeam
          week={props.week}
          name="Buffalo Bills"
          abv="buf"
          games={props.games[3]}
        />
        <EachTeam
          week={props.week}
          name="Carolina Panthers"
          abv="car"
          games={props.games[4]}
        />
        <EachTeam
          week={props.week}
          name="Chicago Bears"
          abv="chi"
          games={props.games[5]}
        />
        <EachTeam
          week={props.week}
          name="Cincinnati Bengals"
          abv="cin"
          games={props.games[6]}
        />
        <EachTeam
          week={props.week}
          name="Cleveland Browns"
          abv="cle"
          games={props.games[7]}
        />
        <EachTeam
          week={props.week}
          name="Dallas Cowboys"
          abv="dal"
          games={props.games[8]}
        />
        <EachTeam
          week={props.week}
          name="Denver Broncos"
          abv="den"
          games={props.games[9]}
        />
        <EachTeam
          week={props.week}
          name="Detroit Lions"
          abv="det"
          games={props.games[10]}
        />
        <EachTeam
          week={props.week}
          name="Green Bay Packers"
          abv="gb"
          games={props.games[11]}
        />
        <EachTeam
          week={props.week}
          name="Houston Texans"
          abv="hou"
          games={props.games[12]}
        />
        <EachTeam
          week={props.week}
          name="Indianapolis Colts"
          abv="ind"
          games={props.games[13]}
        />
        <EachTeam
          week={props.week}
          name="Jacksonville Jaguars"
          abv="jax"
          games={props.games[14]}
        />
        <EachTeam
          week={props.week}
          name="Kansas City Chiefs"
          abv="kc"
          games={props.games[15]}
        />
      </section>
      <div className="column-2">
        <EachTeam
          week={props.week}
          name="Los Angeles Chargers"
          abv="lac"
          games={props.games[16]}
        />
        <EachTeam
          week={props.week}
          name="Los Angeles Rams"
          abv="lar"
          games={props.games[17]}
        />
        <EachTeam
          week={props.week}
          name="Miami Dolphins"
          abv="mia"
          games={props.games[18]}
        />
        <EachTeam
          week={props.week}
          name="Minnestoa Vikings"
          abv="min"
          games={props.games[19]}
        />
        <EachTeam
          week={props.week}
          name="New England Patriots"
          abv="ne"
          games={props.games[20]}
        />
        <EachTeam
          week={props.week}
          name="New Orleans Saints"
          abv="no"
          games={props.games[21]}
        />
        <EachTeam
          week={props.week}
          name="New York Giants"
          abv="nyg"
          games={props.games[22]}
        />
        <EachTeam
          week={props.week}
          name="New York Jets"
          abv="nyj"
          games={props.games[23]}
        />
        <EachTeam
          week={props.week}
          name="Oakland Raiders"
          abv="oak"
          games={props.games[24]}
        />
        <EachTeam
          week={props.week}
          name="Pittsburgh Steelers"
          abv="pit"
          games={props.games[26]}
        />
        <EachTeam
          week={props.week}
          name="Philadephia Eagles"
          abv="phi"
          games={props.games[25]}
        />
        <EachTeam
          week={props.week}
          name="San Francisco 49ers"
          abv="sf"
          games={props.games[27]}
        />
        <EachTeam
          week={props.week}
          name="Seattle Seahawks"
          abv="sea"
          games={props.games[28]}
        />
        <EachTeam
          week={props.week}
          name="Tampa Bay Buccaneers"
          abv="tb"
          games={props.games[29]}
        />
        <EachTeam
          week={props.week}
          name="Tennessee Titans"
          abv="ten"
          games={props.games[30]}
        />
        <EachTeam
          week={props.week}
          name="Washington Redskins"
          abv="was"
          games={props.games[31]}
        />
      </div>
    </div>
  );
};

export default WeeklyTeamReturns;
