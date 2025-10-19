import { Routes } from '@angular/router';
import { MovieCard } from './components/movie-card/movie-card';
import { MovieForm } from './components/movie-form/movie-form';

export const routes: Routes = [
    { path: 'filmes', component: MovieCard},
    { path: 'filmes/novo', component: MovieForm},
    { path: 'filmes/editar/:id', component: MovieForm},
];
