import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDemandesRendezVousComponent } from './manager-demandes-rendez-vous.component';

describe('ManagerDemandesRendezVousComponent', () => {
  let component: ManagerDemandesRendezVousComponent;
  let fixture: ComponentFixture<ManagerDemandesRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerDemandesRendezVousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDemandesRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
