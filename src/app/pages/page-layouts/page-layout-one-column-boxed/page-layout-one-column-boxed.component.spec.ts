import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutOneColumnBoxedComponent } from './page-layout-one-column-boxed.component';

describe('PageLayoutOneColumnBoxedComponent', () => {
  let component: PageLayoutOneColumnBoxedComponent;
  let fixture: ComponentFixture<PageLayoutOneColumnBoxedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutOneColumnBoxedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutOneColumnBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
