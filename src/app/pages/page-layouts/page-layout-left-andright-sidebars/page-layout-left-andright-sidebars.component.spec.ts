import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutLeftAndrightSidebarsComponent } from './page-layout-left-andright-sidebars.component';

describe('PageLayoutLeftAndrightSidebarsComponent', () => {
  let component: PageLayoutLeftAndrightSidebarsComponent;
  let fixture: ComponentFixture<PageLayoutLeftAndrightSidebarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutLeftAndrightSidebarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutLeftAndrightSidebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
