import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpaiscardComponent } from './verpaiscard.component';

describe('VerpaiscardComponent', () => {
  let component: VerpaiscardComponent;
  let fixture: ComponentFixture<VerpaiscardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerpaiscardComponent]
    });
    fixture = TestBed.createComponent(VerpaiscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
