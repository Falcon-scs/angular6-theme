import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicElementComponent } from './basic-element.component';

describe('BasicElementComponent', () => {
  let component: BasicElementComponent;
  let fixture: ComponentFixture<BasicElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
