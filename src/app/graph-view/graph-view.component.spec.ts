import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Equation } from '../equation';
import { EquationsService } from '../equations.service';
import { GraphViewComponent } from './graph-view.component';

describe('GraphViewComponent', () => {
  let component: GraphViewComponent;
  let fixture: ComponentFixture<GraphViewComponent>;
  let equations: EquationsService;

  beforeEach(() => {
    localStorage.removeItem('equations');
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GraphViewComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    equations = TestBed.inject(EquationsService);
    fixture = TestBed.createComponent(GraphViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not crash for a basic equation', () => {
    equations.addEquation(new Equation());
    equations.equations[0].text = 'x';
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
