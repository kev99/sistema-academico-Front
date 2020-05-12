import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenceDetailsComponent } from './asistence-details.component';

describe('AsistenceDetailsComponent', () => {
  let component: AsistenceDetailsComponent;
  let fixture: ComponentFixture<AsistenceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
