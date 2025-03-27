import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGarageComponent } from './details-garage.component';

describe('DetailsGarageComponent', () => {
  let component: DetailsGarageComponent;
  let fixture: ComponentFixture<DetailsGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsGarageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
