import { ImplicitParjser, ParjsCombinator } from 'parjs';
import { many, map, then } from 'parjs/combinators';

export function multiple<T>(): ParjsCombinator<T, T[]> {
  return p =>
  (map(([a, b]) => [a, ...b])(then(many()(p))(p)));
}

export function multipleSepBy<T>(separator: ImplicitParjser<unknown>): ParjsCombinator<T, T[]> {
  return p =>
  (map(([a, b]) =>
        [a, ...b.map(([_, x]) => x)])(then(many()(then(p)(separator)))(p)));
}

export function singleOrMap<A, B>(f: (arr: A[]) => B): ParjsCombinator<A[], A | B> {
  return map(arr => arr.length === 1 ? arr[0] : f(arr));
}
