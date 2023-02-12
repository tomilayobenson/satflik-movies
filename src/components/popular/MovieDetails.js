import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { useParams } from "react-router";
import { baseUrl,imageUrl } from "../../data/baseUrl";
import ImagesCarousel from "./ImagesCarousel";
import ContentCard from "./ContentCard";
import MovieReviews from "./MovieReviews";


const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieImages, setMovieImages] = useState([])
  const [activeImage, setActiveImage] = useState(null)
  const [details, setDetails] = useState({})
  const [reviews, setReviews] = useState([])

  const listedImages = (arr) => {
    const dividedImages = []
    const images = arr;
    while (images.length) {
        //call carousel for each slide
        const imagePart = images.splice(0, 3);
        dividedImages.push(imagePart);
    }
    console.log(dividedImages)
    return dividedImages;
}

  useEffect(() => {
    async function getImages() {
      const response = await fetch(baseUrl + movieId + "/images?api_key=3341385410c37095575e1b97197378ce");
      if (!response.ok) throw Error(response.message);
      const data = await response.json();
      setMovieImages(listedImages(data.backdrops));      
    }
    getImages();
  }, []);

  useEffect(() => {
    async function getDetails() {
      const response = await fetch(baseUrl + movieId + "?api_key=3341385410c37095575e1b97197378ce");
      if (!response.ok) throw Error(response.message);
      const data = await response.json();
      setDetails(data);      
    }
    getDetails();
  }, []);

  useEffect(() => {
    async function getReviews() {
      const response = await fetch(baseUrl + movieId + "/reviews?api_key=3341385410c37095575e1b97197378ce");
      if (!response.ok) throw Error(response.message);
      const data = await response.json();
      console.log('reviews', data)
      setReviews(data.results);      
    }
    getReviews();
  }, []);



  return (
    <Container>
      <Row className='my-5'>
        <Col xs={12} md={7}>
          <img
            alt='title'
            src={(!movieImages.length)? null : (activeImage ? (imageUrl + activeImage.file_path):(imageUrl + movieImages[0][0].file_path))}
            className="d-block"
            style={{width: '100%', height:'auto'}}
          />
          <ImagesCarousel movieImages = {movieImages} setActiveImage= {setActiveImage}/>
        </Col>
        <Col xs={12} md={5}>
          <ContentCard movieDetails={details}/>
          <MovieReviews movieReviews={reviews}/>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails