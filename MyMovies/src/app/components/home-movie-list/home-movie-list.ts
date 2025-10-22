import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieEntity } from '../../service/movie';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-movie-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-movie-list.html',
})
export class HomeMovieList {
  @Input() movies: MovieEntity[] = [];

  startIndex = 0;
  visibleCount = 7;

  next() {
    if (this.startIndex + this.visibleCount < this.movies.length) {
      this.startIndex++;
    }
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }

  get visibleMovies() {
    return this.movies.slice(this.startIndex, this.startIndex + this.visibleCount);
  }
}
