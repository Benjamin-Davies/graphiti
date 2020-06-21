import { Equation } from './equation';

describe('Equation', () => {
  it('should create an instance', () => {
    expect(new Equation()).toBeTruthy();
  });

  it('should create an ast when text is set', () => {
    const equation = new Equation();

    expect(equation).toBeTruthy();
    expect(equation.ast).toBeNull();

    equation.text = 'y=2x';

    expect(equation.ast).toBeTruthy();
    expect(equation.ast.rootNode.type).toBe('equation');
  });
});
