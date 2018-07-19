import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsChartistComponent } from './charts-chartist.component';

describe('ChartsChartistComponent', () => {
  let component: ChartsChartistComponent;
  let fixture: ComponentFixture<ChartsChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
