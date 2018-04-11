const {create, env} = require('sanctuary')
const R = require('ramda')
var {env: flutureEnv} = require('fluture-sanctuary-types')
var Future = require('fluture')
var axios = require('axios')

var S = create({checkTypes: true, env: env.concat(flutureEnv)})
const getFuture = Future.encaseP(axios.get)

const getTitle = R.map(S.encase(S.props(['data', 'title'])))

module.exports = {
    fetchTitleOfPost: S.compose(getTitle, getFuture)('https://jsonplaceholder.typicode.com/posts/1')
}
