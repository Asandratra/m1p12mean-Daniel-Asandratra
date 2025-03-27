import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDetailsEmployeeComponent } from './manager-details-employee.component';

describe('ManagerDetailsEmployeeComponent', () => {
  let component: ManagerDetailsEmployeeComponent;
  let fixture: ComponentFixture<ManagerDetailsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerDetailsEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDetailsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
