import { ReactComponent as Shuffle } from '../../assets/shuffle.svg'
import styled from 'styled-components';

export const Header = () => {
  return (
    <Container>
      <Icon />
      <Title>Não sabe o que assistir?</Title>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`

const Icon = styled(Shuffle)`
  width: 5rem;
  height: 5rem;
`

const Title = styled.p`
  margin: 0;
  color: #FFFCF9;
  font-size: 33px;
  font-weight: 700;
  font-style: normal;

  @media(max-width: 410px) {
    font-size: 20px;
  }
`
