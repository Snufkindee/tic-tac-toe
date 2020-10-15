import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreService } from 'src/app/services/score.service';
import { Cell } from '../cell/cell';
import { CellComponent } from '../cell/cell.component';
import { ScoreComponent } from '../score/score.component';

import { GameLogicComponent } from './game-logic.component';

describe('GameLogicComponent', () => {
  let component: GameLogicComponent;
  let fixture: ComponentFixture<GameLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameLogicComponent, CellComponent, ScoreComponent],
      providers: [ScoreService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Player turn should be X', () => {
    expect(component.getXO).toBe('X');
  });

  it('Winner should be X', () => {
    const winningCell: Cell = { player: 'X', win: false };
    const cells: Cell[] = [winningCell, winningCell, winningCell];
    component.cells = cells;

    expect(component.getWinner()).toEqual('X');
  });

  it('Should be draw', () => {
    const O: Cell = { player: 'O', win: false };
    const X: Cell = { player: 'X', win: false };
    const cells: Cell[] = [O, X, X, X, O, O, O, X, X];
    component.cells = cells;
    component.winner = component.getWinner();
    component.isDraw = component.getDraw();
    expect(component.isDraw).toBeTrue();
  });
});
