import React, { Component } from "react";
import "./week.css";
import axios from "axios";
import Button from "./Button";
import WeeklyTeamReturns from "./WeeklyTeamReturns";

class Week extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      allData: [],
      games: [],
      errorMessage: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    axios
      .get(`/api/week/${this.state.input}`)
      .then(response => this.setState({ games: response.data }))
      .catch(error => {
        this.setState({ errorMessage: error });
      });
  }

  render() {
    return (
      <div className="week-comp">
        <div>
          <input
            className="input-week-number"
            value={this.state.input}
            placeholder={"  " + "Enter a week number to view schedule..."}
            onChange={e => {
              this.setState({ input: e.target.value.slice(0, 2) });
            }}
          />
          <div className="button">
            <Button handleSearch={this.handleSearch} />
          </div>
          <div>
            <WeeklyTeamReturns
              week={this.state.input}
              games={this.state.games}
              state={this.state}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Week;
