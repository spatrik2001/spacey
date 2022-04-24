import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit() {
      this.titleService.setTitle("SpaceY · Kapcsolat");
  }

}
