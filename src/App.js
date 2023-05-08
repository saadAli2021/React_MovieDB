import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Error from "./Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<Movie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
