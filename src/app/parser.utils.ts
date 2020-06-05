import { many, then, map } from 'parjs/combinators';
import { ParjsCombinator } from 'parjs';

export function multiple<T>(): ParjsCombinator<T, T[]> {
  return p =>
  (map (([a, b]) => [a, ...b])
       (then
        (many () (p))
        (p)))
}
