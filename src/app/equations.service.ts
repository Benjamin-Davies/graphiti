import { Injectable } from '@angular/core';
import { Subject, Observable, of, Subscription } from 'rxjs';
import { switchMap, startWith, map, mergeMap, debounceTime } from 'rxjs/operators';

import { Equation } from './equation';

@Injectable({
  providedIn: 'root'
})
export class EquationsService {

  private _equations: readonly Equation[] = [];

  public readonly arrayUpdates = new Subject<readonly Equation[]>();
  public get updates(): Observable<readonly Equation[]> {
    return this.arrayUpdates.pipe(
      startWith(this.equations),
      switchMap(a => of(
        ...a.map(e => e.updates),
      ).pipe(
        mergeMap(x => x),
        map(() => this.equations),
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

  private subscription: Subscription;
  constructor() {
    this.equations = loadEquations();
    this.subscription = this.updates.pipe(debounceTime(500)).subscribe({ next: saveEquations });
  }

  destroy() {
    this.subscription.unsubscribe();
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

const EQUATIONS_LOCALSTORAGE_KEY = 'equations';

interface EquationSaveFormat {
  text: string,
}

function loadEquations(): readonly Equation[] {
  try {
    const str = localStorage.getItem(EQUATIONS_LOCALSTORAGE_KEY);
    const arr = JSON.parse(str) as EquationSaveFormat[];
    return arr.map(({ text }) => {
      const equation = new Equation();
      equation.text = text;
      return equation;
    });
  } catch (e) {
    console.warn(e);
    return [];
  }
}

function saveEquations(equations: readonly Equation[]) {
  const arr: EquationSaveFormat[] = equations.map(equation => ({ text: equation.text }));
  const str = JSON.stringify(arr);
  localStorage.setItem(EQUATIONS_LOCALSTORAGE_KEY, str);
}
