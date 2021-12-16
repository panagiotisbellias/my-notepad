import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewNoteComponent } from './new-note/new-note.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new_note', component: NewNoteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
