import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsistenceComponent } from './new-asistence.component';

describe('NewAsistenceComponent', () => {
  let component: NewAsistenceComponent;
  let fixture: ComponentFixture<NewAsistenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAsistenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
