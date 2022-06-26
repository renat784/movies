import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMovieComponent } from './about-movie/about-movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
  },
  {
    path: 'movie/:id',
    component: AboutMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
