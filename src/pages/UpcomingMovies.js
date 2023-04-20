import React from 'react'
import { Row, Col, Container } from "reactstrap";
import { useState, useEffect } from "react";
import Header from "../components/popular/Header";
import UpcomingBanner from '../components/upcoming/UpcomingBanner';
import { baseUrl } from "../data/baseUrl";
import UpcomingCards from "../components/upcoming/UpcomingCards";


const UpcomingMovies = () => {

  const [movies, setMovies] = useState([])
  const [allGenres, setAllGenres] = useState([])
  const [categorizedMovies, setCategorizedMovies] = useState([])
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(baseUrl + "upcoming?api_key=");
      if (!response.ok) throw Error(response.message);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    }
    getMovies();
  }, []);
  useEffect(() => {
    async function getGenres() {
      const response = await fetch("/");
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
      <UpcomingBanner />
      <Container >
        <Row>
          <Col>
            <UpcomingCards movies={categorizedMovies.length ? categorizedMovies : movies} sm={10} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UpcomingMovies