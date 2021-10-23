import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGamepad,
  faFlagCheckered,
  faFistRaised,
  faHandRock,
  faHandScissors,
  faHandPaper,
  faUndo
} from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGamepad, faFlagCheckered, faFistRaised, faHandRock, faHandScissors, faHandPaper, faUndo);
  }
}
