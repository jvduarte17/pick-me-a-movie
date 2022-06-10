import styled from 'styled-components';

export const EmptyContent = () => {
  return (
    <Container>
      <Image/>
      <EmptyInfoContainer>
        <EmptyTitle/>
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
  width: 12rem;
  margin: .5rem;
  border-radius: 10px;
  
  background-color: transparent;
  box-shadow:
    0px 24px 38px 3px hsla(0,0%,0%,0.14),
    0px 9px 46px 8px hsla(0,0%,0%,0.12),
    0px 11px 15px -7px hsla(0,0%,0%,0.2);
`

const EmptyInfoContainer = styled.div`
  width: 31.5rem;
`

const EmptyTitle = styled.div`
  margin: 8px;
  height: 2rem;
  border-radius: 5px;
  background-color: transparent;
  box-shadow:
    0px 24px 38px 3px hsla(0,0%,0%,0.14),
    0px 9px 46px 8px hsla(0,0%,0%,0.12),
    0px 11px 15px -7px hsla(0,0%,0%,0.2);
`

const EmptyDescription = styled.div`
  margin: 8px;
  height: 12rem;
  margin-top: 1rem;
  border-radius: 10px;
  background-color: transparent;
  box-shadow:
    0px 24px 38px 3px hsla(0,0%,0%,0.14),
    0px 9px 46px 8px hsla(0,0%,0%,0.12),
    0px 11px 15px -7px hsla(0,0%,0%,0.2);
`