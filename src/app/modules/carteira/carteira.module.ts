import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteiraRoutingModule } from './carteira-routing.module';
import { CarteiraComponent } from './carteira.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    CarteiraComponent
  ],
  imports: [
    CommonModule,
    CarteiraRoutingModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class CarteiraModule { }
