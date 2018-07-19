import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsChartJsComponent } from './charts-chart-js.component';

describe('ChartsChartJsComponent', () => {
  let component: ChartsChartJsComponent;
  let fixture: ComponentFixture<ChartsChartJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsChartJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsChartJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
