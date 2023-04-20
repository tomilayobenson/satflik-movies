import { Col, Container, Row } from "reactstrap"
import { imageUrl } from "../../data/baseUrl"

const UpcomingList = ({ rowSet, setActiveImage }) => {
  return (
    <Container>
      <Row>
        {
          rowSet.map((image, idx) => (
            <Col key={idx} xs={4}>
              <img
                alt="title"
                src={imageUrl + image.file_path}
                className='img-thumbnail'
                onClick={() => setActiveImage(image)}
              />
            </Col>
          )
          )
        }
      </Row>
    </Container>
  )

}

export default UpcomingList;




