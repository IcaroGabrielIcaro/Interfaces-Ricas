import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, MovieEntity } from '../../service/movie';
import { MovieForm } from '../movie-form/movie-form';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, MovieForm, ButtonModule],
  templateUrl: './movie-detail.html',
})
export class MovieDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private movieService = inject(Movie);

  movie: MovieEntity | undefined;
  showUpdateForm = false;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.listarTodos().find((m) => m.id === id);
  }

  abrirAtualizacao() {
    this.showUpdateForm = true;
  }

  fecharAtualizacao() {
    this.showUpdateForm = false;
  }

  deletarFilme() {
    if (confirm('Tem certeza que deseja deletar este filme?')) {
      if (this.movie) {
        this.movieService.remover(this.movie.id);
        this.router.navigate(['/']);
      }
    }
  }
}
