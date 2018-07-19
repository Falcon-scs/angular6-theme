import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutRightSidebarComponent } from './page-layout-right-sidebar.component';

describe('PageLayoutRightSidebarComponent', () => {
  let component: PageLayoutRightSidebarComponent;
  let fixture: ComponentFixture<PageLayoutRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
