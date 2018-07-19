import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagesMyAccountComponent } from './custom-pages-my-account.component';

describe('CustomPagesMyAccountComponent', () => {
  let component: CustomPagesMyAccountComponent;
  let fixture: ComponentFixture<CustomPagesMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPagesMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPagesMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
