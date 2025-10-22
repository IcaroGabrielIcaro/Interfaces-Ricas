import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, MovieEntity } from '../../service/movie';
import { HomeMovieList } from '../home-movie-list/home-movie-list';
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeMovieList, RouterLink, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  movieService: Movie = inject(Movie);
  movies: MovieEntity[] = [];
  slicedMovies: MovieEntity[] = [];
  mainBannerUrl: string = '';
  selectedMovieIndex: number | null = null;
  currentMovie: MovieEntity | null = null;

  ngOnInit() {
    this.movies = this.movieService.listarTodos().sort((a, b) => a.id - b.id);

    this.slicedMovies = this.movies.slice(0, 9);

    const defaultMovie = this.movies.find(m => m.id === 1) || this.slicedMovies[0];
    if (defaultMovie) {
      this.mainBannerUrl = defaultMovie.foto;
      this.currentMovie = defaultMovie;
      this.selectedMovieIndex = this.slicedMovies.findIndex(m => m.id === defaultMovie.id);
    }
  }

  trocarBanner(foto: string, index: number) {
    this.mainBannerUrl = foto;
    this.selectedMovieIndex = index;
    this.currentMovie = this.slicedMovies[index];
  }

  get movieTitle(): string {
    if (!this.currentMovie?.nome) return 'Título do Filme';
    return this.currentMovie.nome.length > 23
      ? this.currentMovie.nome.slice(0, 23) + '...'
      : this.currentMovie.nome;
  }
}
