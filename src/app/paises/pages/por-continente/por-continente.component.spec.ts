import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorContinenteComponent } from './por-continente.component';

describe('PorContinenteComponent', () => {
  let component: PorContinenteComponent;
  let fixture: ComponentFixture<PorContinenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorContinenteComponent]
    });
    fixture = TestBed.createComponent(PorContinenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
