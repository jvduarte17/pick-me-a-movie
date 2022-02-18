import { ReactComponent as Shuffle } from '../../assets/shuffle.svg'
import styled from 'styled-components';

export const Footer = () => {
    return (
        <Container>
            <Button>
                <Icon />
                <ButtonText>Encontrar filme</ButtonText>                
            </Button>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 10rem;
    justify-content: center;
    display: flex;
`

const Button = styled.div`
    cursor: pointer;
    display: flex;
    background-color: white;
    border-radius: 5px;
    justify-content: center;
    width: 180.98px;
`

const Icon = styled(Shuffle)`
    width: 2rem;
    height: 2rem;
    justify-content: center;
`

const ButtonText = styled.p`
    color: black;
    font-size: 15px;
    font-weight: 600;
`