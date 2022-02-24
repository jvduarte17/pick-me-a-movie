const API_KEY = 'null'
const API_BASE = 'https://api.themoviedb.org/3'

export const getMovieInfo = async (genreId: number) => {
    let info = await fetchItem(`/discover/movie?with_genre=${genreId}&api_key=${API_KEY}`)

    return info
}

const fetchItem = async (endpoint: string) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()

    return json
}

