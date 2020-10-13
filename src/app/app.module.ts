import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameLogicComponent } from './components/game-logic/game-logic.component';
import { CellComponent } from './components/cell/cell.component';
import { ScoreComponent } from './components/score/score.component';
import { ScoreService } from './services/score.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    GameLogicComponent,
    CellComponent,
    ScoreComponent,
  ],
  imports: [BrowserModule, FlexLayoutModule, MatButtonModule, MatTableModule],
  providers: [ScoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
