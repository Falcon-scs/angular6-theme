import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRangeSlidersComponent } from './form-range-sliders.component';

describe('FormRangeSlidersComponent', () => {
  let component: FormRangeSlidersComponent;
  let fixture: ComponentFixture<FormRangeSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRangeSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRangeSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
