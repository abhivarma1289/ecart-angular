import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { Assignment1Component } from './assignments/assignment1/assignment1.component';
import { Assignment2Component } from './assignments/assignment2/assignment2.component';
import { Assignment3Component } from './assignments/assignment3/assignment3.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
// import { GridstackComponent } from './gridstack/gridstack.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopheaderComponent,
    ContainerComponent,
    MainMenuComponent,
    TopMenuComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    AssignmentsComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
