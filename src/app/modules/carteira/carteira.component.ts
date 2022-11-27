import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {
  }

  urlPontos: string ='';
  urlHow: string='';

  infos = { pontos: '', carteira: '', fatura: '' }

  urlBase = ''

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
        this.infos.pontos = params['pontos'];
        this.infos.carteira = params['carteira'];
        this.infos.fatura = params['fatura'];
        console.log(this.infos);

        this.urlPontos ='/pontos' + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
        this.urlHow = '/how' + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
      
        this.urlBase = '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
      
      }
      );
  }
  urlUpdate() {
    this.urlPontos = '/pontos' + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
    this.urlHow = '/how' + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
    this.urlBase = '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
  }

  pagarFatura() {
    let a = +this.infos.carteira - +this.infos.fatura;
    this.infos.carteira = a.toString();
    this.infos.fatura = '0';
    this.urlUpdate();

    console.log(this.urlPontos)
  }

  addCarteira() {
    let a = +this.infos.carteira + 200;
    this.infos.carteira = a.toString();
    this.urlUpdate();
    
  }
}
// carteira?pontos=3123&carteira=431&fatura=48
