import { Row, Col, Container } from 'reactstrap'
import PopularCarousel from "./PopularCarousel"

const PopularBanner = ({movies}) => {
  return (
    <div className="jumbotron jumbotron-fluid m-0">
      <Row style={{ backgroundColor: 'var(--light)' }}>
        <Col xs={12} md={8}>
          <PopularCarousel movies={movies}/>
        </Col>
        <Col xs={12} md={4}>
          <Container className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-3">Popular Movies</h1>
            <p className="lead">Checkout our selection of most popular movies</p>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default PopularBanner