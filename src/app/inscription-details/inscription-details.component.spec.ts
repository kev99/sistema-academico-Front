import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDetailsComponent } from './inscription-details.component';

describe('InscriptionDetailsComponent', () => {
  let component: InscriptionDetailsComponent;
  let fixture: ComponentFixture<InscriptionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
