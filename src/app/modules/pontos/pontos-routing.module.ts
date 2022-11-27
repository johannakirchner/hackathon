import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PontosComponent } from './pontos.component';

const routes: Routes = [{ path: '', component: PontosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PontosRoutingModule { }
