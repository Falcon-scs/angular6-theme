import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVerticalWizardComponent } from './form-vertical-wizard.component';

describe('FormVerticalWizardComponent', () => {
  let component: FormVerticalWizardComponent;
  let fixture: ComponentFixture<FormVerticalWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVerticalWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVerticalWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
