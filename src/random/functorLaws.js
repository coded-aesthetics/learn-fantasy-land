var S = require("sanctuary");
const R = require("ramda");

let f = x => x - 1
let g = x => x * x

let u = S.range(1,5)

console.log('-----------  !FUNCTOR   ------------')
console.log(`f = x => x - 1
g = x => x * x`)
console.log('-----------  identity   ------------')
console.log('[THIS:  ] u =', u)
console.log('[EQUALS ] u.map(a => a)')
console.log(S.map(a => a, u), "S.map(a => a, u)")
console.log('----------- composition ------------')
console.log('u.map(g).map(f)')
console.log(S.map(f, S.map(g, u)), "S.map(f, S.map(g, u))")
console.log(S.compose(S.map(f), S.map(g))(u), "S.compose(S.map(f), S.map(g))(u)")
// console.log(R.compose(S.map(f), R.tap(console.log), S.map(g), R.tap(console.log))(u))
console.log('u.map(x => f(g(x)))')
console.log(S.map(x => f(g(x)), u), "S.map(x => f(g(x)), u)")
console.log(S.map(S.compose(f, g), u), "S.map(S.compose(f, g), u)")
// console.log(S.map(R.compose(R.tap(console.log), f, R.tap(console.log), g), u))
console.log('------------------------------------')