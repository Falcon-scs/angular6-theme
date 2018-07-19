import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorizontalWizardComponent } from './form-horizontal-wizard.component';

describe('FormHorizontalWizardComponent', () => {
  let component: FormHorizontalWizardComponent;
  let fixture: ComponentFixture<FormHorizontalWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHorizontalWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHorizontalWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
