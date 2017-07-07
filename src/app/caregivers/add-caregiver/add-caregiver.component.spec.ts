import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaregiverComponent } from './add-caregiver.component';

describe('AddCaregiverComponent', () => {
  let component: AddCaregiverComponent;
  let fixture: ComponentFixture<AddCaregiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaregiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
