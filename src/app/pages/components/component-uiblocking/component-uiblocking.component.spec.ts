import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUiblockingComponent } from './component-uiblocking.component';

describe('ComponentUiblockingComponent', () => {
  let component: ComponentUiblockingComponent;
  let fixture: ComponentFixture<ComponentUiblockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentUiblockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentUiblockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
