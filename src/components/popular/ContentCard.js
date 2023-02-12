import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, ListGroup, ListGroupItem, CardLink } from "reactstrap"
const ContentCard = ({ movieDetails: details }) => {
    return (
        <Card
            color='light'
            outline
        >
            <CardHeader>
                <CardTitle tag="h5">
                    {details.title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {details.release_date}
                </CardSubtitle>
                <CardText>
                    {details.overview}
                </CardText>
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>
                    <strong>Adult Movie?:</strong> {details.adult ? "Yes" : "No"}
                </ListGroupItem>
                <ListGroupItem>
                    <strong>Runtime:</strong> {details.runtime}mins
                </ListGroupItem>
                <ListGroupItem>
                    <strong>Budget:</strong> ${details.budget}
                </ListGroupItem>
            </ListGroup>
            <CardBody>
                <CardLink href={details.homepage} target="_blank">
                    Get Tickets
                </CardLink>
            </CardBody>
        </Card>
    )
}

export default ContentCard