import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationSubHeaderComponent } from './medication-sub-header.component';

describe('MedicationSubHeaderComponent', () => {
  let component: MedicationSubHeaderComponent;
  let fixture: ComponentFixture<MedicationSubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationSubHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
