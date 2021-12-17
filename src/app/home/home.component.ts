import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiDisabled = true;
  apiError = '';

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.apiDisabled = false;
    }, 3000);
  }

  onEventBindingButtonPress(){
    this.apiError = 'Temporary, not available. Sorry!'
  }

}
