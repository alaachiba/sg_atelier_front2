import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAteliersComponent } from './liste-ateliers.component';

describe('ListeAteliersComponent', () => {
  let component: ListeAteliersComponent;
  let fixture: ComponentFixture<ListeAteliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeAteliersComponent]
    });
    fixture = TestBed.createComponent(ListeAteliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
