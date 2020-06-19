import { TestBed } from '@angular/core/testing';

import { ExecEquationService } from './exec-equation.service';
import { Equation } from './equation';
import { NumberNode, PronumeralNode, TermNode, SumNode } from './equation-ast';

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
});
