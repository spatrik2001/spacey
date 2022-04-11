import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit() {
      this.titleService.setTitle("SpaceY · A keresett oldal nem található!");
  }

}
