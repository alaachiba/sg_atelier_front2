import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAtelierComponent } from './modifier-atelier.component';

describe('ModifierAtelierComponent', () => {
  let component: ModifierAtelierComponent;
  let fixture: ComponentFixture<ModifierAtelierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierAtelierComponent]
    });
    fixture = TestBed.createComponent(ModifierAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
