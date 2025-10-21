import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, MovieEntity } from '../../service/movie';
import { HomeMovieList } from '../home-movie-list/home-movie-list';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HomeMovieList],
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
    this.movies = this.movieService.listarTodos();
    this.slicedMovies = this.movieService.listarTodos().slice(0,9);

    const defaultMovie = this.slicedMovies.find(m => m.id === 1);
    if (defaultMovie) {
      this.mainBannerUrl = defaultMovie.foto;
      this.currentMovie = defaultMovie;
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
