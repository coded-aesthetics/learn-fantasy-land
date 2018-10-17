const {create, env} = require('../node_modules/sanctuary')
const R = require("../node_modules/ramda")
var {env: flutureEnv} = require('fluture-sanctuary-types')
var Future = require('fluture')
var axios = require('axios')

var S = create({checkTypes: true, env: env.concat(flutureEnv)})

const getFuture = Future.encaseP(axios.get)

const getTitle = R.map(S.encase(S.props(['data', 'title'])))
const getTitle2= R.compose(S.map, S.encase, S.props(['data', 'title']))
S.compose(getTitle, getFuture)('https://jsonplaceholder.typicode.com/posts/1')
 .fork(console.log, console.error)

let a = x => x * x
let b = x => x + 1
let c = x => x / 2

console.log(R.compose(c, b, a)(5), c(b(a(5))), R.pipe(a, b, c)(5))
console.log("but what i'm doing up there is: c(b(a))(5), not c(b(a(5))) that is why compose is not working")