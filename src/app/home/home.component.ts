import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  welcome : string
  constructor() {
    this.welcome = "Welcome to Ciphyapp";
  }

  ngOnInit() {
  }

}