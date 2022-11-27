import { Component } from '@angular/core';


interface premios {
  nome: string;
  preco: number;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.css']
})


export class PontosComponent {
  
  dataSource: premios[] = [
    {nome: 'Panela Antiaderente',desc:'Marca Anitnomart', preco: 2222, img: 'assets/panela.png' },
    {nome: 'Befenfícios',desc:'Muitos', preco: 1231 , img: 'assets/beneficios.png'},
    {nome: 'Bicicleta Elétrica',desc:'Marca Kranom', preco: 2222, img: 'assets/bicicleta.png'},
  ]

  column = ['nome', 'preco'];

}
