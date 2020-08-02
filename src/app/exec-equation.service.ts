import { Injectable } from '@angular/core';
import { Equation } from './equation';
import { AstNode, NumberNode, TermNode, ExponentialNode, InequalityNode, InequalityOperator } from './equation-ast';

export interface Context {
  [key: string]: number;
}

const inequalityOperators = new Map<
  InequalityOperator,
  (a: number, b: number) => boolean
>();
inequalityOperators.set('=', (a, b) => a === b);
inequalityOperators.set('!=', (a, b) => a !== b);
inequalityOperators.set('<', (a, b) => a < b);
inequalityOperators.set('<=', (a, b) => a <= b);
inequalityOperators.set('>', (a, b) => a > b);
inequalityOperators.set('>=', (a, b) => a >= b);

@Injectable({
  providedIn: 'root',
})
export class ExecEquationService {

  constructor() { }

  execEquation(equation: Equation, context: Context): Context {
    const rootNode = equation.ast?.rootNode;
    if (!rootNode) {
      return {};
    }

    // Extract the parts
    const exps = rootNode.children.slice();
    const expression = exps.pop();

    // TODO: replace with inverse functionality
    // Get the result variables
    const resultKeys = [];
    for (const exp of exps) {
      if (exp.type === 'term' && exp.children.length === 1 && exp.children[0].type === 'pronumeral') {
        resultKeys.push(exp.children[0].value);
      }
    }
    if (resultKeys.length === 0) {
      resultKeys.push('y');
    }

    // Evaluate the expression
    const result = this.evalNode(expression, context);

    // Create the resultant context
    const resultCtx = {};
    for (const key of resultKeys) {
      resultCtx[key] = result;
    }

    return resultCtx;
  }

  evalNode(node: AstNode, context: Context): number {
    switch (node.type) {
      case 'sum':
        return node.children.reduce((sum, exp) => sum + this.evalNode(exp, context), 0);
      case 'product':
        return node.children.reduce((prod, exp) => prod * this.evalNode(exp, context), 1);
      case 'term':
        return ((node as TermNode).sign === '-' ? -1 : 1)
          * node.children.reduce((prod, exp) => prod * this.evalNode(exp, context), 1);
      case 'exponential':
        const { children: [a, b] } = node as ExponentialNode;
        return Math.pow(this.evalNode(a, context), this.evalNode(b, context));
      case 'pronumeral':
        return context[node.value] ?? NaN;
      case 'number':
        return (node as NumberNode).value;
      case 'parentheses':
        return this.evalNode(node.children[0], context);
      case 'conditional':
        const res = this.evalNode(node.children[0], context);
        return Number.isNaN(res) ? NaN : 1;
      case 'inequality':
        return node.children.slice(1).reduce((a, bExp, i) => {
          if (Number.isNaN(a)) { return NaN; }

          const op = (node as InequalityNode).operators[i];
          const b = this.evalNode(bExp, context);
          return inequalityOperators.get(op)(a, b) ? b : NaN;
        }, this.evalNode(node.children[0], context));
      default:
        throw new Error(`IDK ${node.type}`);
    }
  }

}
