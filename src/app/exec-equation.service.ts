import { Injectable } from '@angular/core';
import { Equation } from './equation';
import { AstNode, NumberNode } from './equation-ast';

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
    const parts = rootNode.children.slice();
    const expression = parts.pop();

    // TODO: replace with inverse functionality
    // Get the result variables
    const resultKeys = [];
    for (const part of parts) {
      if (part.children.length === 1) {
        const term = part.children[0];
        if (term.children.length === 1) {
          const subExpr = term.children[0];
          if (subExpr.type === 'pronumeral') {
            resultKeys.push(subExpr.value);
          }
        }
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
      case 'expression':
        return node.children.reduce((sum, exp) => sum + this.evalNode(exp, context), 0);
      case 'term':
        return node.children.reduce((prod, exp) => prod * this.evalNode(exp, context), 1);
      case 'pronumeral':
        return context[node.value] ?? NaN;
      case 'number':
        return (node as NumberNode).value;
      default:
        throw `IDK ${node.type}`;
    }
  }

}
