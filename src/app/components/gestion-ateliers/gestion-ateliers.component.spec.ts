import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAteliersComponent } from './gestion-ateliers.component';

describe('GestionAteliersComponent', () => {
  let component: GestionAteliersComponent;
  let fixture: ComponentFixture<GestionAteliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionAteliersComponent]
    });
    fixture = TestBed.createComponent(GestionAteliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
