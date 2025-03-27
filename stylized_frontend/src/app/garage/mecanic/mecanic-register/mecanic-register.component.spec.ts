import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicRegisterComponent } from './mecanic-register.component';

describe('MecanicRegisterComponent', () => {
  let component: MecanicRegisterComponent;
  let fixture: ComponentFixture<MecanicRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
