import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { MoviesService } from 'src/app/shared/services';
import { Movie } from '../movie/models';

@Component({
  selector: 'app-about-movie',
  templateUrl: './about-movie.component.html',
  styleUrls: ['./about-movie.component.scss'],
})
export class AboutMovieComponent implements OnInit {
  movie: Observable<Movie>;
  destroys = new Subject();

  constructor(
    private moviesService: MoviesService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroys)).subscribe((i: Params) => {
      const id = i['id'];
      this.foo(id);
    });
  }

  foo(id: any) {
    this.movie = this.moviesService.findMovie(id);
  }

  ngOnDestroy(): void {
    this.destroys.next(true);
    this.destroys.complete();
  }
}
