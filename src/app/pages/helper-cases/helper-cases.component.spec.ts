import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperCasesComponent } from './helper-cases.component';

describe('HelperCasesComponent', () => {
  let component: HelperCasesComponent;
  let fixture: ComponentFixture<HelperCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
