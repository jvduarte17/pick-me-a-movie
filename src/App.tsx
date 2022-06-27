import { Header } from './components/Header';
import { Content, EmptyContent } from './components/Content';
import { useEffect, useState } from 'react';
import { getMoviesArrayLength, loadMovies, fetchWatchProviders } from './client/client'
import { Movie } from './interfaces/Movie';
import { ReactComponent as Shuffle } from './assets/shuffle.svg';
import styled from 'styled-components';
import { MovieStore } from './store/MovieStore';

const movieStore = new MovieStore([]);

function App() {

  const emptyMovie: Movie = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  }

  useEffect(() => {
    loadMovies()
  }, [])

  const [movie, setMovie] = useState<Movie>(emptyMovie);
  const [moviePosterPath, setMoviePosterPath] = useState('');

  const renderNewMovie = () => {
    if (movieStore.getMoviesShownLength() === getMoviesArrayLength()) {
      alert('Você atingiu o limite máximo de filmes permitidos!');
    } else {
      movieStore.setNewMovie()
      setTimeout(async () => {
        const lastInserted = movieStore.getMovies()[movieStore.getMoviesShownLength() - 1];
        const providers = await fetchWatchProviders(lastInserted.movie.id);

        setMovie(lastInserted.movie);
        setMoviePosterPath(lastInserted.posterPath);
      }, 1000)
    }
  }

  return (
    <div className="App">
      <Header />
      
      {
        movie.title === '' ?
        <EmptyContent /> :
        <Content
          movie={ movie }
          moviePosterPath={ moviePosterPath }
        />
      }

      <Footer>
        <Button onClick={renderNewMovie}>
          <Icon />
          <ButtonText>Encontrar filme</ButtonText>                
        </Button>
      </Footer>
    </div>
  );
}

export default App;

const Footer = styled.div`
  margin-top: 2.5rem;
  justify-content: center;
`

const Button = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  width: 180.98px;
  height: 3.5rem;
  position: relative;
  white-space: nowrap;
  margin: 0 auto;
  padding: 0 5px 0 5px;
  opacity: 0.8;
  transition: all 300ms ease-out;

  &:hover{
    opacity: 1;
  }
`

const Icon = styled(Shuffle)`
  width: 2rem;
  height: 2rem;
  margin: 0 0 0 .5rem;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
`

const ButtonText = styled.p`
  color: black;
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 0 1.2rem;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`