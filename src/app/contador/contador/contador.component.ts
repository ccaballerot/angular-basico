import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
  base: number = 10;
  numero: number = 0;

  acumular(valor: number) {
    this.numero += valor;
  }

}
