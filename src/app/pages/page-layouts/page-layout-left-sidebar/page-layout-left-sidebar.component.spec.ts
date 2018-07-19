import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutLeftSidebarComponent } from './page-layout-left-sidebar.component';

describe('PageLayoutLeftSidebarComponent', () => {
  let component: PageLayoutLeftSidebarComponent;
  let fixture: ComponentFixture<PageLayoutLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
