import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Movies.css";

const Movie = () => {
  const { id } = useParams();

  const [store, setStore] = useState(
    JSON.parse(localStorage.getItem("moviesStore"))
      ? JSON.parse(localStorage.getItem("moviesStore"))
      : []
  );

  let movie = store?.filter((movieItem) => {
    return movieItem.id == id;
  })[0];
  console.log(movie);
  return (
    <div>
      <h1>{movie.name}</h1>
      <div className="movieContainer">
        <img src={movie.image.medium} />
        <div>
          {movie.summary.replace("<p>", "").replace("</p>", "")}
          <br />
          <br />
          {movie.genres.map((gen, i) => {
            return (
              <span
                style={{
                  backgroundColor: "brown",
                  color: "white",
                  fontWeight: "bold",
                  marginRight: "20px",
                  textAlign: "start",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                {gen}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
