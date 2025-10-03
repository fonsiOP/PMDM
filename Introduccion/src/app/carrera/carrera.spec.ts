import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrera } from './carrera';

describe('Carrera', () => {
  let component: Carrera;
  let fixture: ComponentFixture<Carrera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carrera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
