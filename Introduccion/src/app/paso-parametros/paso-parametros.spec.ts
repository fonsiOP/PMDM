import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoParametros } from './paso-parametros';

describe('PasoParametros', () => {
  let component: PasoParametros;
  let fixture: ComponentFixture<PasoParametros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasoParametros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasoParametros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
