import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCarouselsComponent } from './component-carousels.component';

describe('ComponentCarouselsComponent', () => {
  let component: ComponentCarouselsComponent;
  let fixture: ComponentFixture<ComponentCarouselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCarouselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
