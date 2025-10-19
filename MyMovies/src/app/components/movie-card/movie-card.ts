import { Component, inject} from '@angular/core';
import { Movie, MovieEntity } from '../../service/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})


export class MovieCard {
  movieService: Movie = inject(Movie);
  movies: MovieEntity[] = this.movieService.listarTodos();

  toggleFavorito(movie: MovieEntity) {
    movie.favorito = !movie.favorito;
  }

  deletarFilme(id: number) {
    const confirmacao = confirm('Tem certeza que deseja excluir este filme?');
    if (confirmacao) {
      this.movieService.remover(id);
      this.movies = this.movieService.listarTodos();
    }
  }

}