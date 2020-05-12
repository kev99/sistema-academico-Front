import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInscriptionComponent } from './search-inscription.component';

describe('SearchInscriptionComponent', () => {
  let component: SearchInscriptionComponent;
  let fixture: ComponentFixture<SearchInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
