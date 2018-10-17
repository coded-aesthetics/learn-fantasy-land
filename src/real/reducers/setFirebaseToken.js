const {SET_FIREBASE_TOKEN} = require('../actions/const')

module.exports = (state = null, action) => {
    switch (action.type) {
        case SET_FIREBASE_TOKEN:
            return action.firebaseToken;
        default:
            return state;
    }
}