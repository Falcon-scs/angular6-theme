import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTooltipPopoversComponent } from './component-tooltip-popovers.component';

describe('ComponentTooltipPopoversComponent', () => {
  let component: ComponentTooltipPopoversComponent;
  let fixture: ComponentFixture<ComponentTooltipPopoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTooltipPopoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTooltipPopoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
