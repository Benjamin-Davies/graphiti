import { Component } from '@angular/core';
import { Equation } from './equation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  equation = new Equation();
}
