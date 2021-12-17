import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JokeValue, OpenApiResponse } from './models/joke.model';
import { OpenApiIntegrationService } from './services/open-api-integration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-notepad';
  apiError = '';
  jokesList: JokeValue[] = [];

  constructor(private router: Router, private service: OpenApiIntegrationService) {}

  ngOnInit(): void {
  }

  onEventBindingButtonPress(){
    this.service.getOpenApiResult().subscribe(result =>{this.getJokeList(result)});
  }

  getJokeList(res: OpenApiResponse){
    this.jokesList = res.value;
    console.log(res);
  }
/*
  onEventBindingButtonPress(){
    this.apiError = 'Temporary, not available. Sorry!'
  }
*/
  onNewNoteButtonPress(){
    this.router.navigate(['new_note']);
  }

  onNotesListButtonPress(){
    this.router.navigate(['']);
  }
}
