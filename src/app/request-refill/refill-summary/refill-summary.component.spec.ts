import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillSummaryComponent } from './refill-summary.component';

describe('RefillSummaryComponent', () => {
  let component: RefillSummaryComponent;
  let fixture: ComponentFixture<RefillSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefillSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
