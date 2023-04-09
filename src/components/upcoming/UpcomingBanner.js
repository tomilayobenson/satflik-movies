import { Row, Col, Container } from 'reactstrap'



const UpcomingBanner = () => {
    return (
        <div className="jumbotron jumbotron-fluid m-0">
            <Row style={{ backgroundColor: 'var(--light)' }}>
                <Col xs={12} md={4}>
                    <Container className="d-flex flex-column justify-content-center h-100">
                        <h1 className="display-3">Upcoming Movies</h1>
                        <p className="lead">Get first glace at upcoming movies</p>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default UpcomingBanner