import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagesHelpCenterComponent } from './custom-pages-help-center.component';

describe('CustomPagesHelpCenterComponent', () => {
  let component: CustomPagesHelpCenterComponent;
  let fixture: ComponentFixture<CustomPagesHelpCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPagesHelpCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPagesHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
