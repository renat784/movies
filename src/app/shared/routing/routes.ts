import { api_key, language, prefix } from '.';

export const routes = {
  popularMovies: `${prefix}/movie/popular?api_key=${api_key}&language=${language}&page=pageNumber`, // NOTE: change pageNumber
  searchMovies: `${prefix}/search/movie?api_key=${api_key}&language=${language}&query=queryText&page=pageNumber&include_adult=false`, // NOTE: change queryText and pageNumber
  findMovie: `${prefix}/movie/movieId?api_key=${api_key}&language=${language}`, // NOTE: change movieId
  genres: `${prefix}/genre/movie/list?api_key=${api_key}&language=${language}`,
};
