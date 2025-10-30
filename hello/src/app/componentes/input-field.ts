import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel'

@Component({
  selector: 'app-input-field',
  imports: [FormsModule, InputTextModule, FloatLabelModule],
  template: `
    <p-floatlabel variant="in">
      <input pInputText [(ngModel)]="value" (ngModelChange)="valueChange.emit($event)" id="{{ label }}" />
      <label for="{{ label }}">{{ label }}</label>
    </p-floatlabel>
  `,
})
export class InputField {
  @Input() label: string='';
  @Input() value: string='';
  @Output() valueChange = new EventEmitter<string>();
}
