import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicTravauxComponent } from './mecanic-travaux.component';

describe('MecanicTravauxComponent', () => {
  let component: MecanicTravauxComponent;
  let fixture: ComponentFixture<MecanicTravauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicTravauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
