import { MovieShort } from '.';

export interface MovieDto {
  page: number;
  results: Array<MovieShort>;
  total_pages: number;
  total_results: number;
}
