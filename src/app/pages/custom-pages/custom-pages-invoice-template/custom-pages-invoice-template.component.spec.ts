import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPagesInvoiceTemplateComponent } from './custom-pages-invoice-template.component';

describe('CustomPagesInvoiceTemplateComponent', () => {
  let component: CustomPagesInvoiceTemplateComponent;
  let fixture: ComponentFixture<CustomPagesInvoiceTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPagesInvoiceTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPagesInvoiceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
