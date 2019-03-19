import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProdutogridComponent } from './produtogrid/produtogrid.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroformComponent } from './cadastro/cadastroform/cadastroform.component';
import { HomeComponent } from './home/home.component';
import { CadastrosidebarComponent } from './cadastro/cadastrosidebar/cadastrosidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutogridComponent,
    CadastroComponent,
    CadastroformComponent,
    HomeComponent,
    CadastrosidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
