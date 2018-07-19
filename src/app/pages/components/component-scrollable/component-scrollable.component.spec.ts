import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentScrollableComponent } from './component-scrollable.component';

describe('ComponentScrollableComponent', () => {
  let component: ComponentScrollableComponent;
  let fixture: ComponentFixture<ComponentScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentScrollableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
