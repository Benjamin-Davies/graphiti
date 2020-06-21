import { Subject } from 'rxjs';
import { EquationAst } from './equation-ast';

export class Equation {

  private textInternal = '';
  private astInternal: EquationAst | null = null;

  public readonly updates = new Subject<Equation>();

  public get text(): string {
    return this.textInternal;
  }
  public set text(text: string) {
    this.astInternal = EquationAst.parse(text);
    this.textInternal = text;

    this.updates.next(this);
  }

  public get ast(): EquationAst | null {
    return this.astInternal;
  }

  constructor() {}

}
