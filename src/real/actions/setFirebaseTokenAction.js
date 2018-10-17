const {SET_FIREBASE_TOKEN} = require('./const')

module.exports = (firebaseToken) => {
    return {type:SET_FIREBASE_TOKEN, firebaseToken}
}