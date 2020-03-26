import React from "react";

const DataComponent = (movie, favoriteList) => {
  return (
    <div className="movie-details" key={movie.id}>
      <h2 className="movie-name">{movie.name}</h2>
      <p>Liked By:</p>
      <ul>
        {favoriteList.length !== 0 ? (
          favoriteList.map(name => <li key={name}>{name}</li>)
        ) : (
          <p>None of the current users liked this movie</p>
        )}
      </ul>
    </div>
  );
};

const filterMovie = (movie, users, profiles) => {
  const filtered = profiles
    .filter(profile => profile.favoriteMovieID == movie.id)
    .map(u => u.userID)
    .map(id => users.filter(user => user.id == id).map(user => user.name));
  console.log("FILTERED:\n", filtered);
  return DataComponent(movie, filtered);
};

const MovieFavorites = props => {
  let { users, movies, profiles } = props;
  users = Object.entries(users).map(i => i[1]);
  movies = Object.entries(movies).map(i => i[1]);
  console.log(users, movies);
  return movies.map(movie => filterMovie(movie, users, profiles));
};

export default MovieFavorites;
