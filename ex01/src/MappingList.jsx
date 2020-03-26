import React, { Component } from "react";

class MappingList extends Component {
  render() {
    let { users, movies, profiles } = this.props;
    users = Object.entries(users).map(i => i[1]);
    movies = Object.entries(movies).map(i => i[1]);

    const favorites = profiles
      .map(profile => movies.filter(m => m.id == profile.favoriteMovieID))
      .map(p => p[0].name);
    const names = profiles
      .map(profile => users.filter(u => u.id == profile.userID))
      .map(p => p[0].name);

    return (
      <div className="container">
        {movies.map((x, i) => (
          <p key={x.id}>
            {names[i]}'s favorite movie is {favorites[i]}!
          </p>
        ))}
      </div>
    );
  }
}

export default MappingList;
