import { Routes } from '@angular/router';
import { MovieCard } from './components/movie-card/movie-card';
import { Home } from './components/home/home';
import { MovieDetail } from './components/movie-detail/movie-detail';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'filmes', component: MovieCard},
    { path: 'filmes/:id', component: MovieDetail},
];
