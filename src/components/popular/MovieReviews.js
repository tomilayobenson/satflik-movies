import { Card, CardText, CardTitle, CardBody, CardImg, CardSubtitle, Media } from "reactstrap";
import { imageUrl } from "../../data/baseUrl";

const MovieReviews = ({ movieReviews: reviews }) => {
    const truncate = (str) => str.length > 150 ? str.substring(0, 147) + "..." : str;
    return (
        <>
            <h5 className="my-3">Movie Reviews</h5>
            {
                reviews.map((review) => {
                    return (
                        <Card className="rounded-bottom m-1 p-4">
                            <CardBody>
                                <i className="fa fa-quote-left fa-1x d-block text-info" aria-hidden="true"></i>
                                <p className="card-text text-justify pt-3">{truncate(review.content)}</p>
                                <i className="fa fa-quote-right fa-1x d-block text-info text-right" aria-hidden="true"></i>
                                <ul className="list-unstyled d-flex justify-content-center mb-0">
                                    {
                                        [...Array(review.author_details.rating || 5)].map((star, id) => {
                                            return (
                                                <li key={id}>
                                                    <i className="fa fa-star fa-sm text-warning"></i>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </CardBody>
                            <hr />
                            <div class='d-flex'>
                                <img
                                    src={review.author_details.avatar_path ? (imageUrl + review.author_details.avatar_path) : "https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg"}
                                    style={{ verticalAlign: 'middle',width: '50px', height: '50px', borderRadius: '50%' }}
                                    
                                    width="25%"
                                    height="auto" 
                                    alt={review.author}
                                />
                                <div class="media-body mx-4">
                                    <h5 className="font-weight-bold">{review.author}</h5>
                                    <p>{review.created_at || "3 mins ago"}</p>
                                </div>
                            </div>
                        </Card>

                    )

                })
            }

        </>

    )
}


export default MovieReviews