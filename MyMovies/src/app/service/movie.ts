import { Injectable } from '@angular/core';

export interface MovieEntity {
  id: number;
  nome: string;
  review: string;
  nota: number;
  dataAssistida: Date;
  favorito: boolean;
  foto: string;
  temas: string;
  ano: number;
  poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class Movie {
  movies: MovieEntity[] = [
    {
      id: 1,
      nome: 'Possession',
      review: 'Um retrato de um grande surto coletivo em meio a guerra fria.',
      nota: 9.5,
      dataAssistida: new Date('2024-05-10'),
      favorito: true,
      foto: 'https://www.slashfilm.com/img/gallery/possession-ending-explained-we-are-makers-of-our-own-evil/l-intro-1673110453.jpg',
      temas: 'Loucura, Humanidade',
      ano: 1981,
      poster: 'https://a.ltrbxd.com/resized/sm/upload/8c/pk/z8/4v/aIjO3kraeaD4MDBSef3rTO2vIuZ-0-2000-0-3000-crop.jpg?v=cb9f332628',
    },
    {
      id: 2,
      nome: 'Sanatório da Clepsidra',
      review: 'Representação de como funciona a memória e o ato de constar histórias.',
      nota: 9,
      dataAssistida: new Date('2024-08-02'),
      favorito: false,
      foto: 'https://pics.filmaffinity.com/El_Sanatorio_de_la_Clepsidra-157761817-large.jpg',
      temas: 'Psicodélico, Memória',
      ano: 1973,
      poster: 'https://s.ltrbxd.com/static/img/empty-poster-1000-D9cprv0m.png',
    },
    {
      id: 3,
      nome: 'Persona',
      review: 'Uma análise de como funciona as máscaras sociais.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://a.ltrbxd.com/resized/sm/upload/52/t7/e1/jo/persona-1200-1200-675-675-crop-000000.jpg?v=bcb2f5cc53',
      temas: 'Humanidade, Sociedade, Filosofia',
      ano: 1966,
      poster: 'https://a.ltrbxd.com/resized/film-poster/5/1/3/5/5/51355-persona-0-2000-0-3000-crop.jpg?v=aca1e0fd3d',
    },
    {
      id: 4,
      nome: 'Pixote',
      review: 'Retrato profundo de crianças marginalizadas e invisíveis para o resto do mundo.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse4.mm.bing.net/th/id/OIP.iflmuQa8WT4y-SIwdQ-GJwHaEJ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
      temas: 'Crime',
      ano: 1981,
      poster: 'https://a.ltrbxd.com/resized/film-poster/2/2/9/1/8/22918-pixote-0-2000-0-3000-crop.jpg?v=c69d3e271c',
    },
    {
      id: 5,
      nome: 'Hausu',
      review: 'Forma lúdica de representar a bomba atômica.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse4.mm.bing.net/th/id/OIP.CdxNWGCcQA3_PQ_F_N-v7gHaD1?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
      temas: 'Comédia, Psicodélico, Terror, Horror',
      ano: 1977,
      poster: 'https://a.ltrbxd.com/resized/sm/upload/7f/z3/ho/6j/6vblWscFAbIm9V5CwHC7IImgAq9-0-2000-0-3000-crop.jpg?v=b505ff45b0',
    },
    {
      id: 6,
      nome: 'Enter The Void',
      review: 'Representação de como seria o pós vida aos olhos do hinduísmo.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse1.mm.bing.net/th/id/OIP.acokkB1KRz2i6AzdjFZS-wHaDO?cb=12&w=1600&h=698&rs=1&pid=ImgDetMain&o=7&rm=3',
      temas: 'Psicodélico, Terror, Drama',
      ano: 2009,
      poster: 'https://a.ltrbxd.com/resized/film-poster/2/9/0/4/1/29041-enter-the-void-0-2000-0-3000-crop.jpg?v=5a7c2754fb',
    },
    {
      id: 7,
      nome: 'Deus e o Diabo na Terra do Sol',
      review: 'Controle social e liberdade.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse3.mm.bing.net/th/id/OIP.QiGk1lipKGPM6UCAtCPOVQHaEc?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
      temas: 'Drama',
      ano: 1964,
      poster: 'https://a.ltrbxd.com/resized/film-poster/5/3/5/7/4/53574-black-god-white-devil-0-2000-0-3000-crop.jpg?v=73a198766f',
    },
    {
      id: 8,
      nome: 'Saneamento Básico',
      review: 'Explicação a nível de filme da importância e necessidade da existência de um cinema nacional.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse1.mm.bing.net/th/id/OIP.O5mMYIxfMbHHnMbAW6up6QHaE6?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
      temas: 'Comédia, Drama, Metalinguagem',
      ano: 2007,
      poster: 'https://a.ltrbxd.com/resized/film-poster/5/3/7/537-saneamento-basico-o-filme-0-2000-0-3000-crop.jpg?v=22f5eac222',
    },
    {
      id: 9,
      nome: 'Mártires',
      review: 'Retratos do horror do trauma e do fanatismo.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://tse2.mm.bing.net/th/id/OIP.hsGRiSS_5gPPZybg6PaAvwHaD3?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
      temas: 'Terror, Gore, Tortureporn',
      ano: 2008,
      poster: 'https://a.ltrbxd.com/resized/film-poster/4/7/0/6/1/47061-martyrs-0-2000-0-3000-crop.jpg?v=26b1166803',
    },
    {
      id: 10,
      nome: 'Suspiria',
      review: 'Visual deslumbrante e narrativa de bruxaria.',
      nota: 8.7,
      dataAssistida: new Date('2024-11-18'),
      favorito: false,
      foto: 'https://www.rollingstone.de/wp-content/uploads/2017/03/16/17/suspiria-szene-05.jpg',
      temas: 'Terror, Mistério, Bruxaria',
      ano: 1977,
      poster: 'https://a.ltrbxd.com/resized/film-poster/4/4/9/0/0/44900-suspiria-0-2000-0-3000-crop.jpg?v=d1fbb1d377',
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
