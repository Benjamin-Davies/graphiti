import { EquationAst } from './equation-ast';

describe('EquationAst', () => {
  it('should parse "x"', () => {
    const ast = EquationAst.parse('x');
    expect(ast).toBeTruthy();
    expect(ast.rootNode).toBeTruthy();

    expect(ast.rootNode.children[0].children[0].sign).toBe('+');
    expect(ast.rootNode.children[0].children[0].children[0].value).toBe('x');
  });
});
