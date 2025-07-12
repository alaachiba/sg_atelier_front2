import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAtelierComponent } from './ajouter-atelier.component';

describe('AjouterAtelierComponent', () => {
  let component: AjouterAtelierComponent;
  let fixture: ComponentFixture<AjouterAtelierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterAtelierComponent]
    });
    fixture = TestBed.createComponent(AjouterAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
