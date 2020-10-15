import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreService } from 'src/app/services/score.service';

import { ScoreComponent } from './score.component';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreComponent],
      providers: [ScoreService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
