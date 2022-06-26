import { GenresDto } from './../../pages/movies/movie/models/genresDto.model';
import { Genre } from './../../pages/movies/movie/models/genre.model';
import { Movie } from './../../pages/movies/movie/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { routes } from '../routing/routes';
import { MovieDto } from 'src/app/pages/movies/movie/models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies(pageNumber: number): Observable<MovieDto> {
    const url = routes.popularMovies.replace('pageNumber', `${pageNumber}`);
    return this.http.get<MovieDto>(url);
  }

  searchMovies(queryText: string, pageNumber: number): Observable<MovieDto> {
    const url = routes.searchMovies
      .replace('queryText', queryText)
      .replace('pageNumber', `${pageNumber}`);
    return this.http.get<MovieDto>(url);
  }

  findMovie(movieId: number): Observable<Movie> {
    const url = routes.findMovie.replace('movieId', `${movieId}`);
    return this.http.get<Movie>(url);
  }

  getGenres(): Observable<GenresDto> {
    const url = routes.genres;
    return this.http.get<GenresDto>(url);
  }
}
