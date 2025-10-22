import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { MovieForm } from './components/movie-form/movie-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Header, Sidebar, MovieForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  showMovieForm = false;

  abrirModal() {
    this.showMovieForm = true;
  }

  fecharModal() {
    this.showMovieForm = false;
  }
}
