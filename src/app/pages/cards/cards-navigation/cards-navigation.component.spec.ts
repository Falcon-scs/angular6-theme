import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNavigationComponent } from './cards-navigation.component';

describe('CardsNavigationComponent', () => {
  let component: CardsNavigationComponent;
  let fixture: ComponentFixture<CardsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
