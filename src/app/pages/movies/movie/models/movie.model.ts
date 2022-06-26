import {
  Collection,
  Genre,
  ProductionCompany,
  ProductionCountry,
  SpokenLanguage,
} from '.';

export interface Movie {
  id: number;
  title: string;
  original_language: string;
  adult: boolean;
  budget: number;
  backdrop_path: string;
  overview: string;
  genres: Array<Genre>;
  vote_average: number;
  vote_count: number;
  release_date: string;
  popularity: number;
  revenue: number;
  belongs_to_collection: Collection;
  homepage: string;
  imdb_id: string;
  original_title: string;
  poster_path: string;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  runtime: number;
  spoken_languages: Array<SpokenLanguage>;
  status: string;
  tagline: string;
  video: boolean;
}
