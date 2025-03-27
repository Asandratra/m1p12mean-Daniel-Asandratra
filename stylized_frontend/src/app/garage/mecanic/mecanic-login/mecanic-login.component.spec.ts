import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicLoginComponent } from './mecanic-login.component';

describe('MecanicLoginComponent', () => {
  let component: MecanicLoginComponent;
  let fixture: ComponentFixture<MecanicLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
