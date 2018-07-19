import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDataTablesComponent } from './tables-data-tables.component';

describe('TablesDataTablesComponent', () => {
  let component: TablesDataTablesComponent;
  let fixture: ComponentFixture<TablesDataTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesDataTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDataTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
