import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatePickersComponent } from './form-date-pickers.component';

describe('FormDatePickersComponent', () => {
  let component: FormDatePickersComponent;
  let fixture: ComponentFixture<FormDatePickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDatePickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatePickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
