import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettravelComponent } from './gettravel.component';

describe('GettravelComponent', () => {
  let component: GettravelComponent;
  let fixture: ComponentFixture<GettravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
