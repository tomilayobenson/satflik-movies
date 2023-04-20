import { Row, Col, Container } from 'reactstrap'


const UpcomingBanner = () => {
    return (
        <div className="jumbotron jumbotron-fluid m-0">
            <Row style={{ backgroundColor: 'var(--light)' }}>
                
                    <Container class="d-flex flex-column justify-center box-border h-36 w-32 p-4 border-6">
                        <h1 class="text-5xl flex justify-center p-6 ">Upcoming Movies</h1>
                        <p class="text-xl flex justify-center pb-4">Get a first glance at our upcoming movies.</p>
                    </Container>
                
            </Row>
        </div>
    )
}

export default UpcomingBanner