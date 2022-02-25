import { genres } from '../utils/genres'

const API_KEY = 'null'
const API_BASE = 'https://api.themoviedb.org/3'

export const getRandomMovie = async (genreIndex: number) => {
    const genreId = genres[genreIndex].id
    const info = await fetchItem(`/discover/movie?with_genre=${genreId}&api_key=${API_KEY}&language=pt-BR`);

    const randomMovieIndex = Math.floor(Math.random() * info.results.length + 1)

    return info.results[randomMovieIndex];
}

const fetchItem = async (endpoint: string) => {
    const request = await fetch(`${API_BASE}${endpoint}`);
    const json = await request.json();

    return json;
}
