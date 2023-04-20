import { Card, CardBody, CardSubtitle, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { imageUrl } from "../../data/baseUrl";
import { useNavigate } from "react-router";


const UpcomingCards = ({ movies }) => {
  const truncate =(str) => str.length > 140 ? str.substring(0, 137) + "..." : str;
  const navigate = useNavigate()
  return (
     <Row className="mb-5">
        {movies.map((movie) => {
          return (
            <Col xs={12} md={4} className="mb-5" key={movie.id}>
              <Card>
                <img
                  alt={movie.title}
                  src={imageUrl + movie.backdrop_path}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {movie.title}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    {movie.release_date}
                  </CardSubtitle>
                  <CardText>
                    {truncate(movie.overview)}
                  </CardText>
                  <Button style={{backgroundColor:'var(--dark)'}} onClick={()=> navigate(`/movies/${movie.id}`)}>
                    View Details
                  </Button>
                         
                </CardBody>
              </Card>
            </Col>
          )
        })}

      </Row>
  )
}

export default UpcomingCards