import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  @Output() abrirFormulario = new EventEmitter<void>();

  abrirForm() {
    this.abrirFormulario.emit();
  }
}
