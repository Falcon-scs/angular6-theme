import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsC3ChartsComponent } from './charts-c3-charts.component';

describe('ChartsC3ChartsComponent', () => {
  let component: ChartsC3ChartsComponent;
  let fixture: ComponentFixture<ChartsC3ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsC3ChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsC3ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
