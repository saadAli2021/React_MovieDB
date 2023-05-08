import React from "react";
import { useGlobalContext } from "./context";
import SearchForm from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  return (
    <main className="mainSection">
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
