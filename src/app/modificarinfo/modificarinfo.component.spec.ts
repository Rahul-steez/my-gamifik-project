import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarinfoComponent } from './modificarinfo.component';

describe('ModificarinfoComponent', () => {
  let component: ModificarinfoComponent;
  let fixture: ComponentFixture<ModificarinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
