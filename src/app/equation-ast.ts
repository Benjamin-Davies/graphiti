import { anyChar, Parjser } from 'parjs';
import { map, then, manySepBy } from 'parjs/combinators';

export class EquationAst {
  constructor(public readonly rootNode: EquationNode) {}

  public static parse(str: string): EquationAst | null {
    const res = pEquation.parse(str);
    if (res.isOk) {
      return new EquationAst(res.value);
    } else {
      return null;
    }
  }
}

export interface AstNode {
  type: string;
  value?: string | number;
  children?: AstNode[];
}

export interface SumNode {

}
const pSum: Parjser<SumNode> = anyChar();

export interface EquationNode {
  type: 'equation',
  children: SumNode[],
}
const pEquation: Parjser<EquationNode> = pSum.pipe(
  manySepBy('='),
  map(children => ({ type: 'equation', children })),
);
