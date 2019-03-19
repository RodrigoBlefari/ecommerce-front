import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { CadastroComponent} from './cadastro/cadastro.component';
import { AppComponent} from './app.component';
import { HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent},
  { path: 'home', component: HomeComponent},
  { path: 'entrar', component: HomeComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
