import { Subject } from 'rxjs';
import { EquationAst } from './equation-ast';

export class Equation {

  private textInternal = '';
  private astInternal: EquationAst | null = null;
  private errorInternal: string | null = null;

  public readonly updates = new Subject<Equation>();

  public get text(): string {
    return this.textInternal;
  }
  public set text(text: string) {
    try {
      this.astInternal = EquationAst.parse(text);
      this.errorInternal = null;
    } catch (e) {
      console.warn(e);
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
  public get error(): string | null {
    return this.errorInternal;
  }

  constructor() {}

}
