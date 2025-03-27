import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDetailsTravauxComponent } from './manager-details-travaux.component';

describe('ManagerDetailsTravauxComponent', () => {
  let component: ManagerDetailsTravauxComponent;
  let fixture: ComponentFixture<ManagerDetailsTravauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerDetailsTravauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerDetailsTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
