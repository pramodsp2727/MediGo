import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MedicinesHomeComponent } from './components/medicines-home/medicines-home.component';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
  
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicinesHomeComponent,
    TopDealsComponent,
    ProductsByCategoryComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    CarouselModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
