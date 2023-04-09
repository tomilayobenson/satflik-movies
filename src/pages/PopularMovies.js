import { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import PopularBanner from "../components/popular/PopularBanner";
import PopularCards from "../components/popular/PopularCards";
import PopularGenres from "../components/popular/PopularGenres";
import { baseUrl } from "../data/baseUrl";
import Header from "../components/popular/Header";

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
        <Header />
      <PopularBanner movies={movies} />
      <Container >
        <h2 className="display-5 mt-5 text-center d-none d-md-block">Learn More</h2>
        <Row className='mt-5'>
          <Col sm={2}>
            <PopularGenres movies={movies} allGenres={allGenres} setCategorizedMovies={setCategorizedMovies} />
          </Col>
          <Col>
            <PopularCards movies={categorizedMovies.length ? categorizedMovies : movies} sm={10} />
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default PopularMovies