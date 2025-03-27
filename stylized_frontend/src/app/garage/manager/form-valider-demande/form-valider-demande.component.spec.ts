import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValiderDemandeComponent } from './form-valider-demande.component';

describe('FormValiderDemandeComponent', () => {
  let component: FormValiderDemandeComponent;
  let fixture: ComponentFixture<FormValiderDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValiderDemandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValiderDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
