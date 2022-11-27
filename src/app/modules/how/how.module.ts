import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowRoutingModule } from './how-routing.module';
import { HowComponent } from './how.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    HowComponent
  ],
  imports: [
    CommonModule,
    HowRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class HowModule { }
