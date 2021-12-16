import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  createDisabled = true;
  apiDisabled = true;
  apiError = '';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.createDisabled = false;
    }, 1000);
    setTimeout(() => {
      this.apiDisabled = false;
    }, 4000);
  }

  onEventBindingButtonPress(){
    this.apiError = 'Temporary, not available. Sorry!'
  }

}
