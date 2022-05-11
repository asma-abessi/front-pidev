import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettravelPlanningsComponent } from './gettravel-plannings.component';

describe('GettravelPlanningsComponent', () => {
  let component: GettravelPlanningsComponent;
  let fixture: ComponentFixture<GettravelPlanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettravelPlanningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettravelPlanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
