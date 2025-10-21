import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie, MovieEntity } from '../../service/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  imports: [FormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieForm {
  novoFilme: MovieEntity = {
    id: 0,
    nome: '',
    review: '',
    nota: 0,
    dataAssistida: new Date(),
    favorito: false,
    foto: ''
  };

  editando = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: Movie
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      const filme = this.movieService.buscarPorId(Number(id));
      if (filme) {
        this.novoFilme = { ...filme };
      }
    }
  }

  onSubmit() {
    if (this.editando) {
      this.movieService.atualizar(this.novoFilme);
    } else {
      this.movieService.adicionar(this.novoFilme);
    }

    this.router.navigate(['/filmes']);
  }
}
