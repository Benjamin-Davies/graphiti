import { Component, OnInit } from '@angular/core';

import { Equation } from '../equation';
import { EquationsService } from '../equations.service';

@Component({
  selector: 'app-equation-panel',
  templateUrl: './equation-panel.component.html',
  styleUrls: ['./equation-panel.component.styl']
})
export class EquationPanelComponent {

  constructor(public equations: EquationsService) {}

  newEquation() {
    this.equations.addEquation(new Equation());
  }

}
