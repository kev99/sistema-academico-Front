import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAsistenceComponent } from './search-asistence.component';

describe('SearchAsistenceComponent', () => {
  let component: SearchAsistenceComponent;
  let fixture: ComponentFixture<SearchAsistenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAsistenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAsistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
