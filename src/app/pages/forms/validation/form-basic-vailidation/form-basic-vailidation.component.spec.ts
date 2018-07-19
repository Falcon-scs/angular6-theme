import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicVailidationComponent } from './form-basic-vailidation.component';

describe('FormBasicVailidationComponent', () => {
  let component: FormBasicVailidationComponent;
  let fixture: ComponentFixture<FormBasicVailidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBasicVailidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBasicVailidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
