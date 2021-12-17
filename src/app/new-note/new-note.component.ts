import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  note_title = 'my-note';
  note_body = '';

  constructor() {}

  ngOnInit(): void {}

  onAddNoteButtonPress(title: string, body: string){
    
  }

}
