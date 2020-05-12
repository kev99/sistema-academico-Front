import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultDetailsComponent } from './adult-details.component';

describe('AdultDetailsComponent', () => {
  let component: AdultDetailsComponent;
  let fixture: ComponentFixture<AdultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
