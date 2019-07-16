import React, { Component } from "react";
import "./week.css";
import axios from "axios";
import Button from "./Button";
import CoverUp from "./CoverUp";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      data: [],
      errorMessage: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    console.log(this.state.text);
    axios
      .get(`/api/${this.state.text}`)
      .then(response => this.setState({ data: response.data[0] }))
      .catch(error => {
        this.setState({ errorMessage: "Error" });
      });
  }

  render() {
    // console.log(this.state.data);
    return (
      <div className="week-comp">
        <div>
          <input
            type="text"
            className="input-week-number"
            value={this.state.text.toUpperCase()}
            placeholder={"  " + "Insert Team Abbreviation Here to View..."}
            onChange={e => {
              this.setState({ text: e.target.value.toUpperCase().slice(0, 3) });
            }}
          />
          <div className="button">
            <Button handleSearch={this.handleSearch} />
          </div>
          <div className="team-info">
            <div className="games">
              <a className="team-item">Week 1:{this.state.data[1]}</a>
              <a className="team-item">Week 2:{this.state.data[2]}</a>
              <a className="team-item">Week 3:{this.state.data[3]}</a>
              <a className="team-item">Week 4:{this.state.data[4]}</a>
              <a className="team-item">Week 5:{this.state.data[5]}</a>
              <a className="team-item">Week 6:{this.state.data[6]}</a>
              <a className="team-item">Week 7:{this.state.data[7]}</a>
              <a className="team-item">Week 8:{this.state.data[8]}</a>
              <a className="team-item">Week 9:{this.state.data[9]}</a>
              <a className="team-item">Week 10:{this.state.data[10]}</a>
              <a className="team-item">Week 11:{this.state.data[11]}</a>
              <a className="team-item">Week 12:{this.state.data[12]}</a>
              <a className="team-item">Week 13:{this.state.data[13]}</a>
              <a className="team-item">Week 14:{this.state.data[14]}</a>
              <a className="team-item">Week 15:{this.state.data[15]}</a>
              <a className="team-item">Week 16:{this.state.data[16]}</a>
              <a className="team-item">Week 17:{this.state.data[17]}</a>
              <a className="week-error">{this.state.errorMessage}</a>
            </div>
            <div className="logo-and-name">
              {/* <CoverUp name={this.state.data.name} /> */}
              <img className="team-logo" src={this.state.data.logo} />
              <div className="team-text">
                <div className="team-from-name">
                  {this.state.data.from === undefined &&
                  this.state.data.name === undefined
                    ? null
                    : this.state.data.from + " " + this.state.data.name}
                </div>
                {this.state.data.division === undefined ? null : (
                  <div>{"Division: " + this.state.data.division}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
