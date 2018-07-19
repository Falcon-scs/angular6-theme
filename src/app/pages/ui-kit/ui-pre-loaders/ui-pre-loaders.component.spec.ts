import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPreLoadersComponent } from './ui-pre-loaders.component';

describe('UiPreLoadersComponent', () => {
  let component: UiPreLoadersComponent;
  let fixture: ComponentFixture<UiPreLoadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPreLoadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPreLoadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
