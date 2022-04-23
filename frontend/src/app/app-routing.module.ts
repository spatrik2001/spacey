import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductListComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
