import { Movie } from './models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  imagePrefix = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  noImage = '../../../../assets/images/no_image.jpg';

  constructor() {}

  ngOnInit(): void {}
}
