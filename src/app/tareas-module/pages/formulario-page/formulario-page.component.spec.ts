import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPageComponent } from './formulario-page.component';

describe('FormularioPageComponent', () => {
  let component: FormularioPageComponent;
  let fixture: ComponentFixture<FormularioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPageComponent]
    });
    fixture = TestBed.createComponent(FormularioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
