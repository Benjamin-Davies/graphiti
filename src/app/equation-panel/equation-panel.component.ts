import { Component, Input } from '@angular/core';
import { Equation } from '../equation';

@Component({
  selector: 'app-equation-panel',
  templateUrl: './equation-panel.component.html',
  styleUrls: ['./equation-panel.component.styl']
})
export class EquationPanelComponent {

  @Input() equation: Equation;

  get viewAst() {
    return JSON.stringify(this.equation.ast);
  }

  constructor() { }

}
