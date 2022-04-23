import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products?: Product[];
  

  public constructor(private titleService: Title, private prdouctService: ProductService) { }

  ngOnInit(): void {
      this.titleService.setTitle("SpaceY · Főoldal");
      this.coolProducts();
  }

  coolProducts(): void {
    this.prdouctService.getAll()
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (err) => console.error(err)        
      });
  }

}