const S = require("sanctuary");
const R = require("ramda");

const convertRawDataToInputData = version => raw => {
    // if parseInt(version) is greater than 3 return a left
    /*S.ifElse(
        S.allPass(!S.isNothing, S.gte(4)),
        x => S.Left("Versions greater than 3 not supported"),
        S.Right,
        S.parseInt(10, version)
    )
    S.gte(4)(S.parseInt(10, version))*/
    return version + raw.v
}

const getVersionString = R.compose(
    S.map(S.trim),
    S.chain(S.encaseEither(S.I)(S.prop("v")))
)

const tryParseJSON = S.encaseEither(S.I)(JSON.parse)

const processQRCode = (qrCodeJSON) => {
    let raw = tryParseJSON(qrCodeJSON)
    let version = getVersionString(raw)

    return S.ap(S.map(convertRawDataToInputData)(version))(raw)
}

console.log(processQRCode('{"v":"1 ", "test": "test"}'))