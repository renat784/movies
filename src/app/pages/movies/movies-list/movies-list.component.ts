import { MovieShort } from './../movie/models/movie-short.model';
import { Genre } from './../movie/models/genre.model';
import { Component, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { numberToString } from 'src/app/shared/helpers';
import { MoviesService } from 'src/app/shared/services';
import { GenresDto, MovieDto } from '../movie/models';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  MAX_RESULTS_LENGTH = 10000; // 500 pages or less - server restrictions. 500 pages * 20 results per page = 10000 results
  movies: Observable<Array<MovieShort>>;
  total_results = 0;
  searchText = '';
  genresList: Array<Genre> = [];
  showBackToMovies = false;
  destroys = new Subject();

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getGenres()
      .pipe(takeUntil(this.destroys))
      .subscribe((i: GenresDto) => {
        this.genresList = i.genres;
        this.getPopularMovies();
      });
  }

  getPopularMovies(pageNumber = 1) {
    this.movies = this.moviesService.getPopularMovies(pageNumber).pipe(
      takeUntil(this.destroys),
      map((i: MovieDto) => {
        this.total_results = i.total_results;
        return i.results;
      })
    );
  }

  searchMovie(pageNumber = 1) {
    this.movies = this.moviesService
      .searchMovies(this.searchText, pageNumber)
      .pipe(
        takeUntil(this.destroys),
        map((i: MovieDto) => {
          this.total_results = i.total_results;
          return i.results;
        })
      );

    this.showBackToMovies = true;
  }

  backToMovies() {
    this.getPopularMovies(1);
    this.showBackToMovies = false;
    this.searchText = '';
  }

  getGenresName(genre_ids: Array<number>): Array<string> {
    return numberToString(genre_ids, this.genresList);
  }

  pageChanged(event: any) {
    const pageNumber = event.pageIndex + 1;
    this.searchText
      ? this.searchMovie(pageNumber)
      : this.getPopularMovies(pageNumber);
  }

  ngOnDestroy(): void {
    this.destroys.next(true);
    this.destroys.complete();
  }
}
