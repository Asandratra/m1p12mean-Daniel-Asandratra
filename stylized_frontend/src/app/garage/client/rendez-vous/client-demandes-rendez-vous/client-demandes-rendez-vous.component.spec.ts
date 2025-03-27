import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDemandesRendezVousComponent } from './client-demandes-rendez-vous.component';

describe('ClientDemandesRendezVousComponent', () => {
  let component: ClientDemandesRendezVousComponent;
  let fixture: ComponentFixture<ClientDemandesRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDemandesRendezVousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDemandesRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
