import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFinancialsComponent } from './dashboard-financials.component';

describe('DashboardFinancialsComponent', () => {
  let component: DashboardFinancialsComponent;
  let fixture: ComponentFixture<DashboardFinancialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFinancialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
