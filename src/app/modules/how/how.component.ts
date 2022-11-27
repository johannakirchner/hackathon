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
    {acao: 'Adicionar R$2,00', pontos: 15},
    {acao: 'Indicar um amigo para usar o aplicativo Copel', pontos: 10},
  ];

  displayedColumns = ['acao', 'pontos'];
}
