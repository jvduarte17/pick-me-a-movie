import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import { getRandomMovie } from './client/client'
import { genres } from './utils/genres'

export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean
  vote_average: number,
  vote_count: number
}

function App() {

  const [movie, setMovie] = useState(Object);
  const [moviePosterPath, setMoviePosterPath] = useState(String);

  useEffect(() => {

    const randomGenreIndex = Math.floor(Math.random() * genres.length);

    const loadRandomMovie = async () => {
      const movie = await getRandomMovie(randomGenreIndex)
      const moviePosterPath = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`

      setMovie(movie)
      setMoviePosterPath(moviePosterPath)
    }
    
    loadRandomMovie()
  }, [])

  return (
    <div className="App">
      <Header />

      <Content
        movie={ movie as unknown as Movie }
        moviePosterPath={ moviePosterPath }
      />

      <Footer />
    </div>
  );
}

export default App;
