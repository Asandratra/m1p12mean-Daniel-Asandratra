import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTravauxComponent } from './manager-travaux.component';

describe('ManagerTravauxComponent', () => {
  let component: ManagerTravauxComponent;
  let fixture: ComponentFixture<ManagerTravauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerTravauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerTravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
