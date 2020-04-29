import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayreportComponent } from './payreport.component';

describe('PayreportComponent', () => {
  let component: PayreportComponent;
  let fixture: ComponentFixture<PayreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
