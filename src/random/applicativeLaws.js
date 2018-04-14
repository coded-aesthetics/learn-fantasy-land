var S = require("sanctuary");
const R = require("ramda");

let f = x => x * x
let g = x => x - 1
let x = 3

let v = S.range(1,5)
let y = 4
let A = S.Maybe
let u = S.of(A, f)
let a = S.of(A, g)
let q = S.of(A, 5)

console.log('---------  !APPLICATIVE   -----------')
console.log('-----------  identity   ------------')
console.log('v.ap(A.of(x => x)) === v');
console.log('v =', v);
console.log(S.ap(S.of(Array, x => x), v), 'S.ap(S.of(Array, x => x), v)')
console.log('----------  homomorphism   ----------')
console.log('x =', x, ", f = x => x * x")
console.log('[THIS:  ] A.of(x).ap(A.of(f))')
console.log(S.ap(S.of(S.Either, f), S.of(S.Either, x)), 'S.ap(S.of(S.Either, f), S.of(S.Either, x))')
console.log('[EQUALS ] A.of(f(x))')
console.log(S.of(S.Either, f(x)), 'S.of(S.Either, f(x))')
console.log('----------  interchange   ----------')
console.log('y =', y, ", u = A.of(x => x * x)")
console.log('A.of(y).ap(u)')
console.log(S.ap(u, S.of(A, y)), 'S.ap(u, S.of(A, y))')
console.log('u.ap(A.of(q => q(y)))')
console.log(S.ap(S.of(A, q => q(y)), u), 'S.ap(S.of(A, q => q(y)), u)')
console.log('----------  composition -----------')
console.log('[THIS:  ] q.ap(u.ap(a.map(f => g => x => f(g(x)))))')
console.log(S.ap(S.ap(S.map(f => g => x => f(g(x)), a), u), q), 'S.ap(S.ap(S.map(f => g => x => f(g(x)), a), u), q)')
console.log(S.ap(S.ap(S.map(f => g => S.compose(f, g), a), u), q), 'S.ap(S.ap(S.map(f => g => S.compose(f, g), a), u), q)')
// console.log(S.ap(S.ap(S.map(f => g => {console.log(f(5)); console.log(g(5)); return S.compose(f, g)}, a), u), q))
console.log('[EQUALS ] q.ap(u).ap(a)')
console.log(S.ap(a, S.ap(u, q)), 'S.ap(a, S.ap(u, q))')
console.log(S.compose(S.ap(a), S.ap(u))(q), 'S.compose(S.ap(a), S.ap(u))(q)')
console.log('---------  !ALTERNATIVE   -----------')
console.log('--------  distributivity  -----------')
console.log('[THIS:  ] q.ap(a.alt(u))')
console.log(S.ap(S.alt(a, u), q), 'S.ap(S.alt(a, u), q)')
console.log('[EQUALS ] x.ap(a).alt(x.ap(u))')
console.log(S.alt(S.ap(a, q), S.ap(u, q)), 'S.alt(S.ap(a, q), S.ap(u, q))')
console.log('------------ annihilation ----------')
console.log('[THIS:  ] q.ap(A.zero())')
console.log(S.ap(S.zero(A),q))
console.log('[EQUALS ] A.zero()')
console.log(S.zero(A))
console.log('------------------------------------')
