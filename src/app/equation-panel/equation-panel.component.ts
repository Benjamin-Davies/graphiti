import { Component, OnInit } from '@angular/core';

import { Equation } from '../equation';
import { EquationsService } from '../equations.service';

@Component({
  selector: 'app-equation-panel',
  templateUrl: './equation-panel.component.html',
  styleUrls: ['./equation-panel.component.styl']
})
export class EquationPanelComponent implements OnInit {

  constructor(private equations: EquationsService) {}

  ngOnInit() {
    this.equations.addEquation(new Equation());
  }

  get equation(): Equation {
    return this.equations.equations[0];
  }

  get viewAst() {
    return JSON.stringify(this.equation.ast);
  }

}
