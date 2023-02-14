import { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import PopularBanner from "../components/popular/PopularBanner";
import PopularCards from "../components/popular/PopularCards";
import PopularGenres from "../components/popular/PopularGenres";
import { baseUrl } from "../data/baseUrl";

const PopularMovies = () => {
  const [movies, setMovies] = useState([])
  const [allGenres, setAllGenres] = useState([])
  const [categorizedMovies, setCategorizedMovies] = useState([])
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(baseUrl + "popular?api_key=3341385410c37095575e1b97197378ce");
      if (!response.ok) throw Error(response.message);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);

    }
    getMovies();
  }, []);
  useEffect(() => {
    async function getGenres() {
      const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3341385410c37095575e1b97197378ce");
      if (!response.ok) throw Error(response.message);
      const data = await response.json();
      setAllGenres(data.genres);
      // console.log("all genres",data.genres);

    }
    getGenres();
  }, []);

  return (
    <>
      <PopularBanner movies={movies} />
      <Container>
        <h2 className="display-5 my-5 text-center">Learn More</h2>
        <Row>
          <Col sm={3}>
            <PopularGenres movies={movies} allGenres={allGenres} setCategorizedMovies={setCategorizedMovies} />
          </Col>
          <Col>
            <PopularCards movies={categorizedMovies.length ? categorizedMovies : movies} sm={9} />
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default PopularMovies