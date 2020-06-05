import { many, then, map } from 'parjs/combinators';
import { ParjsCombinator, ImplicitParjser } from 'parjs';

export function multiple<T>(): ParjsCombinator<T, T[]> {
  return p =>
  (map (([a, b]) => [a, ...b])
       (then
        (many () (p))
        (p)))
}

export function multipleSepBy<T>(separator: ImplicitParjser<unknown>): ParjsCombinator<T, T[]> {
  return p =>
  (map (([a, b]) =>
        [a, ...b.map(([_, x]) => x)])
       (then
        (many
         ()
         (then (p) (separator)))
        (p)))
}
