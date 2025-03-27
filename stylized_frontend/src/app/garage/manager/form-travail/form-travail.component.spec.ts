import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTravailComponent } from './form-travail.component';

describe('FormTravailComponent', () => {
  let component: FormTravailComponent;
  let fixture: ComponentFixture<FormTravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTravailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
