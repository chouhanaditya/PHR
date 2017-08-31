import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRefillComponent } from './request-refill.component';

describe('RequestRefillComponent', () => {
  let component: RequestRefillComponent;
  let fixture: ComponentFixture<RequestRefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
