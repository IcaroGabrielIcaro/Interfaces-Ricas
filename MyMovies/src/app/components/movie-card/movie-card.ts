import { Component} from '@angular/core';

interface Movie {
  id: number;
  nome: string;
  review: string;
  nota: number;
  dataAssistida: Date;
  favorito: boolean;
}


@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})


export class MovieCard {
  movies: Movie[] = [
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

  toggleFavorito(movie: Movie) {
    movie.favorito = !movie.favorito;
  }
}