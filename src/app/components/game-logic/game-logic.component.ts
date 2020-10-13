import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import { Cell } from '../cell/cell';
import { Score } from '../score/score';

@Component({
  selector: 'app-game-logic',
  templateUrl: './game-logic.component.html',
  styleUrls: ['./game-logic.component.scss'],
})
export class GameLogicComponent implements OnInit {
  WIN_CONDITIONS: Array<Array<number>> = [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //Diagonals
    [2, 4, 6],
  ];

  playerTurn: boolean;
  playerXWinCount: number;
  playerOWinCount: number;
  winner: string;
  isDraw: boolean;

  cells: Cell[];
  boardDisabled: boolean;

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    this.reset();
    this.playerXWinCount = 0;
    this.playerOWinCount = 0;
  }

  reset() {
    this.cells = Array(9).fill(null);
    this.playerTurn = true;
    this.winner = null;
    this.isDraw = null;
    this.boardDisabled = false;
  }

  get getXO() {
    return this.playerTurn ? 'X' : 'O';
  }

  changeTurn() {
    this.playerTurn = !this.playerTurn;
  }

  getCellValue(cell: Cell): string {
    return cell && cell.player;
  }

  getWinner(): string {
    for (let i = 0; i < this.WIN_CONDITIONS.length; i++) {
      const [x, y, z] = this.WIN_CONDITIONS[i];

      if (
        this.cells[x] &&
        this.cells[x].player === this.getCellValue(this.cells[y]) &&
        this.cells[x].player === this.getCellValue(this.cells[z])
      ) {
        this.boardDisabled = true;
        this.cells[x] = { ...this.cells[x], win: true };
        this.cells[y] = { ...this.cells[y], win: true };
        this.cells[z] = { ...this.cells[z], win: true };
        return this.cells[x].player;
      }
    }

    return null;
  }

  getDraw() {
    if (
      this.winner === null &&
      this.cells.every((cell) => {
        return (
          this.getCellValue(cell) === 'X' || this.getCellValue(cell) === 'O'
        );
      })
    ) {
      return true;
    }
  }

  checkWinnerOrDraw() {
    this.winner = this.getWinner();
    if (this.winner === 'X') {
      this.playerXWinCount++;
    } else if (this.winner === 'O') {
      this.playerOWinCount++;
    }

    this.isDraw = this.getDraw();
    this.scoreService.update(
      new Score(this.playerXWinCount, this.playerOWinCount)
    );
  }

  takeTurn(i: number) {
    if (this.cells[i] === null) {
      this.cells.splice(i, 1, { player: this.getXO, win: false });
      this.changeTurn();
    }
    this.checkWinnerOrDraw();
  }
}
