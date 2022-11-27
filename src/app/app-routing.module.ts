import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'pontos', pathMatch: 'full' },
  { path: 'pontos', loadChildren: () => import('./modules/pontos/pontos.module').then(m => m.PontosModule) }, 
  { path: 'how', loadChildren: () => import('./modules/how/how.module').then(m => m.HowModule) }, 
  { path: 'carteira', loadChildren: () => import('./modules/carteira/carteira.module').then(m => m.CarteiraModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
