import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html', // template pela url
  styleUrl: './app.css',
  // template in line
  template: `
    <h1>{{ title() }}</h1>
    <router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('hello');
}
