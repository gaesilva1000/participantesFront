import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';
import { Routes, RouterModule } from '@angular/router';

 
const routes: Routes = [
  { path: 'listar', component: ListarComponent }, // Rota para o componente Listar
  { path: 'cadastrar', component: CadastroComponent }, // Rota para o componente Cadastro
  { path: '', redirectTo: '/listar', pathMatch: 'full' } // Rota padrão (redireciona para listar)
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule ,
    RouterModule.forRoot(routes)


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
