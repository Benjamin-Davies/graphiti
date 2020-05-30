import { Parjser, digit, anyCharOf } from 'parjs';
import { map, manySepBy, maybe, then } from 'parjs/combinators';

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

export interface NumberNode extends AstNode {
  type: 'number',
  value: number,
}
const pNumber: Parjser<NumberNode> = digit(10).pipe(
  manySepBy(''),
  map(digits => ({ type: 'number', value: parseInt(digits.join('')) })),
);

const pSign = maybe<'-', '+'>('+')(anyCharOf('-') as Parjser<'-'>);

export interface TermNode extends AstNode {
  type: 'term',
  sign: '+' | '-',
  children: NumberNode[],
}
const pTerm: Parjser<TermNode> = pSign.pipe(
  then(pNumber.pipe(
    manySepBy('*'),
  )),
  map(([sign, children]) => ({ type: 'term', sign, children })),
);

export interface ExpressionNode extends AstNode {
  type: 'expression',
  children: TermNode[],
}
const pExpression: Parjser<ExpressionNode> = pTerm.pipe(
  manySepBy('+'),
  map(children => ({ type: 'expression', children }))
);

export interface EquationNode extends AstNode {
  type: 'equation',
  children: ExpressionNode[],
}
const pEquation: Parjser<EquationNode> = pExpression.pipe(
  manySepBy('='),
  map(children => ({ type: 'equation', children })),
);
