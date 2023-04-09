import './App.css';
import { Routes, Route } from 'react-router';
import PopularMovies from './pages/PopularMovies';
import NowPlayingMovies from './pages/NowPlayingMovies';
import TopRatedMovies from './pages/TopRatedMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import MovieDetails from './components/popular/MovieDetails';
import Home from './pages/Home';


function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<PopularMovies />} />
        <Route path='popular' element={<PopularMovies />} />
        <Route path='top-rated' element={<TopRatedMovies />} />
        <Route path='now-playing' element={<NowPlayingMovies />} />
        <Route path='upcoming' element={<UpcomingMovies />} />
        <Route
          path='movies/:movieId'
          element={<MovieDetails />}
        />
      </Routes>
    </>


  );
}

export default App;
