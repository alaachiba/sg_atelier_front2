import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsAtelierComponent } from './participants-atelier.component';

describe('ParticipantsAtelierComponent', () => {
  let component: ParticipantsAtelierComponent;
  let fixture: ComponentFixture<ParticipantsAtelierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantsAtelierComponent]
    });
    fixture = TestBed.createComponent(ParticipantsAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
