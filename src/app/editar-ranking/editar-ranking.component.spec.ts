import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRankingComponent } from './editar-ranking.component';

describe('EditarRankingComponent', () => {
  let component: EditarRankingComponent;
  let fixture: ComponentFixture<EditarRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
