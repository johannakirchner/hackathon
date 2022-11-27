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

  infos = { pontos: '', carteira: '', fatura: '' }

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
        this.infos.pontos = params['pontos'];
        this.infos.carteira = params['carteira'];
        this.infos.fatura = params['fatura'];
        console.log(this.infos);
      }
      );
  }
  urlRoute(base: string) {
    return base + '?pontos=' + this.infos.pontos + '&carteira=' + this.infos.carteira + '&fatura=' + this.infos.fatura;
  }

  pagarFatura() {
    let a = +this.infos.carteira - +this.infos.fatura;
    this.infos.carteira = a.toString();
    this.infos.fatura = '0';
  }
}
// carteira?pontos=3123&carteira=431&fatura=48
