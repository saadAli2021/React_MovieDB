import React, { useEffect, useState } from "react";
const APIKEY = process.env.REACT_APP_APIKEY;
const endpoint = `http://www.omdbapi.com/?apikey=${APIKEY}`;

const useFetch = (urlParam) => {
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);
  //   console.log("useFetch - Rendered");
  const fetchMovies = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const dataObj = await response.json();

      if (dataObj.Response === "True") {
        setData(dataObj.Search || dataObj);
        setError({ show: false, msg: "" });
        console.log("got response");
      } else {
        setError({ show: true, msg: dataObj.Error });
        console.log("no response");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(`${endpoint}${urlParam}`);
    fetchMovies(`${endpoint}${urlParam}`);
  }, [urlParam]);

  return { isloading, error, data };
};

export default useFetch;
