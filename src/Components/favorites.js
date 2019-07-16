import React, { Component } from "react";
import Axios from "axios";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    Axios.get("/api/favorites").then(response =>
      this.setState({ favorites: response.data })
    );
  }

  render() {
    // console.log(this.state.favorites);
    let viewFavorites = this.state.favorites.map(favorite => {
      return (
        <div className="favorite-results">
          <h1 className="fav-games" />
          <h1 className="fav-games">{favorite.name}</h1>
          <p className="fav-games">
            Week {favorite.week}: {favorite.games}
          </p>
        </div>
      );
    });
    return (
      <div>
        <div className="add to favorites">
          {this.state.favorites.length === 0 ? (
            <a className="error-message">
              Click the 'Add' button in the 'Week' tab to add to your list of
              Favorite Games!
            </a>
          ) : null}
        </div>
        <div>{viewFavorites}</div>
      </div>
    );
  }
}

export default Favorites;
