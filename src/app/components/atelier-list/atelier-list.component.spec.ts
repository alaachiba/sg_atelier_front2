import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierListComponent } from './atelier-list.component';

describe('AtelierListComponent', () => {
  let component: AtelierListComponent;
  let fixture: ComponentFixture<AtelierListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtelierListComponent]
    });
    fixture = TestBed.createComponent(AtelierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
