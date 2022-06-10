import styled from 'styled-components';
import { Movie } from '../../interfaces/Movie';

interface ContentProps {
  movie: Movie,
  moviePosterPath: string
}

export const Content = ({
  movie,
  moviePosterPath
}: ContentProps) => {

  return (
    <Container>
      <Image src={ moviePosterPath } />

      <MovieInfoContainer>
        <MovieTitle>{ movie.title }</MovieTitle>
        <MovieDescription>
          { movie.overview }
        </MovieDescription>
      </MovieInfoContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 45rem;
  height: 16rem;
  border-radius: 10px;
  display: flex;
  margin: 0 auto;

  background-color: hsla(0, 100%, 100%, 0.16);
  box-shadow:
    0px 24px 38px 3px hsla(0,0%,0%,0.14), 
    0px 9px 46px 8px hsla(0,0%,0%,0.12), 
    0px 11px 15px -7px hsla(0,0%,0%,0.2);
`

const Image = styled.img`
  width: 12rem;
  margin: .5rem;
  border-radius: 10px;
  background-color: white;
`

const MovieInfoContainer = styled.div`
  width: 31.5rem;
`

const MovieTitle = styled.p`
  font-weight: bold;
  font-style: normal;
  font-size: 17px;
  color: #FFFCF9;
  margin: 8px;
`

const MovieDescription = styled.p`
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  text-align: justify;
  color: #FFFCF9;
  margin: 8px;
  overflow-y: auto;
  height: 12.8rem;

  &::-webkit-scrollbar {
    display: none;
  }
`