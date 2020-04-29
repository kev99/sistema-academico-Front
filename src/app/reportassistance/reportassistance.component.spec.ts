import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportassistanceComponent } from './reportassistance.component';

describe('ReportassistanceComponent', () => {
  let component: ReportassistanceComponent;
  let fixture: ComponentFixture<ReportassistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportassistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportassistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
