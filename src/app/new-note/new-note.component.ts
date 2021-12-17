import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  createDisabled = true;
  note_title = "my-note";
  note_body = "";

  constructor() { }

  ngOnInit(): void {}

}
