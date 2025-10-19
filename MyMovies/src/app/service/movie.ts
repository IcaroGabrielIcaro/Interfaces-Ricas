import { Injectable } from '@angular/core';

export interface MovieEntity {
  id: number;
  nome: string;
  review: string;
  nota: number;
  dataAssistida: Date;
  favorito: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Movie {
  movies: MovieEntity[] = [
    {
      id: 1,
      nome: 'Interstellar',
      review: 'Uma jornada emocionante pelo espaço e tempo.',
      nota: 9.5,
      dataAssistida: new Date('2024-05-10'),
      favorito: true
    },
    {
      id: 2,
      nome: 'Oppenheimer',
      review: 'Um retrato intenso da mente por trás da bomba atômica.',
      nota: 9,
      dataAssistida: new Date('2024-08-02'),
      favorito: false
    },
    {
      id: 3,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false
    }
  ];


  listarTodos(): MovieEntity[] {
    return this.movies;
  }

  buscarPorId(id: number): MovieEntity | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  adicionar(movie: MovieEntity): void {
    movie.id= this.movies.length ? Math.max(...this.movies.map(movie => movie.id)) + 1 : 1;
    this.movies.push(movie);
  }

  atualizar(movieUpdated: MovieEntity): void {
    const index: number = this.movies.findIndex(movie => movie.id === movieUpdated.id);
    if (index !== -1) {
      this.movies[index] = { ...movieUpdated };
    }
  }

  remover(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
