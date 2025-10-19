import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header } from './components/header/header';
import { MovieCard } from './components/movie-card/movie-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Header, MovieCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('MyMovies');
}
