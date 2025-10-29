import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  template: `
    <p>{{ label }}:</p>
  `,
})
export class InputField {
  @Input() label: string='';
}
