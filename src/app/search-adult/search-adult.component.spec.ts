import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdultComponent } from './search-adult.component';

describe('SearchAdultComponent', () => {
  let component: SearchAdultComponent;
  let fixture: ComponentFixture<SearchAdultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
