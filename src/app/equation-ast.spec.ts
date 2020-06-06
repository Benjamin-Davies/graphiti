import { EquationAst } from './equation-ast';

describe('EquationAst', () => {
  it('should parse "x"', () => {
    const ast = EquationAst.parse('x');
    expect(ast).toBeTruthy();
    expect(ast.rootNode).toBeTruthy();

    expect(ast.rootNode.children[0].children[0].sign).toBe('+');
    expect(ast.rootNode.children[0].children[0].children[0].value).toBe('x');
  });

  it('should parse "y=2x" correctly', () => {
    const ast = EquationAst.parse('y=2x');
    expect(ast).toBeTruthy();
    expect(ast.rootNode).toBeTruthy();

    expect(ast.rootNode.type).toBe('equation');
    expect(ast.rootNode.children[0].children[0].children[0].value).toBe('y');
    expect(ast.rootNode.children[1].children[0].children[0].value).toBe(2);
    expect(ast.rootNode.children[1].children[0].children[1].value).toBe('x');
  });
});
