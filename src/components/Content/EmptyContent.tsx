import styled from 'styled-components';

export const Content = () => {
    return (
        <Container>
            
            <Image/>

            <EmptyInfoContainer>
                <EmptyTitle/>
                <EmptyDescription/>
                <EmptyDescription/>
                <EmptyDescription/>
                <EmptyDescription/>
            </EmptyInfoContainer>

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
    
    background-color: transparent;
    box-shadow:
	    0px 24px 38px 3px hsla(0,0%,0%,0.14),
	    0px 9px 46px 8px hsla(0,0%,0%,0.12),
	    0px 11px 15px -7px hsla(0,0%,0%,0.2);
`

const EmptyInfoContainer = styled.div`
    width: 28.5rem;
    height: 18rem;
    margin: .7rem 0 0 1rem;
`

const EmptyTitle = styled.div`
    width: 27rem;
    height: 2rem;
    margin-top: .3rem;
    border-radius: 5px;
    background-color: transparent;
    box-shadow:
	    0px 24px 38px 3px hsla(0,0%,0%,0.14),
	    0px 9px 46px 8px hsla(0,0%,0%,0.12),
	    0px 11px 15px -7px hsla(0,0%,0%,0.2);
`

const EmptyDescription = styled.div`
    width: 27rem;
    height: 1.5rem;
    margin-top: 1rem;
    border-radius: 5px;
    background-color: transparent;
    box-shadow:
	    0px 24px 38px 3px hsla(0,0%,0%,0.14),
	    0px 9px 46px 8px hsla(0,0%,0%,0.12),
	    0px 11px 15px -7px hsla(0,0%,0%,0.2);
`