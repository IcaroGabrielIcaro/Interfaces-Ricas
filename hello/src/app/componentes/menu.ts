import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  imports: [MenubarModule],
  template: `
    <p-menubar [model]="menuItems"/>
  `,
})
export class Menu {
  menuItems: MenuItem[] = [
    {
      label: 'home',
      icon: 'pi pi-arrow-up',
      routerLink: ['/']
    },
    {
      label: 'Pessoas',
      icon: 'pi pi-arrow-up',
      routerLink: ['/pessoas']
    }
  ];
}
