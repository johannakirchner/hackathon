import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
    { nome: 'Befenfícios', desc: 'Muitos', preco: 1231, img: 'assets/beneficios.png' },
    { nome: 'Befenfícios', desc: 'Muitos', preco: 3431, img: 'assets/beneficios.png' },
    { nome: 'Befenfícios', desc: 'Muitos', preco: 31, img: 'assets/beneficios.png' },
    { nome: 'Befenfícios', desc: 'Muitos', preco: 11, img: 'assets/beneficios.png' },
  ]

  column = ['nome', 'preco'];


  constructor(private _route: ActivatedRoute) {
  }

  urlHow: string = '';
  urlCarteira: string = '';

  infos = { pontos: '', carteira: '', fatura: '' }

  urlBase = ''

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
        this.infos.pontos = params['pontos'];
        this.infos.carteira = params['carteira'];
        this.infos.fatura = params['fatura'];
        console.log(this.infos);

        this.urlHow = '/how' + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
        this.urlCarteira = '/carteira' + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;

        this.urlBase = '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;

      }
      );

  }
}