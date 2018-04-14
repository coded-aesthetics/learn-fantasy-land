var S = require("sanctuary");
const R = require("ramda");

let f = x => x * x
let g = x => x - 1

let A = Array
let u = S.of(A, f)
let a = S.of(A, g)
let q = S.of(A, 5)

console.log('---------  !ALTERNATIVE   -----------')
console.log('--------  distributivity  -----------')
console.log('[THIS:  ] q.ap(a.alt(u))')
console.log(S.ap(S.alt(a, u), q), 'S.ap(S.alt(a, u), q)')
console.log('[EQUALS ] x.ap(a).alt(x.ap(u))')
console.log(S.alt(S.ap(a, q), S.ap(u, q)), 'S.alt(S.ap(a, q), S.ap(u, q))')
console.log('------------ annihilation ----------')
console.log('[THIS:  ] q.ap(A.zero())')
console.log(S.ap(S.zero(A), q), 'S.ap(S.zero(A), q)')
console.log('[EQUALS ] A.zero()')
console.log(S.zero(A), 'S.zero(A)')
console.log('------------------------------------')
