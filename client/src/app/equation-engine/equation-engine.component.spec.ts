import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationEngineComponent } from './equation-engine.component';

describe('EquationEngineComponent', () => {
  let component: EquationEngineComponent;
  let fixture: ComponentFixture<EquationEngineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquationEngineComponent]
    });
    fixture = TestBed.createComponent(EquationEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
