import styled from "styled-components";
import { ProviderInfo } from "../../interfaces/Provider";
import config from '../../config';

interface ProvidersProps {
  movieProviders: ProviderInfo[];
}

export const Providers = ({ movieProviders }: ProvidersProps) => {
  const imageBaseUrl = config.TMDB_IMAGE_BASE_URL;

  return (
    movieProviders.length === 0 ?
    <NoProviderContainer>
      <p>Stream indisponível no Brasil</p>
    </NoProviderContainer> :
    <ProviderContainer>
      {movieProviders.map((provider, index) => {
        return (
          <ProviderImage
            key={index}
            src={`${imageBaseUrl}${provider.logoPath}`}
            title={provider.name}
          />
        )
      })}
    </ProviderContainer>
  )
}

const NoProviderContainer = styled.div`
  height: 3.3rem;
  width: 16rem;
  background-color: hsla(0, 100%, 100%, 0.16);
  border-radius: .5rem;
  margin-top: .4rem;
  display: inline-flex;
  align-items : center;
  justify-content : center;

  p {
    color: white;
    font-weight: 500;
    font-size: 14px;
  }
`

const ProviderContainer = styled.div`
  display: inline-flex;
  padding: .5rem;
  margin-top: .4rem;
  background-color: hsla(0, 100%, 100%, 0.16);
  border-radius: .5rem;
`

const ProviderImage = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: .5rem;
  
  &:not(:first-child) {
    margin-left: .4rem;
  }
`