import { Parjser, digit, anyCharOf, letter } from 'parjs';
import { map, maybe, then, or } from 'parjs/combinators';
import { multiple, multipleSepBy } from './parser.utils';

export class EquationAst {
  constructor(public readonly rootNode: EquationNode) {}

  public static parse(str: string): EquationAst | null {
    const res = pEquation.parse(str);
    if (res.isOk) {
      return new EquationAst(res.value);
    } else {
      console.warn(res.value);
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
  multiple(),
  map(digits => ({ type: 'number', value: parseInt(digits.join('')) })),
);

export interface PronumeralNode extends AstNode {
  type: 'pronumeral',
  value: string,
}
const pPronumeral: Parjser<PronumeralNode> = letter().pipe(
  map(value => ({ type: 'pronumeral', value })),
);

export type SubExpressionNode = NumberNode | PronumeralNode;
const pSubExpression: Parjser<SubExpressionNode> = or<PronumeralNode, NumberNode>(pNumber)(pPronumeral);

export type Sign = '+' | '-';
const pSign: Parjser<Sign> = maybe<Sign, '+'>('+')(anyCharOf('+-') as Parjser<Sign>);

export interface TermNode extends AstNode {
  type: 'term',
  sign: Sign,
  children: SubExpressionNode[],
}
const pTerm: Parjser<TermNode> = pSign.pipe(
  then(pSubExpression.pipe(
    multiple(),
  )),
  map(([sign, children]) => ({ type: 'term', sign, children })),
);

export interface ExpressionNode extends AstNode {
  type: 'expression',
  children: TermNode[],
}
const pExpression: Parjser<ExpressionNode> = pTerm.pipe(
  multiple(),
  map(children => ({ type: 'expression', children }))
);

export interface EquationNode extends AstNode {
  type: 'equation',
  children: ExpressionNode[],
}
const pEquation: Parjser<EquationNode> = pExpression.pipe(
  multipleSepBy('='),
  map(children => ({ type: 'equation', children })),
);
