const S = require("../node_modules/sanctuary");
const R = require("../node_modules/ramda");

console.log('S.traverse(Array, x => x.split(","), S.Just("1,2,3,4")) =', S.traverse(Array, x => x.split(","), S.Just("1,2,3,4")));
console.log('S.traverse(Array, x => x.split(","), ["1,2,3,4"]) =', S.traverse(Array, x => x.split(","), ["1,2,3,4"]));
console.log('S.traverse(S.Maybe, S.parseInt(16), {a: "3", b: "4", c: "6"}) =', S.traverse(S.Maybe, S.parseInt(16), {a: "3", b: "4", c: "6"}));
console.log('S.traverse(Array, x => S.Just(x.split(",")), S.Just("1,2,3,4")) =', S.traverse(Array, x => S.Just(x.split(",")), S.Just("1,2,3,4")));
console.log('S.traverse(Array, x => x.split(","), S.Right("1,2,3,4")) =', S.traverse(Array, x => x.split(","), S.Right("1,2,3,4")));
console.log('S.traverse(Array, x => x.split(","), S.Left("1,2,3,4")) =', S.traverse(Array, x => x.split(","), S.Left("1,2,3,4")));

console.log('S.traverse(S.Either, S.words, S.Nothing) =', S.traverse(S.Either, S.words, S.Nothing));


console.log('S.traverse(Array, S.parseInt(16), ["A", "B", "C"]) =', S.traverse(Array, S.parseInt(16), ["A", "B", "C"]));
console.log('S.traverse(S.Either, S.parseInt(16), ["A", "B", "C"]) =', S.traverse(S.Either, S.parseInt(16), ["A", "B", "C"]));
console.log("-=------------------------------------------------=-");
console.log('S.traverse(S.Maybe, S.parseInt(16), ["A", "B", "C"]) =', S.traverse(S.Maybe, S.parseInt(16), ["A", "B", "C"]));
console.log('S.map(S.parseInt(16), ["A", "B", "C"]) =', S.map(S.parseInt(16), ["A", "B", "C"]));
console.log("-=------------------------------------------------=-");
console.log("in some cases the first parameter seems to be ignored like here:");
console.log('S.traverse(S.Either, x => x.split(","), S.Right("1,2,3,4")) =', S.traverse(S.Either, x => x.split(","), S.Right("1,2,3,4")));
console.log('S.traverse(Number, x => x.split(","), S.Right("1,2,3,4")) =', S.traverse(Number, x => x.split(","), S.Right("1,2,3,4")));
console.log("what matters, is the type the initial value is wrapped in:");
console.log('S.traverse(S.Either, x => x.split(","), S.Just("1,2,3,4")) =', S.traverse(Number, x => x.split(","), S.Just("1,2,3,4")));
console.log('S.map( x => x.split(","), S.Right("1,2,3,4")) =', S.map( x => x.split(","), S.Right("1,2,3,4")));
console.log("-------------------------------------------------");
console.log('S.traverse(S.Maybe, S.parseInt(16), {a: "3", b: "4", c: "6"}) =', S.traverse(S.Maybe, S.parseInt(16), {a: "3", b: "4", c: "6"}));
console.log('S.map(S.parseInt(16), {a: "3", b: "4", c: "6"}) =', S.map(S.parseInt(16), {a: "3", b: "4", c: "6"}));
console.log("-------------------------------------------------");
console.log("in the following cases, the first parameter must fit the type returned by the 'mapping' function")
console.log('S.traverse(S.Either, x => S.Right(x), {a: "3", b: "4", c: "6"}) =', S.traverse(S.Either, x => S.Right(x), {a: "3", b: "4", c: "6"}));
console.log('S.traverse(S.Maybe, x => S.Just(x), {a: "3", b: "4", c: "6"}) =', S.traverse(S.Maybe, x => S.Just(x), {a: "3", b: "4", c: "6"}));
console.log('S.traverse(S.Maybe, x => S.parseInt(16, x), {a: "3", b: "4", c: "6"}) =', S.traverse(S.Maybe, x => S.parseInt(16, x), {a: "3", b: "4", c: "6"}));
console.log('S.traverse(S.Maybe, x => S.parseInt(16, x), {a: "3", b: "4", c: "X"}) =', S.traverse(S.Maybe, x => S.parseInt(16, x), {a: "3", b: "4", c: "X"}));
console.log('S.traverse(S.Maybe, x => [x], {a: "3", b: "4", c: "6"}) =', S.traverse(S.Maybe, x => [x], {a: "3", b: "4", c: "6"}));
console.log('R.map(x => [x], {a: "3", b: "4", c: "6"}) =', R.map(x => [x], {a: "3", b: "4", c: "6"}));

console.log("-------------------------------------------------");
console.log("looks like traverse is a sequence call with an initial mapping of the inner value")
console.log('S.sequence(Array, S.Just(["1", "2", "3"])) =', S.sequence(Array, S.Just(["1", "2", "3"])))
console.log('S.traverse(Array, x => x.split(","), S.Just("1,2,3")) =', S.traverse(Array, x => x.split(","), S.Just("1,2,3")))
console.log('S.sequence(S.Maybe, {a: S.Just("3"), b: S.Just("4"), c: S.Just("6")}) =', S.sequence(S.Maybe, {a: S.Just("3"), b: S.Just("4"), c: S.Just("6")}));
console.log('S.sequence(Array, {a: [3], b: [1], c: [2]}) =', S.sequence(Array, {a: [3], b: [1], c: [2]}));
console.log("but what in all seven hells is this??!")
console.log('S.sequence(Array, {a: [3], b: [1,2,3], c: [2,3]}) =', S.sequence(Array, {a: [3], b: [1,2,3], c: [2,3]}));
console.log("somehow sequence does also generate all permutations of the arrays contained...?!")
console.log("S.sequence(Array, [[1,2], [4,5], [7,6]]) = \n", S.sequence(Array, [[1,2], [4,5], [7,6]]))
