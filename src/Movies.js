import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { data, isloading } = useGlobalContext();

  if (isloading) {
    return <div className="loading"></div>;
  }
  // console.log(data);
  return (
    <div className="MovieList">
      {data.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article className="movieItem">
              <img src={poster} className="thumbnail" />
              <p className="title">{title}</p>
              <p className="year">{year}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
