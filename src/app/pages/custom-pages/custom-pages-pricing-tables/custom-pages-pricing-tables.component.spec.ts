import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagesPricingTablesComponent } from './custom-pages-pricing-tables.component';

describe('CustomPagesPricingTablesComponent', () => {
  let component: CustomPagesPricingTablesComponent;
  let fixture: ComponentFixture<CustomPagesPricingTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPagesPricingTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPagesPricingTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
