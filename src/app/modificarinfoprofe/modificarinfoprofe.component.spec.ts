import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarinfoprofeComponent } from './modificarinfoprofe.component';

describe('ModificarinfoprofeComponent', () => {
  let component: ModificarinfoprofeComponent;
  let fixture: ComponentFixture<ModificarinfoprofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarinfoprofeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarinfoprofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
