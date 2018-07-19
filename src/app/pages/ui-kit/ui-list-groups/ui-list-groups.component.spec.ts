import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiListGroupsComponent } from './ui-list-groups.component';

describe('UiListGroupsComponent', () => {
  let component: UiListGroupsComponent;
  let fixture: ComponentFixture<UiListGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiListGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
