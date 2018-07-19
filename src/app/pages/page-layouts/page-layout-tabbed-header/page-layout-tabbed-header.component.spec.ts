import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutTabbedHeaderComponent } from './page-layout-tabbed-header.component';

describe('PageLayoutTabbedHeaderComponent', () => {
  let component: PageLayoutTabbedHeaderComponent;
  let fixture: ComponentFixture<PageLayoutTabbedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutTabbedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutTabbedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
