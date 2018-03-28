const S = require("../node_modules/sanctuary");
const R = require("../node_modules/ramda");

let x = {a: 2};
let y = {b: {c: 4}};

let pathBC = R.path(['b', 'c']);
let square = x => x * x;
let minusOne = R.add(-1);
let toThePowerOf4 = R.curry(Math.pow)(R.__, 4);

let extractPathAndSquiggleTheDiggle = R.pipe(
  pathBC,
  S.toMaybe,
  S.ap(S.Just(square)), // this is just a test (equivalent to S.map(square))
  S.map(minusOne),
  S.map(toThePowerOf4)
);

console.log(extractPathAndSquiggleTheDiggle(x));
console.log(extractPathAndSquiggleTheDiggle(y));