import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  constructor() {
    console.log('heroes lsit: ', this.heroes);
  }

  borrarHeroes() {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log("borrando...", this.heroeBorrado);
  }

}
