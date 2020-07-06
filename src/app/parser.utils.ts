import { ImplicitParjser, ParjsCombinator, ParsingState, ResultKind, Parjser } from 'parjs';
import { many, map, then } from 'parjs/combinators';
import { ParjserBase } from 'parjs/internal/parser';

export function defer<T>(f: () => Parjser<T>): Parjser<T> {
  return new DeferedParser(f as () => ParjserBase);
}

class DeferedParser extends ParjserBase {
  get type() {
    try {
      return this.p.type;
    } catch (_) {
      return 'defer';
    }
  }
  get expecting() {
    try {
      return this.p.expecting;
    } catch (_) {
      return 'defered value';
    }
  }

  private pCache: ParjserBase | null = null;
  private get p() {
    return this.pCache ?? (this.pCache = this.f());
  }

  constructor(private f: () => ParjserBase) {
    super();
  }

  // tslint:disable-next-line
  _apply(ps: ParsingState) {
    this.p.apply(ps);
  }
}

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

// If the parser fails, then make it always be a SoftFail
export function softFailure<T>(): ParjsCombinator<T, T> {
  return (p) => {
    return new SoftFailureParser(p as ParjserBase);
  };
}

class SoftFailureParser extends ParjserBase {
  type = 'softFailure';
  expecting: string | object = 'child to succeed';

  constructor(private p: ParjserBase) {
    super();
    this.expecting = p.expecting;
  }

  // tslint:disable-next-line
  _apply(ps: ParsingState) {
    const { position } = ps;

    this.p.apply(ps);

    if (!ps.isOk) {
      ps.position = position;
      ps.kind = ResultKind.SoftFail;
    }
  }
}
