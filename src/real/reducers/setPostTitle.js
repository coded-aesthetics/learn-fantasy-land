const {FETCH_POST_SUCCEEDED} = require('../actions/const')

module.exports = (state = null, action) => {
    switch (action.type) {
        case FETCH_POST_SUCCEEDED:
            return action.title;
        default:
            return state;
    }
}