import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulePath } from './shared/routing/module-path';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ModulePath.Movies,
  },
  {
    path: ModulePath.Movies,
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
