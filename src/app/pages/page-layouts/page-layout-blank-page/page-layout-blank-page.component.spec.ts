import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutBlankPageComponent } from './page-layout-blank-page.component';

describe('PageLayoutBlankPageComponent', () => {
  let component: PageLayoutBlankPageComponent;
  let fixture: ComponentFixture<PageLayoutBlankPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutBlankPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutBlankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
