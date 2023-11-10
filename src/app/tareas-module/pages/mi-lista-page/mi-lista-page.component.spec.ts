import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiListaPageComponent } from './mi-lista-page.component';

describe('MiListaPageComponent', () => {
  let component: MiListaPageComponent;
  let fixture: ComponentFixture<MiListaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiListaPageComponent]
    });
    fixture = TestBed.createComponent(MiListaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
