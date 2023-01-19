import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {
  nombre: string = 'Charlie Caballero';
  edad: number = 34;

  obtenerDatos() {
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalize() {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

}
