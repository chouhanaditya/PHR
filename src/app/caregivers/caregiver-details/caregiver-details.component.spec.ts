import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverDetailsComponent } from './caregiver-details.component';

describe('CaregiverDetailsComponent', () => {
  let component: CaregiverDetailsComponent;
  let fixture: ComponentFixture<CaregiverDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
