import styled from 'styled-components';

export const Content = () => {
    return (
        <Container>
            
            <Image/>

            <MovieInfoContainer>
                <MovieTitle>Título do filme</MovieTitle>
                <MovieDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptates nisi, eaque nemo dolor quis assumenda libero iusto reiciendis quod, tenetur fugiat illo quam minima totam fugit ut. Eius, porro. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptatem dolores incidunt, sint cum officia molestias aut asperiores mollitia unde quam praesentium, quisquam tempora, sit eum libero autem omnis? Exercitationem.
                </MovieDescription>
            </MovieInfoContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 40rem;
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

const Image = styled.div`
    width: 10rem;
    height: 12rem;
    margin: 1rem 0 0 1rem;
    border-radius: 5px;
    background-color: white;
`

const MovieInfoContainer = styled.div`
    width: 28.5rem;
    height: 18rem;
    margin: .7rem 0 0 1rem;
`

const MovieTitle = styled.p`
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    color: #FFFCF9;
    margin: 0;
`

const MovieDescription = styled.p`
    font-weight: 300;
    font-style: normal;
    font-size: 13px;
    text-align: justify;
    color: #FFFCF9;
    padding: .5rem 1rem 0 0;
    margin: 0;
`