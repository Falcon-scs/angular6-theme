import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJqueryVailidationComponent } from './form-jquery-vailidation.component';

describe('FormJqueryVailidationComponent', () => {
  let component: FormJqueryVailidationComponent;
  let fixture: ComponentFixture<FormJqueryVailidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJqueryVailidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJqueryVailidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
