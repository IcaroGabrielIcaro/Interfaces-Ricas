import { Injectable } from '@angular/core';

export interface MovieEntity {
  id: number;
  nome: string;
  review: string;
  nota: number;
  dataAssistida: Date;
  favorito: boolean;
  foto: string;
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
      favorito: true,
      foto: 'https://www.slashfilm.com/img/gallery/possession-ending-explained-we-are-makers-of-our-own-evil/l-intro-1673110453.jpg'
    },
    {
      id: 2,
      nome: 'Oppenheimer',
      review: 'Um retrato intenso da mente por trás da bomba atômica.',
      nota: 9,
      dataAssistida: new Date('2024-08-02'),
      favorito: false,
      foto: 'https://pics.filmaffinity.com/El_Sanatorio_de_la_Clepsidra-157761817-large.jpg'
    },
    {
      id: 3,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://a.ltrbxd.com/resized/sm/upload/52/t7/e1/jo/persona-1200-1200-675-675-crop-000000.jpg?v=bcb2f5cc53'
    },
    {
      id: 4,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse4.mm.bing.net/th/id/OIP.iflmuQa8WT4y-SIwdQ-GJwHaEJ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 5,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse4.mm.bing.net/th/id/OIP.CdxNWGCcQA3_PQ_F_N-v7gHaD1?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 6,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse1.mm.bing.net/th/id/OIP.acokkB1KRz2i6AzdjFZS-wHaDO?cb=12&w=1600&h=698&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 7,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse3.mm.bing.net/th/id/OIP.QiGk1lipKGPM6UCAtCPOVQHaEc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 8,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse1.mm.bing.net/th/id/OIP.O5mMYIxfMbHHnMbAW6up6QHaE6?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 9,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse2.mm.bing.net/th/id/OIP.hsGRiSS_5gPPZybg6PaAvwHaD3?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 10,
      nome: 'Duna: Parte Dois',
      review: 'Visual deslumbrante e narrativa épica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://www.rollingstone.de/wp-content/uploads/2017/03/16/17/suspiria-szene-05.jpg'
    },
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
