import { useState } from 'react';
import styled from 'styled-components';
import { Movie } from '../../interfaces/Movie';
import { getGenreNameById } from '../../utils/genres';

interface ContentProps {
  movie: Movie,
  moviePosterPath: string
}

interface ImageProps {
  imageVisibility?: boolean;
}

export const Content = ({
  movie,
  moviePosterPath
}: ContentProps) => {
  const [imageVisibility, setImageVisibility] = useState(true);
  
  const genreName = getGenreNameById(movie.genre_ids[0]);
  const releaseDate = movie.release_date.split('-')[0];
  const voteAverage = movie.vote_average.toString();
  const moviePopularity = movie.popularity.toString();

  const isEmptyString = (text: string) => {
    return text.length === 0;
  }
  
  const movieInfoAttributes = [
    { 
      attr: 'GÊNERO',
      value: !isEmptyString(genreName) ? genreName : 'Não informado'
    },
    { 
      attr: 'ANO',
      value: !isEmptyString(releaseDate) ? releaseDate : 'Não informado'
    },
    {
      attr: 'MÉDIA (TMDB)',
      value: !isEmptyString(voteAverage) ? voteAverage : 'Não informado'
    },
    {
      attr: 'POPULARIDADE',
      value: !isEmptyString(moviePopularity) ? moviePopularity : 'Não informado'
    }
  ]

  return (
    <Container>
      <MovieImageContainer
        onMouseEnter={() => setImageVisibility(false)}
        onMouseLeave={() => setImageVisibility(true)}
      >
        <MovieImage src={ moviePosterPath }  />
        <GeneralMovieInfo imageVisibility={ imageVisibility }>
          {
            movieInfoAttributes.map((movieAttr, key) => {
              return (
                <InnerGeneralMovieInfo key={key}>
                  <GeneralMovieInfoTitle>{movieAttr.attr}</GeneralMovieInfoTitle>
                  <GeneralMovieInfoContent>{movieAttr.value}</GeneralMovieInfoContent>
                </InnerGeneralMovieInfo>
              )
            })
          }
        </GeneralMovieInfo>
      </MovieImageContainer>

      <MovieContent>
        <MovieTitle>{ movie.title }</MovieTitle>
        <MovieDescription>
          { movie.overview.length !== 0 ? 
            movie.overview :
            'Descrição não informada \u{1F614}'
          }
          </MovieDescription>
      </MovieContent>
    </Container>
  )
}

const Container = styled.div`
  width: 45rem;
  height: 19rem;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;

  background-color: hsla(0, 100%, 100%, 0.16);
  box-shadow:
    0px 24px 38px 3px hsla(0,0%,0%,0.14), 
    0px 9px 46px 8px hsla(0,0%,0%,0.12), 
    0px 11px 15px -7px hsla(0,0%,0%,0.2);

  @media(max-width: 740px) {
    width: 35rem;
  }

  @media(max-width: 700px) {
    width: 25rem;
    height: 20rem;
  }

  @media(max-width: 410px) {
    width: 18rem;
  }
`

const MovieImageContainer = styled.div`
  display: flexbox;

  @media(max-width: 740px) {
    display: none;
  }
`

const MovieImage = styled.img`
  width: 13.5rem;
  height: 18rem;
  margin: .5rem;
  border-radius: 10px;
  position: absolute;
`

const GeneralMovieInfo = styled.div<ImageProps>`
  width: 13.5rem;
  margin: .5rem;
  border-radius: 10px;
  position: relative;
  transition: all 350ms ease-out;
  opacity: ${(p) => p.imageVisibility ? 0 : 1 };
  color: #FFFFFF;
  text-align: center;
  display: flex;
  flex-direction: column;

  background: rgb(19,38,89);
  background: linear-gradient(0deg, rgba(19,38,89,0.8664508039543942) 0%, rgba(193,42,35,1) 100%);
`

const MovieContent = styled.div`
  width: 31.5rem;
  margin-right: .5rem;
`

const MovieTitle = styled.p`
  font-weight: bold;
  font-style: normal;
  font-size: 17px;
  color: #FFFCF9;
  margin: 8px;
  text-align: left;
`

const MovieDescription = styled.p`
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  text-align: justify;
  color: #FFFCF9;
  margin: 8px;
  overflow-y: auto;
  height: 15.8rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: 700px) {
    height: 16.4rem;
  }
`

const InnerGeneralMovieInfo = styled.div`
  padding: .7rem;
  cursor: default;
`

const GeneralMovieInfoTitle = styled.p`
  font-weight: 700;
  margin: 0;
`

const GeneralMovieInfoContent = styled.p`
  font-weight: 400;
  margin: 1px 0 0;
`