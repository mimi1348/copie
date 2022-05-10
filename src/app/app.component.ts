import { Component } from '@angular/core';
import { Menu } from './types/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSideBar: boolean = false;

  menus: Menu[] = [
    {
      name: 'Administration',
      iconClass: 'bx bx-lock-open-alt',
      active: false,
      submenu: [
        { name: 'Sélection d\'un portefeuille ', url: '#' },
        { name: 'Corporate action', url: '#' }
      ],
    },
    {
      name: "Marché",
      iconClass: 'bx bx-line-chart',
      active: false,
      submenu: [
        { name: 'Valeurs', url: '#' },
        { name: 'Indices boursiers', url: '#' },
        { name: 'Devise', url: '#' },
        { name: 'Tableau de valeurs', url: '#' }
      ],
    },
    {
      name: "Dta",
      iconClass: 'bx bx-check-circle',
      active: false,
      submenu: [
        { name: 'Création formulaire', url: '#' },
        { name: 'Suppression formulaire', url: '#' },
        { name: 'Suivi formulaire', url: '#' }
      ],
    },
    {
      name: "Portefeuille",
      iconClass: 'bx bx-wallet',
      active: false,
      submenu: [
        { name: 'Titre en portefeuille', url: '#' },
        { name: 'Mouvements titres', url: '#' },
        { name: 'Echéancier', url: '#' },
        { name: 'Opérations sur titres', url: '#' }
      ],
    },
    {
      name: "Ordres",
      iconClass: 'bx bx-food-menu',
      active: false,
      submenu: [
        { name: 'Ordres en note', url: '#' },
        { name: 'Simulation', url: '#' },
        { name: 'Nouvel ordre', url: '#' },
        { name: 'Opération du jour', url: '#' },
        { name: 'Archive ordres', url: '#' },
        { name: 'Archive bordereaux', url: '#' }
      ],
    },
    {
      name: "Transferts",
      iconClass: 'bx bx-archive-out',
      active: false,
      submenu: [
        { name: 'Transfert interne', url: '#' },
        { name: 'Transfert externe', url: '#' },
        { name: 'Transfert du client', url: '#' }
      ],
    },
  ]

  ngOnInit() {}

  toggle(index: number) {
    this.menus[index].active = !this.menus[index].active;
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  selectMenu(parentMenu: { name: string }) : void {

    this.menus.forEach(menu => {
      if (menu.name !== parentMenu.name) {
        menu.active = false;
      } else {
        menu.active = !menu.active;
      }
    })
   
  }

}
