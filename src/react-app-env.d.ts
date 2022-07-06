/// <reference types="react-scripts" />
declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_TMDB_TOKEN: string;
    REACT_APP_TMDB_BASE_URL: string;
    REACT_APP_TMDB_IMAGE_BASE_URL: string;
  }
}