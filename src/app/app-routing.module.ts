import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pontos', loadChildren: () => import('./modules/pontos/pontos.module').then(m => m.PontosModule) }, { path: 'how', loadChildren: () => import('./modules/how/how.module').then(m => m.HowModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
