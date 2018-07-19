import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLayoutsComponent } from './cards-layouts.component';

describe('CardsLayoutsComponent', () => {
  let component: CardsLayoutsComponent;
  let fixture: ComponentFixture<CardsLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
