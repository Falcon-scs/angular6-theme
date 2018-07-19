import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTabsPillsComponent } from './component-tabs-pills.component';

describe('ComponentTabsPillsComponent', () => {
  let component: ComponentTabsPillsComponent;
  let fixture: ComponentFixture<ComponentTabsPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTabsPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTabsPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
