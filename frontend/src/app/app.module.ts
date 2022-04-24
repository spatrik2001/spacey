import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { HomeComponent } from './components/other/home/home.component';
import { ErrorComponent } from './components/other/error/error.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { AboutComponent } from './components/other/about/about.component';
import { ContactComponent } from './components/other/contact/contact.component';
import { ProductListComponent } from './components/shop/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }