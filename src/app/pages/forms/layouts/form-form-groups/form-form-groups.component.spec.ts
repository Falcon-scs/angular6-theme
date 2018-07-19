import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormGroupsComponent } from './form-form-groups.component';

describe('FormFormGroupsComponent', () => {
  let component: FormFormGroupsComponent;
  let fixture: ComponentFixture<FormFormGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFormGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFormGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
