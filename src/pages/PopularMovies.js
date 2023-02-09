import { useState, useEffect } from "react";
import PopularBanner from "../components/popular/PopularBanner";
import PopularCards from "../components/popular/PopularCards";
import { baseUrl } from "../data/baseUrl";

const PopularMovies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(baseUrl + "popular?api_key=3341385410c37095575e1b97197378ce");
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    }
    getMovies();
  }, []);
  return (
    <>
      <PopularBanner movies={movies} />
      <PopularCards movies={movies}/>
    </>

  )
}

export default PopularMovies