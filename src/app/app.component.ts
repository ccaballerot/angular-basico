import { Component } from '@angular/core';

interface Producto {
    nombre?: string;
    descripcion: string;
    precio: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  products = [
    {name: 'Phone XL', description: ''},
    {name: 'Phone Mini', description: 'algooo'},
    {name: 'Phone Standard', description: 'otrooo'}
  ];
  alterEgo: string = '';
  base: number = 10;
  numero: number = 20;

  calculoISV(productos: Producto[] ): [number, number] {
    let total = 0;

    productos.forEach( ({ precio }) => {
      total += precio;
    })

    return [total, total*0.15];
  }

  acumular(valor: number) {
    this.numero += valor;
  }

  share(){
    // const celular: Producto = {
    //   descripcion: 'Iphhone XI',
    //   precio: 2500
    // };

    // const tablet: Producto = {
    //   descripcion: 'Apple XI',
    //   precio: 3000
    // }

    // const carritoCompras: Producto[] = [
    //   {
    //     descripcion: 'Iphhone XI',
    //     precio: 2500
    //   },
    //   {
    //     descripcion: 'Apple XI',
    //     precio: 3000
    //   }
    // ]

    // const [ total, desc ] = this.calculoISV(carritoCompras);

    // console.log(total, desc);

    // const producto: Producto = {
    //   descripcion: 'Iphone XI',
    //   precio: 2500
    // }

    // const { descripcion, precio } = producto;    

    // console.log('DESC: ', descripcion, 'PRECIO: ', precio);

    const dbz: string[] = ['Goku', 'Vegeta', 'Krilin'];

    const [ ,, p] = dbz;

    console.log(p);


  }  

  
}