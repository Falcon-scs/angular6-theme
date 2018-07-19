import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContentTypesComponent } from './cards-content-types.component';

describe('CardsContentTypesComponent', () => {
  let component: CardsContentTypesComponent;
  let fixture: ComponentFixture<CardsContentTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsContentTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsContentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
