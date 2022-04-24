import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit() {
      this.titleService.setTitle("SpaceY · Termékek");
  }

}