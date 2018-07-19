import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutOneColumnWideComponent } from './page-layout-one-column-wide.component';

describe('PageLayoutOneColumnWideComponent', () => {
  let component: PageLayoutOneColumnWideComponent;
  let fixture: ComponentFixture<PageLayoutOneColumnWideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLayoutOneColumnWideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutOneColumnWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
