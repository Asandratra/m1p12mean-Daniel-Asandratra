import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTravailComponent } from './details-travail.component';

describe('DetailsTravailComponent', () => {
  let component: DetailsTravailComponent;
  let fixture: ComponentFixture<DetailsTravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTravailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
