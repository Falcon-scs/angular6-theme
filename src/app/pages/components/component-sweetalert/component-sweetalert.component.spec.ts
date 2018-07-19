import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSweetalertComponent } from './component-sweetalert.component';

describe('ComponentSweetalertComponent', () => {
  let component: ComponentSweetalertComponent;
  let fixture: ComponentFixture<ComponentSweetalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSweetalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSweetalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
