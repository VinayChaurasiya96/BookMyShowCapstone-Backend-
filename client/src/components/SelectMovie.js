import React from "react";

//this component rendering selected movie section
const SelectMovie = ({movies, selectedMovie, setSelectedMovie}) => {
  return (
    <div className="movie-row">
      <h3>Select A Movie</h3>
      {movies.map((movie, i) => (
        <div
          key={i}
          className={`movie-column ${
            movie == selectedMovie ? "movie-column-selected" : ""
          }`}
          onClick={() => setSelectedMovie(movie)}
        >
          {movie}
        </div>
      ))}
    </div>
  );
};

export default SelectMovie;
