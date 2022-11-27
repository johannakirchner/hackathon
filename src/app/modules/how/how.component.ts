import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface how {
  acao: string;
  pontos: number;
}

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.css']
})
export class HowComponent {
  data: how[] = [
    { acao: 'Adicionar R$2,00', pontos: 15 },
    { acao: 'Indicar um amigo para usar o aplicativo Copel', pontos: 10 },
  ];

  displayedColumns = ['acao', 'pontos'];

  constructor(private _route: ActivatedRoute) {
  }

  urlPontos: string = '';
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

        this.urlPontos = '/pontos' + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
        this.urlCarteira = '/carteira' + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;

        this.urlBase = '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;

      }
      );
  }
}
