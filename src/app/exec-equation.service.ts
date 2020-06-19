import { Injectable } from '@angular/core';
import { Equation } from './equation';
import { AstNode, NumberNode, TermNode } from './equation-ast';

export interface Context {
  [key: string]: number;
}

@Injectable({
  providedIn: 'root'
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
      case 'pronumeral':
        return context[node.value] ?? NaN;
      case 'number':
        return (node as NumberNode).value;
      default:
        throw `IDK ${node.type}`;
    }
  }

}
