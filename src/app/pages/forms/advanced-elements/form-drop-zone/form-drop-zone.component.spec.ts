import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDropZoneComponent } from './form-drop-zone.component';

describe('FormDropZoneComponent', () => {
  let component: FormDropZoneComponent;
  let fixture: ComponentFixture<FormDropZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDropZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDropZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
