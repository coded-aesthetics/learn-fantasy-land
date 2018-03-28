var S = require("../node_modules/sanctuary");
const R = require("../node_modules/ramda");

console.log("S.of(S.Maybe, 42) =", S.of(S.Maybe, 42));
console.log("S.map(x=>x*x, [1,2,3,4]) =", S.map(x=>x*x, [1,2,3,4]));
console.log("S.toMaybe(null) =", S.toMaybe(null));
console.log("S.toMaybe(42) =", S.toMaybe(42));
console.log("S.toEither('XYZ', null) =", S.toEither("XYZ", null));
console.log('S.toEither("XYZ", "ABC") =', S.toEither("XYZ", "ABC"));
console.log('S.bimap(S.toUpper, S.add(1), S.Left("abc")) =', S.bimap(S.toUpper, S.add(1), S.Left("abc")));
console.log('S.chain(x => S.Right(x*x), S.bimap(S.toUpper, S.add(1), S.Right(55))) =', S.chain(x => S.Right(x*x), S.bimap(S.toUpper, S.add(1), S.Right(55))));
console.log('S.join(S.Just(S.Just((4)))) =', S.join(S.Just(S.Just((4)))));
console.log('S.reduce(xs => x => x + xs, 0, [1, 2, 3, 4, 5]) =', S.reduce(xs => x => x + xs, 0, [1, 2, 3, 4, 5]));
console.log('S.reduce(xs => x => x, 0, S.Just(4)) =', S.reduce(xs => x => x, 0, S.Just(4)));
console.log('S.extend(x => x.value + 1, S.Nothing) =', S.extend(x => x.value + 1, S.Nothing));
console.log('S.extend(x => x.value + 1, S.Just(2)) =', S.extend(x => x.value + 1, S.Just(2)));
console.log('S.map(x => x + 1, S.Just(42)) =', S.map(x => x + 1, S.Just(42)))
console.log('S.Just(42).value =', S.Just(42).value);
console.log('S.contramap(s => s.length, Math.sqrt)("Sanctuary") =', S.contramap(s => s.length, Math.sqrt)('Sanctuary'));
console.log('S.contramap(Math.sqrt, x => x + "abc")(9) =', S.contramap(Math.sqrt, x => x + "abc")(9));
console.log('S.contramap(x => x, x => x)(42) =', S.contramap(x => x, x => x)(42));

console.log("S.ap([x => x+1, x => x*x], [1,2,3,4]) =", S.ap([x => x+1, x => x*x], [1,2,3,4]));
console.log('S.ap({a: x => S.parseInt(16)(x).value }, {a: "3", b: "4", c: "6"}) =', S.ap({a: x => S.parseInt(16)(x).value }, {a: "3", b: "4", c: "6"}));
console.log('S.map(S.parseInt(16), {a: "3", b: "4", c: "6"}) =', S.map(S.parseInt(16), {a: "3", b: "4", c: "6"}));
console.log('S.map(S.parseInt(16), {a: "3", b: "4", c: "X"}) =', S.map(S.parseInt(16), {a: "3", b: "4", c: "X"}));

global.nanCheck = n => isNaN(n) ? S.Left('Result is not a number') : S.Right(n)

global.div = R.curry((a, b) => 
  b === 0 ? S.Left('Cant divide by zero')
          : S.Right(R.divide(a, b))
)

console.log('R.divide(3, 0) =', R.divide(3, 0))
console.log('div(3, 0) =', div(3, 0))
console.log('div(3, 2) =', div(3,2));

global.sqrt = n =>
  n < 0 ? S.Left('Cannot represent square root of negative number')
        : S.Right(Math.sqrt(n))

console.log("S.chain(sqrt, S.Left('Cannot divide by zero')) =", S.chain(sqrt, S.Left('Cannot divide by zero')));
console.log("S.chain(sqrt, S.Right(-1)) =", S.chain(sqrt, S.Right(-1)))
console.log("S.chain(sqrt, S.Right(25)) =", S.chain(sqrt, S.Right(25)))

var q = R.pipe(S.Right, S.chain(div(3)), S.chain(sqrt))
q = R.compose(S.chain(nanCheck), S.chain(sqrt), S.chain(div(3)), S.toEither('Cannot process null or undefined values'))
console.log(`q = R.compose(S.chain(nanCheck), S.chain(sqrt), S.chain(div(3)), S.Right)`)

console.log('q(1) =', q(1));
console.log('q(0) =', q(0));
console.log('q(-1) =', q(-1));
console.log('q(null) =', q(null));
console.log('q(NaN) =', q(NaN));
console.log('S.isRight(q(1)) =', S.isRight(q(1)));
console.log('S.isRight(q(0)) =', S.isRight(q(0)));

console.log('S.map(x => x * x, S.Right(4)) =', S.map(x => x * x, S.Right(4)))
console.log('S.map(x => x * x, S.Left(4)) =', S.map(x => x * x, S.Left(4)))

console.log('S.lift2(S.add, S.Just(3), S.Just(2)) =', S.lift2(S.add, S.Just(3), S.Just(2)))
console.log("S.Either['@@type'] =", S.Either['@@type'])

console.log('S.alt({a:2, b: 3}, {b:6}) =', S.alt({a:2, b: 3}, {b:6}))

