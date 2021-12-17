import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-notepad';

  createDisabled = true;

  constructor(private router: Router) {}

  ngOnInit(): void {

    setTimeout(() => {
      this.createDisabled = false;
    }, 2000);
  }

  onNewNoteButtonPress(){
    this.router.navigate(['new_note']);
  }

  onNotesListButtonPress(){
    this.router.navigate(['']);
  }
}
