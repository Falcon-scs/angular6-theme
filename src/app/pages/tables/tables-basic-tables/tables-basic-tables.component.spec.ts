import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesBasicTablesComponent } from './tables-basic-tables.component';

describe('TablesBasicTablesComponent', () => {
  let component: TablesBasicTablesComponent;
  let fixture: ComponentFixture<TablesBasicTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesBasicTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesBasicTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
