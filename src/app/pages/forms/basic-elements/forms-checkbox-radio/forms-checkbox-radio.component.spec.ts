import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCheckboxRadioComponent } from './forms-checkbox-radio.component';

describe('FormsCheckboxRadioComponent', () => {
  let component: FormsCheckboxRadioComponent;
  let fixture: ComponentFixture<FormsCheckboxRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCheckboxRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCheckboxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
