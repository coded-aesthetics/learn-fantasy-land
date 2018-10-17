var S = require("sanctuary")
const R = require("ramda")

const a = [1,2]
const b = [4,7]
const c = [8,9,0]

const f = x => x * x

console.log('--------- Semigroup ----------')
console.log('------- associativity -------')
console.log('[THIS:  ] a.concat(b).concat(c)')
console.log(S.concat(S.concat(a, b), c), 'S.concat(S.concat(a, b), c)')
console.log('[EQUALS ] a.concat(b.concat(c))')
console.log(S.concat(a, S.concat(b, c)), 'S.concat(a, S.concat(b, c))')
console.log('----------- Alt -----------')
console.log('------- associativity -------')
console.log('[THIS:  ] a.alt(b).alt(c)')
console.log(S.alt(S.alt(a, b), c), 'S.alt(S.alt(a, b), c)')
console.log('[EQUALS ] a.alt(b.alt(c))')
console.log(S.alt(a, S.alt(b, c)), 'S.alt(a, S.alt(b, c))')
console.log('------ distributivity ------')
console.log('[THIS:  ] a.alt(b).map(f)')
console.log(S.map(f, S.alt(a, b)))
console.log('[EQUALS ] a.map(f).alt(b.map(f))')
console.log(S.alt(S.map(f, a), S.map(f, b)))
console.log(`For arrays, the distributivity also holds when using the concat method.
The main difference between Alt and Semigroup is, that a Semigroup is not a Functor, so we can't map over it.
(Which is required for the distributivity law)`)