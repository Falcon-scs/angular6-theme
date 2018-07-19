import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormGridComponent } from './form-form-grid.component';

describe('FormFormGridComponent', () => {
  let component: FormFormGridComponent;
  let fixture: ComponentFixture<FormFormGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFormGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFormGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
