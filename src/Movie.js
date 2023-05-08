import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
const Movie = () => {
  const { id } = useParams();

  const { isloading, error, data } = useFetch(`&i=${id}`);

  if (isloading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = data;
  return (
    <div className="card">
      <div className="card-image">
        <img src={poster} alt="asd" />
      </div>
      <div className="movieinfo">
        <h1 className="title"> {title} </h1>
        <h3 className="year">{year}</h3>
        <h4 className="plot">{plot}</h4>
        <button className="btn">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default Movie;
