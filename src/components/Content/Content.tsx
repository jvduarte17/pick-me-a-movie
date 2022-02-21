import styled from 'styled-components';

export const Content = () => {
    return (
        <Container>
            
            <Image/>

            <MovieInfoContainer>
                <MovieTitle>Uma Noite no Museu 2</MovieTitle>
                <MovieDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptates nisi, eaque nemo dolor quis assumenda libero iusto reiciendis quod, tenetur fugiat illo quam minima totam fugit ut. Eius, porro. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptatem dolores incidunt, sint cum officia molestias aut asperiores mollitia unde quam praesentium, quisquam tempora, sit eum libero autem omnis? Exercitationem.
                </MovieDescription>
            </MovieInfoContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 40rem;
    height: 19rem;
    border: 1px solid white;
    display: flex;
    margin: 1rem auto;
`

const Image = styled.div`
    width: 10rem;
    height: 12rem;
    margin: .5rem 0 0 .5rem;
    /* border: 1px solid white; */
    border-radius: 5px;
    background-color: white;
`

const MovieInfoContainer = styled.div`
    width: 28.5rem;
    height: 18rem;
    margin: .3rem 0 0 1rem;
    /* border: 1px solid white; */
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