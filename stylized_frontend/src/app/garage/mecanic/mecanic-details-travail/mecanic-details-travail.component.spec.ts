import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicDetailsTravailComponent } from './mecanic-details-travail.component';

describe('MecanicDetailsTravailComponent', () => {
  let component: MecanicDetailsTravailComponent;
  let fixture: ComponentFixture<MecanicDetailsTravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanicDetailsTravailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanicDetailsTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
