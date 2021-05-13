import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAlumnoComponent } from './ranking-alumno.component';

describe('RankingAlumnoComponent', () => {
  let component: RankingAlumnoComponent;
  let fixture: ComponentFixture<RankingAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
