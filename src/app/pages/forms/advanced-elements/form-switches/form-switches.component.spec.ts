import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSwitchesComponent } from './form-switches.component';

describe('FormSwitchesComponent', () => {
  let component: FormSwitchesComponent;
  let fixture: ComponentFixture<FormSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
