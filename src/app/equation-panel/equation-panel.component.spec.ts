import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationPanelComponent } from './equation-panel.component';
import { Equation } from '../equation';

describe('EquationPanelComponent', () => {
  let component: EquationPanelComponent;
  let fixture: ComponentFixture<EquationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationPanelComponent);
    component = fixture.componentInstance;
    component.equation = new Equation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
