import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";

const API_URL = " http://www.omdbapi.com/?apikey=16306fa7";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title})`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("spider man");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for movies"
          value="Spiderman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {}} />
      </div>
    </div>
  );
}

export default App;
