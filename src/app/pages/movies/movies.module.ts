import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { PreviewMovieComponent } from './preview-movie/preview-movie.component';
import { AboutMovieComponent } from './about-movie/about-movie.component';
import { MatModule, SharedModule } from 'src/app/shared/modules/shared';

@NgModule({
  declarations: [
    MovieComponent,
    MoviesListComponent,
    PreviewMovieComponent,
    AboutMovieComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, SharedModule, MatModule],
})
export class MoviesModule {}
