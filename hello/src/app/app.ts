import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Menu } from './componentes/menu';
import { InputField } from './componentes/input-field';

/**
 * Um componente é tudo o que estamos vendo na tela inicial
 * 
 * Todo componente é uma classe que tem o decorador @Component
 * Normalmente quando cria pelo angular é criado 3 arquivos separados: o componente
 * O template da pagina a ser renderizado que está sob responsabilidade do componente
 * E a folha de estilo
 * Os outros 2 apps nao tem relacao com o Componente app
 * O arquivo obrigatorio é o app.ts */
@Component({
  selector: 'app-root',

  imports: [RouterOutlet, ButtonModule, PanelModule, Menu, InputField],

  // template pela url
  // templateUrl: './app.html',

  // estilo pela url
  // styleUrl: './app.css',

  // estilo in line
  // styles: `estilo`,

  // template in line
  template: `
    <!-- Titulo é uma função -->
    <main class="main">
      <app-menu></app-menu>

      <p-panel header="Olá, {{ title() }} - {{ nome }}">
        <app-input-field label="Nome" [(value)]="nome"/>

        <app-input-field label="Sobrenome" [(value)]="sobrenome"/>

        <app-input-field label="CEP" [(value)]="cep"/>
        <app-input-field label="Logradouro" [(value)]="logradouro"/>
        <app-input-field label="Complemento" [(value)]="complemento"/>
        <app-input-field label="Bairro" [(value)]="bairro"/>
        <app-input-field label="Cidade" [(value)]="cidade"/>
        <app-input-field label="Estado" [(value)]="estado"/>
      </p-panel>

      <p-button label="Incrementar 1" (onClick)="incrementar()"/>
      
      <!-- <div class="pill-group">
        @for (item of items; track item.title) {
          <a class="pill" [href]="item.link" target="_blank" rel="noopener">
            <span>{{ item.title }}</span>
          </a>
          }
        </div> -->
        
      </main>
    <router-outlet></router-outlet>
  `
})
export class App {
  // A definição de uma variavel com signal para ajudar na programacao funcional
  // variavel que serve para guardar um valor que ao mesmo tempo é uma funcao
  // Toda vez que vai alterar o valor ou algo vai poder mexer como em um uma variavel
  // Mas se for ler, tem que ler como uma funcao
  protected readonly title = signal<string>('Título');

  protected readonly variavel: string = 'ícaro'; // nao é signal

  // protected readonly items = [
  //     { title: 'Explore the Docs', link: 'https://angular.dev' },
  //     { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
  //     { title: 'Prompt and best practices for AI', link: 'https://angular.dev/ai/develop-with-ai'},
  //     { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
  //     { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
  //     { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  // ];

  protected nome: string = '';

  protected sobrenome: string = '';
  
  protected cep: string = '';
  protected logradouro: string = '';
  protected complemento: string = '';
  protected bairro: string = '';
  protected cidade: string = '';
  protected estado: string = '';

  protected counter: number = 0;

  incrementar() {
    this.counter++;
  }
}
