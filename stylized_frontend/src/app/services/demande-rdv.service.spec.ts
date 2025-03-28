import { TestBed } from '@angular/core/testing';

import { DemandeRDVService } from './demande-rdv.service';

describe('DemandeRDVService', () => {
  let service: DemandeRDVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeRDVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
