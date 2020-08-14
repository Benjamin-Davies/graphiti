import { Subject } from 'rxjs';
import { ParjsParsingFailure } from 'parjs/errors';
import { EquationAst } from './equation-ast';

export class Equation {

  private textInternal = '';
  private astInternal: EquationAst | null = null;
  private errorInternal: ParjsParsingFailure | null = null;

  public readonly updates = new Subject<Equation>();

  public get text(): string {
    return this.textInternal;
  }
  public set text(text: string) {
    try {
      this.astInternal = EquationAst.parse(text);
      this.errorInternal = null;
    } catch (e) {
      this.astInternal = null;
      this.errorInternal = e;
    } finally {
      this.textInternal = text;
      this.updates.next(this);
    }
  }

  public get ast(): EquationAst | null {
    return this.astInternal;
  }
  public get error(): ParjsParsingFailure | null {
    return this.errorInternal;
  }

  constructor() {}

}
