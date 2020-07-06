import { TestBed } from '@angular/core/testing';

import { Equation } from './equation';
import { NumberNode, ProductNode, PronumeralNode, SumNode, TermNode, ExponentialNode, ParenthesesNode } from './equation-ast';
import { ExecEquationService } from './exec-equation.service';

describe('ExecEquationService', () => {
  let service: ExecEquationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExecEquationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use the evaluate function', () => {
    const evalNodeSpy = spyOn(service, 'evalNode');
    const equation = new Equation();
    equation.text = 'y=x';
    const context = {};

    service.execEquation(equation, context);

    expect(evalNodeSpy).toHaveBeenCalled();
  });

  it('3.14 = 3.14', () => {
    const node: NumberNode = {
      type: 'number',
      value: 3.14,
    };
    const context = {};

    const result = service.evalNode(node, context);

    expect(result).toBe(3.14);
  });

  it('x = x', () => {
    const x = Math.E;
    const node: PronumeralNode = {
      type: 'pronumeral',
      value: 'x',
    };
    const context = { x };

    const result = service.evalNode(node, context);

    expect(result).toBe(x);
  });

  it('-2x = -2 * x', () => {
    const x = 5;
    const node: TermNode = {
      type: 'term',
      sign: '-',
      children: [
        {
          type: 'number',
          value: 2,
        },
        {
          type: 'pronumeral',
          value: 'x',
        },
      ],
    };
    const context = { x };

    const result = service.evalNode(node, context);

    expect(result).toBe(-2 * x);
  });

  it('2*4 = 8', () => {
    const node: ProductNode = {
      type: 'product',
      children: [
        {
          type: 'term',
          sign: '+',
          children: [{ type: 'number', value: 2 }],
        },
        {
          type: 'term',
          sign: '+',
          children: [{ type: 'number', value: 4 }],
        },
      ],
    };
    const context = {};

    const result = service.evalNode(node, context);

    expect(result).toBe(8);
  });

  it('1+2 = 3', () => {
    const node: SumNode = {
      type: 'sum',
      children: [
        {
          type: 'term',
          sign: '+',
          children: [{ type: 'number', value: 1 }],
        },
        {
          type: 'term',
          sign: '+',
          children: [{ type: 'number', value: 2 }],
        },
      ],
    };
    const context = {};

    const result = service.evalNode(node, context);

    expect(result).toBe(3);
  });

  it('4^5 = 1024', () => {
    const node: ExponentialNode = {
      type: 'exponential',
      children: [
        { type: 'number', value: 4 },
        { type: 'number', value: 5 },
      ],
    };
    const context = {};

    const result = service.evalNode(node, context);

    expect(result).toBe(1024);
  });

  it('(5) = 5', () => {
    const node: ParenthesesNode = {
      type: 'parentheses',
      children: [
        {
          type: 'term',
          sign: '+',
          children: [{ type: 'number', value: 5 }],
        },
      ],
    };
    const context = {};

    const result = service.evalNode(node, context);

    expect(result).toBe(5);
  });
});
