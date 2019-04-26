import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateEmployeeComponent } from './rate-employee.component';

describe('RateEmployeeComponent', () => {
  let component: RateEmployeeComponent;
  let fixture: ComponentFixture<RateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
