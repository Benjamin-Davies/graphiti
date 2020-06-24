import { EquationAst, TermNode } from './equation-ast';

describe('EquationAst', () => {
  it('should parse "x"', () => {
    const ast = EquationAst.parse('x');
    expect(ast).toBeTruthy();
    expect(ast.rootNode).toBeTruthy();
    expect(ast.rootNode.type).toBe('equation');
    expect(ast.rootNode.children.length).toBe(1);

    const term = ast.rootNode.children[0] as TermNode;
    expect(term.type).toBe('term');
    expect(term.sign).toBe('+');
    expect(term.children.length).toBe(1);
    expect(term.children[0].value).toBe('x');
  });

  it('should parse "y=2x" correctly', () => {
    const ast = EquationAst.parse('y=2x');
    expect(ast).toBeTruthy();
    expect(ast.rootNode).toBeTruthy();
    expect(ast.rootNode.type).toBe('equation');
    expect(ast.rootNode.children.length).toBe(2);

    const term0 = ast.rootNode.children[0] as TermNode;
    expect(term0.children[0].value).toBe('y');

    const term1 = ast.rootNode.children[1] as TermNode;
    expect(term1.children[0].value).toBe(2);
    expect(term1.children[1].value).toBe('x');
  });

  it('should parse "y=3x^2" correctly', () => {
    const ast = EquationAst.parse('y=3x^2');
    expect(ast).toBeTruthy();
    expect(ast.rootNode).toBeTruthy();
    expect(ast.rootNode.type).toBe('equation');
    expect(ast.rootNode.children.length).toBe(2);

    const term0 = ast.rootNode.children[0] as TermNode;
    expect(term0.children[0].value).toBe('y');

    const term1 = ast.rootNode.children[1] as TermNode;
    expect(term1.children[0].value).toBe(3);
    expect(term1.children[1].type).toBe('exponential');
    expect(term1.children[1].children[0].value).toBe('x');
    expect(term1.children[1].children[1].value).toBe(2);
  });
});
