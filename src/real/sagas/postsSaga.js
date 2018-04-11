const { call, put, takeEvery, takeLatest } = require('redux-saga/effects')
const { fetchTitleOfPost } = require('../api/posts')
const { FETCH_POST_REQUESTED, FETCH_POST_SUCCEEDED, FETCH_POST_FAILED } = require('../actions/const')

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPost(action) {
    fetchTitleOfPost.fold(console.log, console.error)
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
module.exports = function* mySaga() {
  yield takeEvery(FETCH_POST_REQUESTED, fetchPost);
}