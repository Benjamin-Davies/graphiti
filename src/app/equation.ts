import { EquationAst } from './equation-ast';

export class Equation {

  private _text: string = '';
  private _ast: EquationAst | null = null;

  public get text(): string {
    return this._text;
  }
  public set text(text: string) {
    this._ast = EquationAst.parse(text);
    this._text = text;

    console.log(text, this.ast);
  }

  public get ast(): EquationAst | null {
    return this._ast;
  }

  constructor() {}

}
