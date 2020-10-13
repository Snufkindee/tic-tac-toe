import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Score } from "../components/score/score";

@Injectable()
export class ScoreService {
  scores$: BehaviorSubject<Score> = new BehaviorSubject(new Score(0, 0));

  update(score: Score) {
    this.scores$.next(score);
  }

  constructor() {}
}
