import { Component } from '@angular/core';

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
    {acao: 'Pagar fatura no aplicativo Copel', pontos: 30},
    {acao: 'Diminuir consumo do mês anterior', pontos: 10},
    {acao: 'Indicar um amigo para usar o aplicativo Copel', pontos: 15},
    {acao: 'Gasto de luz menor que a previsão', pontos: 20},
  ];

  displayedColumns = ['acao', 'pontos'];
}
