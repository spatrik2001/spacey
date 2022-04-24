import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pl: Product = {
    _id: '',
    title: '',
    price: 0,
    description: '',
    imageUrl: '',
    discount: false,
    discountRate: 0,
    userId: '',
    createdAt: new Date()
  };

  products?: Product[];
  

  public constructor(private titleService: Title, private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
      this.titleService.setTitle("SpaceY · Főoldal");
      this.listProduct();
  }

  listProduct() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }
  
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}