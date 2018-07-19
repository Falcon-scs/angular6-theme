import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagesProfileComponent } from './custom-pages-profile.component';

describe('CustomPagesProfileComponent', () => {
  let component: CustomPagesProfileComponent;
  let fixture: ComponentFixture<CustomPagesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPagesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPagesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
