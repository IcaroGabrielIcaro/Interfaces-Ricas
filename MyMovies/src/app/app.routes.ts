import { Routes } from '@angular/router';
import { MovieCard } from './components/movie-card/movie-card';
import { MovieForm } from './components/movie-form/movie-form';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'filmes', component: MovieCard},
    { path: 'filmes/novo', component: MovieForm},
    { path: 'filmes/editar/:id', component: MovieForm},
];
