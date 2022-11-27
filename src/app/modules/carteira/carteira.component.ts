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

  p = '';
  c = '';
  f = '';
  infos = { pontos:'',carteira: '',fatura:''}

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

}
// carteira?pontos=3123&carteira=431&fatura=48
function urlRoute(base:string) {
  return base + '?pontos=' + infos.pontos + '&carteira=' + infos.carteira + '&fatura=' + infos.fatura;
}