export const genres = [
  {
    id: 28,
    name: "Action",
    portugueseName: "Ação"
  },
  {
    id: 12,
    name: "Adventure",
    portugueseName: "Aventura"
  },
  {
    id: 16,
    name: "Animation",
    portugueseName: "Animação"
  },
  {
    id: 35,
    name: "Comedy",
    portugueseName: "Comédia"
  },
  {
    id: 80,
    name: "Crime",
    portugueseName: "Crime"
  },
  {
    id: 99,
    name: "Documentary",
    portugueseName: "Documentário"
  },
  {
    id: 18,
    name: "Drama",
    portugueseName: "Drama"
  },
  {
    id: 10751,
    name: "Family",
    portugueseName: "Família"
  },
  {
    id: 14,
    name: "Fantasy",
    portugueseName: "Fantasia"
  },
  {
    id: 36,
    name: "History",
    portugueseName: "História"
  },
  {
    id: 27,
    name: "Horror",
    portugueseName: "Terror"
  },
  {
    id: 10402,
    name: "Music",
    portugueseName: "Musical"
  },
  {
    id: 9648,
    name: "Mystery",
    portugueseName: "Mistério"
  },
  {
    id: 10749,
    name: "Romance",
    portugueseName: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction",
    portugueseName: "Sci-Fi"
  },
  {
    id: 10770,
    name: "TV Movie",
    portugueseName: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller",
    portugueseName: "Suspense"
  },
  {
    id: 10752,
    name: "War",
    portugueseName: "Guerra"
  },
  {
    id: 37,
    name: "Western",
    portugueseName: "Western"
  },
];

export const getGenreNameById = (genreId: number) => {
  let targetGenre = '';

  genres.forEach(genre => {
    if (genre.id === genreId)
      targetGenre = genre.portugueseName;
  })

  return targetGenre;
}