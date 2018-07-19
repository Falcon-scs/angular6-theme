import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagesSearchComponent } from './custom-pages-search.component';

describe('CustomPagesSearchComponent', () => {
  let component: CustomPagesSearchComponent;
  let fixture: ComponentFixture<CustomPagesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPagesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPagesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
