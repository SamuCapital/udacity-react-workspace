import React, { Component } from "react";

class MappingList extends Component {
  render() {
    let { users, movies, profiles } = this.props;
    users = Object.entries(users).map(i => i[1]);
    movies = Object.entries(movies).map(i => i[1]);

    const names = profiles
      .map(profile => users.filter(u => u.id == profile.userID))
      .map(p => p[0]);

    const favorites = profiles
      .map(profile => movies.filter(m => m.id == profile.favoriteMovieID))
      .map(p => p[0]);

    console.log("NAMES:\n", names, "\nMOVIES:\n", favorites);

    return <div className="container"></div>;
  }
}

export default MappingList;
