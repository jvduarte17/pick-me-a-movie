import { ReactComponent as Shuffle } from '../../assets/shuffle.svg'
import styled from 'styled-components';

export const Footer = () => {
    return (
        <Container>
            <Button>
                <Icon />
                <ButtonText>Encontrar filme</ButtonText>                
            </Button>
            <FooterText>
            Clique em "Encontrar filme" que traremos informações <br/>
            de algum filme para você assistir hoje.
            </FooterText>
        </Container>
    )
}

const Container = styled.div`
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

const FooterText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #FFFCF9;
`