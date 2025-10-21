import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie, MovieEntity } from '../../service/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  movieService: Movie = inject(Movie);
  movies: MovieEntity[] = [];
  mainBannerUrl: string = '';

  ngOnInit() {
    this.movies = this.movieService.listarTodos().slice(0, 9);
    
    const defaultMovie = this.movies.find(m => m.id === 1);
    if (defaultMovie) {
      this.mainBannerUrl = defaultMovie.foto;
    }
  }

  // Troca a imagem do banner grande
  trocarBanner(foto: string) {
    this.mainBannerUrl = foto;
  }
}
