import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PontosRoutingModule } from './pontos-routing.module';
import { PontosComponent } from './pontos.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    PontosComponent
  ],
  imports: [
    CommonModule,
    PontosRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class PontosModule { }
