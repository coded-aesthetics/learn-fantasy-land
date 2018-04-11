const {SET_FIREBASE_TOKEN} = require('./const')
const { fetchTitleOfPost } = require('../api/posts')
const { FETCH_POST_REQUESTED, FETCH_POST_SUCCEEDED, FETCH_POST_FAILED } = require('../actions/const')

const fetchPostSuccess = (title) => {
    return {type: FETCH_POST_SUCCEEDED, title}
}

const fetchPostFail = (err) => {
    return {type: FETCH_POST_FAILED, err}
}

const fetchPost = () => {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return fetchTitleOfPost.fork(
      error => dispatch(fetchPostFail(error)),
      title => dispatch(fetchPostSuccess(title))
    )
  }
}

module.exports = {
    fetchPost,
    fetchPostFail,
    fetchPostSuccess
}