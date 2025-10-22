import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie, MovieEntity } from '../../service/movie';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-form.html',
})
export class MovieForm {
  @Input() filmeEditado?: MovieEntity;
  
  ngOnInit() {
    if (this.filmeEditado) {
      this.filme = { ...this.filmeEditado };
    }
  }

  movieService: Movie = inject(Movie);

  filme: MovieEntity = {
    id: 0,
    nome: '',
    review: '',
    nota: 0,
    dataAssistida: new Date(),
    favorito: false,
    foto: '',
    poster: '',
    temas: '',
    ano: new Date().getFullYear(),
  };

  previewFoto: string | null = null;
  previewPoster: string | null = null;

  salvarFilme() {
    if (!this.filme.nome.trim() || !this.filme.foto.trim()) {
      alert('Por favor, preencha pelo menos o nome e a foto do filme.');
      return;
    }

    const todos = this.movieService.listarTodos();
    const novoId = todos.length ? Math.max(...todos.map(m => m.id)) + 1 : 1;
    this.filme.id = novoId;

    this.movieService.adicionar(this.filme);

    this.resetarFormulario();

    alert('Filme salvo com sucesso!');
  }

  private resetarFormulario() {
    this.filme = {
      id: 0,
      nome: '',
      review: '',
      nota: 0,
      dataAssistida: new Date(),
      favorito: false,
      foto: '',
      poster: '',
      temas: '',
      ano: new Date().getFullYear(),
    };
    this.previewFoto = null;
    this.previewPoster = null;
  }
}
