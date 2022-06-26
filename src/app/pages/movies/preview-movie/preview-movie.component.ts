import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-movie',
  templateUrl: './preview-movie.component.html',
  styleUrls: ['./preview-movie.component.scss'],
})
export class PreviewMovieComponent implements OnInit {
  @Input() id: number;
  @Input() title = '';
  @Input() genres: Array<string> = [];
  @Input() release_date = '';
  @Input() backdrop_path = '';
  imagePrefix = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  noImage = '../../../../assets/images/no_image.jpg';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    const url = `movies/movie/${this.id}`;
    this.router.navigate([url]);
  }
}
