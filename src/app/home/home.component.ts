import { Component, OnInit } from '@angular/core';
import { NoteValue } from '../models/note.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notesList: NoteValue[] = [];

  constructor() {
    let note1: NoteValue = {
      id: 1,
      title: 'Demo Title',
      body: 'Demo Body, example... blahblah'
    };
    let note2: NoteValue = {
      id: 2,
      title: 'Demo Title 2',
      body: 'Demo Body 2, example... blahblah'
    };
    this.notesList.push(note1);
    this.notesList.push(note2);
  }

  ngOnInit(): void {
    
  }

  onModifyNoteButtonPress(id: number){
    
  }

  onDeleteNoteButtonPress(id: number){
    delete this.notesList[id];
  }

}
