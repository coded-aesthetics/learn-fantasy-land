const Redux = require('redux')
const firebaseToken = require('./reducers/setFirebaseToken')
const postTitle = require('./reducers/setPostTitle')
const actionConsts = require('./actions/const')
const thunk = require('redux-thunk').default;
const { fetchPost } = require('./actions/posts')
const setFirebaseToken = require('./actions/setFirebaseTokenAction')

const libState = Redux.combineReducers({
    firebaseToken,
    postTitle
})

const store = Redux.createStore(
    libState,
    Redux.applyMiddleware(thunk)
)

store.subscribe(() => {
    console.log('----------------')
    console.log('current state:')
    console.log(store.getState())
})

store.dispatch(setFirebaseToken("tesgni9o"))
store.dispatch(fetchPost())