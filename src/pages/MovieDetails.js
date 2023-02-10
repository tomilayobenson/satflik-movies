import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router";
import { baseUrl } from "../data/baseUrl";


const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState([])
    useEffect(()=> {
        const getDetails = async () => {
            const response = await fetch(baseUrl + "movie/" + movieId + "?api_key=3341385410c37095575e1b97197378ce");
      const data = await response.json();
      setDetails(data.results);
      console.log(data.results);
        }
        getDetails();
    },[])
  return (
    <Container>
        <Row>
            <Col>
                <p>Test</p>
            </Col>
            <Col>

            </Col>
        </Row>
    </Container>
  )
}

export default MovieDetails