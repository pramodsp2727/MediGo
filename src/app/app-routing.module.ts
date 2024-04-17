import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicinesHomeComponent } from './components/medicines-home/medicines-home.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'Medicine', component:MedicinesHomeComponent},
  {path:'otcCategory', component:ProductsByCategoryComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
