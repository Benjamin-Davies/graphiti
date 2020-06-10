import { Injectable } from '@angular/core';
import { Subject, merge, Observable, OperatorFunction, scheduled, of } from 'rxjs';
import { switchMap, startWith, map, mergeMap } from 'rxjs/operators';

import { Equation } from './equation';

@Injectable({
  providedIn: 'root'
})
export class EquationsService {

  private _equations: readonly Equation[] = [];

  public readonly arrayUpdates = new Subject<readonly Equation[]>();
  public get updates(): Observable<Equation | readonly Equation[]> {
    return this.arrayUpdates.pipe(
      startWith(this.equations),
      switchMap(a => of(
        ...a.map(e => e.updates),
      ).pipe(
        mergeMap(x=>x),
        startWith(a)
      ))
    )
  }

  public get equations(): readonly Equation[] {
    return this._equations;
  }
  public set equations(equations: readonly Equation[]) {
    this._equations = equations;

    this.arrayUpdates.next(equations);
  }

  addEquation(equation: Equation) {
    const newEquations = Array.from(this.equations);
    newEquations.push(equation);
    this.equations = newEquations;
  }

  deleteEquation(equation: Equation) {
    const newEquations = Array.from(this.equations);
    const index = newEquations.indexOf(equation);
    newEquations.splice(index, 1);
    this.equations = newEquations;
  }

}
