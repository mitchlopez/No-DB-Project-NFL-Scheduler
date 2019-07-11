import React, { Component } from "react";
import team from "./Components/team";
import week from "./Components/week";
import favorites from "./Components/favorites";

class App extends Component {
  state = {
    current: "week"
  };

  renderContent() {
    if (this.state.current === "week") {
      return <week />;
    }
    if (this.state.current === "team") {
      return <team />;
    }
    if (this.state.current === "favorites") {
      return <favorites />;
    }
    this.setState({ current: "week" });
  }

  render() {
    return <div className="content">{this.renderContent()}</div>;
  }
}
export default App;
