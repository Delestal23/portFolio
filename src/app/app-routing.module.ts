import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { ContentsComponent } from "./components/contents/contents.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./components/login/login.component";

import { Content } from '@angular/compiler/src/render3/r3_ast';


const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'contents', component: ContentsComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
