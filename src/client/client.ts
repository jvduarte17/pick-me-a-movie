import { Movie } from '../interfaces/Movie'

interface InfoProps {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}

const API_KEY = 'null';
const API_BASE = 'https://api.themoviedb.org/3';
const moviesArray: Movie[] = [];

export const loadMovies = async (): Promise<void> => {
  const randomPages: number[] = []
  
  for (let page = 0; page < 1; page++) {
    let newRandomPage = Math.floor(Math.random() * 100) + 1;

    // eslint-disable-next-line
    while(randomPages.some(page => page === newRandomPage)) {
      newRandomPage = Math.floor(Math.random() * 100) + 1;
    }

    randomPages.push(newRandomPage)
  }

  randomPages.forEach(async (page) => {
    const fetchedMovies: InfoProps = await fetchItem(`/movie/popular?api_key=${API_KEY}&page=${page}&language=pt-BR`);
    
    fetchedMovies.results.forEach((movie) => {
      moviesArray.push(movie)
    })
  })
}

export const getRandomMovie = (): Movie => {
  const randomMovieIndex = Math.floor(Math.random() * moviesArray.length)
  return moviesArray[randomMovieIndex];
}

export const getMoviesArrayLength = () => {
  return moviesArray.length;
}

const fetchItem = async (endpoint: string): Promise<InfoProps> => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const json = await request.json();

  return json;
}
