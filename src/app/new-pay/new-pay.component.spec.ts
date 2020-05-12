import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPayComponent } from './new-pay.component';

describe('NewPayComponent', () => {
  let component: NewPayComponent;
  let fixture: ComponentFixture<NewPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
