import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDropdownsComponent } from './component-dropdowns.component';

describe('ComponentDropdownsComponent', () => {
  let component: ComponentDropdownsComponent;
  let fixture: ComponentFixture<ComponentDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
