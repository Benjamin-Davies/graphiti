import { EquationAst } from './equation-ast';
import { Subject } from 'rxjs';

export class Equation {

  private _text: string = '';
  private _ast: EquationAst | null = null;

  public readonly updates = new Subject<Equation>();

  public get text(): string {
    return this._text;
  }
  public set text(text: string) {
    this._ast = EquationAst.parse(text);
    this._text = text;

    this.updates.next(this);
  }

  public get ast(): EquationAst | null {
    return this._ast;
  }

  constructor() {}

}
