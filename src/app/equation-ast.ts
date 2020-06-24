import { anyCharOf, digit, letter, Parjser } from 'parjs';
import { map, maybe, or, then } from 'parjs/combinators';

import { multiple, multipleSepBy, singleOrMap, softFailure } from './parser.utils';

export class EquationAst {
  constructor(public readonly rootNode: EquationNode) {}

  public static parse(str: string): EquationAst | null {
    const res = pEquation.parse(str);
    if (res.isOk) {
      return new EquationAst(res.value);
    }
    console.warn(res.value);
    return null;

  }
}

export interface AstNode {
  type: string;
  value?: string | number;
  children?: AstNode[];
}

export interface NumberNode extends AstNode {
  type: 'number';
  value: number;
}
const pNumber: Parjser<NumberNode> = digit(10).pipe(
  or('.'),
  multiple(),
  map(digits => ({ type: 'number', value: parseFloat(digits.join('')) })),
);

export interface PronumeralNode extends AstNode {
  type: 'pronumeral';
  value: string;
}
const pPronumeral: Parjser<PronumeralNode> = letter().pipe(
  map(value => ({ value, type: 'pronumeral' })),
);

export type SubExpressionNode = NumberNode | PronumeralNode;
const pSubExpression: Parjser<SubExpressionNode> = or<PronumeralNode, NumberNode>(pNumber)(pPronumeral);

export interface ExponentialNode extends AstNode {
  type: 'exponential';
  children: [SubExpressionNode, SubExpressionNode];
}
const pExponential: Parjser<ExponentialNode> = pSubExpression.pipe(
  then('^'),
  softFailure(),
  then(pSubExpression),
  map(([[a, _], b]) => ({ type: 'exponential', children: [a, b] })),
);

export type Sign = '+' | '-';
const pSign: Parjser<Sign> = maybe<Sign, '+'>('+')(anyCharOf('+-') as Parjser<Sign>);

export interface TermNode extends AstNode {
  type: 'term';
  sign: Sign;
  children: (ExponentialNode | SubExpressionNode)[];
}
const pTerm: Parjser<TermNode> = pSign.pipe(
  then(pExponential.pipe(
    or(pSubExpression),
    multiple(),
  )),
  map(([sign, children]) => ({ sign, children, type: 'term' })),
);

export interface ProductNode extends AstNode {
  type: 'product';
  children: TermNode[];
}
const pProduct: Parjser<ExpressionNode> = pTerm.pipe(
  multipleSepBy('*'),
  singleOrMap(children => ({ children, type: 'product' })),
);

export interface SumNode extends AstNode {
  type: 'sum';
  children: ExpressionNode[];
}
const pSum: Parjser<ExpressionNode> = pProduct.pipe(
  multiple(),
  singleOrMap(children => ({ children, type: 'sum' })),
);

export type ExpressionNode = SumNode | ProductNode | TermNode;

export interface EquationNode extends AstNode {
  type: 'equation';
  children: ExpressionNode[];
}
const pEquation: Parjser<EquationNode> = pSum.pipe(
  multipleSepBy('='),
  map(children => ({ children , type: 'equation' })),
);
