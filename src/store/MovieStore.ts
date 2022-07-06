import { getMoviesArrayLength, getRandomMovie } from "../client/client";
import { Movie } from "../interfaces/Movie";
import config from '../config';

interface MovieProps {
  movie: Movie;
  posterPath: string
}

export class MovieStore{
  constructor(
    private movies: Array<MovieProps>
  ){}

  setNewMovie = async () => {
    const maxMoviesReached = this.movies.length === getMoviesArrayLength();
    let newMovie: Movie = getRandomMovie();
    let newMoviePosterPath = `https://image.tmdb.org/t/p/w300/${newMovie.poster_path}`;

    try {
      while (this.movies.some(moviePayload => moviePayload.movie.id === newMovie.id)) {
        if (maxMoviesReached)
          break;
        
        newMovie = getRandomMovie();
        newMoviePosterPath = `https://image.tmdb.org/t/p/w300/${newMovie.poster_path}`;
      }
    } catch(e) {
      console.log(e)
    }
    
    this.movies.push({ movie: newMovie, posterPath: newMoviePosterPath })
  }

  getMoviesShownLength = () =>{
    return this.movies.length;
  }

  getMovies = () => {
    return this.movies;
  }
}