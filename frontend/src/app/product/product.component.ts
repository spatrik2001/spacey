import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit() {
      this.titleService.setTitle("SpaceY · Termékek");
  }

}
