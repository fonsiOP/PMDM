import { TestBed } from '@angular/core/testing';

import { Consola } from './consola';

describe('Consola', () => {
  let service: Consola;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consola);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
