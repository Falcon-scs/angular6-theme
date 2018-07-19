import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedElementComponent } from './advanced-element.component';

describe('AdvancedElementComponent', () => {
  let component: AdvancedElementComponent;
  let fixture: ComponentFixture<AdvancedElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
