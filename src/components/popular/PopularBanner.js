import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { baseUrl, imageUrl } from '../../data/baseUrl';

const PopularBanner = () => {
  const [movies, setMovies] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = movies.map((movie) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={movie.id}
      >
        <img className="d-block w-100" src={imageUrl + movie.backdrop_path} alt={movie.title} />
        <CarouselCaption
          captionText={movie.overview}
          captionHeader={movie.title}
        />
      </CarouselItem>
    );
  });
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(baseUrl + "now_playing?api_key=3341385410c37095575e1b97197378ce");
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    }
    getMovies();
  }, []);
  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}       
      >
        <CarouselIndicators
          items={movies}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default PopularBanner