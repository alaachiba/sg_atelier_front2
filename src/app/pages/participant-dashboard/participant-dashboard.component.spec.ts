import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantDashboardComponent } from './participant-dashboard.component';

describe('ParticipantDashboardComponent', () => {
  let component: ParticipantDashboardComponent;
  let fixture: ComponentFixture<ParticipantDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantDashboardComponent]
    });
    fixture = TestBed.createComponent(ParticipantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
