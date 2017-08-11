import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconcillationComponent } from './reconcillation.component';

describe('ReconcillationComponent', () => {
  let component: ReconcillationComponent;
  let fixture: ComponentFixture<ReconcillationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconcillationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconcillationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
