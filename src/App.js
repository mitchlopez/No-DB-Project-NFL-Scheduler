import React, { Component } from "react";
import Team from "./Components/Team";
import Week from "./Components/Week";
import Favorites from "./Components/Favorites";
import Header from "./Components/Header";
import "./index.css";
import "./reset.css";

class App extends Component {
  state = {
    current: "week"
  };

  renderContent() {
    if (this.state.current === "week") {
      return <Week />;
    }
    if (this.state.current === "team") {
      return <Team />;
    }
    if (this.state.current === "favorites") {
      return <Favorites />;
    }
    this.setState({ current: "week" });
  }

  changeToWeek = () => {
    this.setState({ current: "week" });
  };
  changeToTeam = () => {
    this.setState({ current: "team" });
  };
  changeToFavorites = () => {
    this.setState({ current: "favorites" });
  };

  render() {
    return (
      <div className="body">
        <Header
          changeWeek={this.changeToWeek}
          changeTeam={this.changeToTeam}
          changeFavorites={this.changeToFavorites}
        />
        <div className="content">{this.renderContent()}</div>
      </div>
    );
  }
}
export default App;
